// 获取每篇文章下面所有的评论
const config = require('./config.js');
const superagent = require('superagent');
const utils = require('./utils');

/**
 * 获取每篇文章下面所有的评论
 * @param {String} 文章的链接地址
 * @param {Number} 文章的ID
 */
async function downloadComments({ url, articleId, prev = 0, pageNumbers = 1 }) {
	console.log(url, articleId, prev, pageNumbers);
	console.log('开始获取 ', url, '评论');
	let commentsArr = [];
	let commentsTotal = 0;``
	let currentPage = 1;
	async function run(prev) {
		try {
			let res = await superagent.post(config.commentUrl)
				.set(Object.assign({}, config.commonUa, {
					'Referer': url,
				})).send({
					aid: articleId,
					prev: prev
				});
			if (res.body && res.body.error && res.body.error.code) {
				console.log('error msg', res.body.error.msg);
				throw new Error(res.body.error.msg);
			};
			let resData = res.body.data
			commentsTotal = resData.page.count;
			commentsArr.push(...resData.list);
			let nextPage = resData.page.more;
			if (nextPage && currentPage < pageNumbers) {
				index++;
				prev = resData.list[resData.list.length - 1].score;
				await utils.sleep(1);
				await run(prev);
			};
		} catch (err) {
			console.log(`获取 评论 ${url} err`, err.message);
		};
	};
	await run(prev);
	// console.log('commentsArr', commentsArr);
	// console.log('commentsTotal', commentsTotal);
	console.log('结束获取 ', url, '评论 总评论数为', commentsTotal);
	return { commentsArr, commentsTotal };
};

module.exports = downloadComments;