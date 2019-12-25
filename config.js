/**
 * 需要转换为 pdf 的配置信息 
 */
module.exports = {
	url: 'https://time.geekbang.org/serv/v1/article',
	commentUrl: 'https://time.geekbang.org/serv/v1/comments',
	columnBaseUrl: 'https://time.geekbang.org/column/article/',
	commonUa: {
		'Content-Type': 'application/json',
		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36',
		'Cookie': 'gksskpitn=4cb88fca-eb07-470e-b884-0ca6d8930fdb; _ga=GA1.2.211609620.1577283617; _gid=GA1.2.279986320.1577283617; MEIQIA_TRACK_ID=1VTijkgUzDN8RgWMrRCL8zFBciS; MEIQIA_VISIT_ID=1VTijmmEYyL3mVVtmYkOad5BzFO; LF_ID=1577283623721-1792374-4910667; GCID=fc0290d-7853ae3-ffbed7f-e1d3cdc; GRID=fc0290d-7853ae3-ffbed7f-e1d3cdc; GCESS=BAQEAC8NAAsCBAAFBAAAAAACBCxwA14HBMgkIw4JAQEBBMDaEgAKBAAAAAAIAQMDBCxwA14MAQEGBKOtzRM-; Hm_lvt_022f847c4e3acd44d4a2481d9187f1e6=1577283617,1577283629,1577283669; Hm_lpvt_022f847c4e3acd44d4a2481d9187f1e6=1577283669; SERVERID=1fa1f330efedec1559b3abbcb6e30f50|1577283675|1577283616',
	},
	columnName: '深入剖析Kubernetes',
	firstArticalId: 14252, //专栏第一篇文章的ID
	isdownloadVideo: true, // 是否下载音频
	isComment: true, // 是否导出评论
	commentPages: 2, // 导出评论页数,默认一页20条
};