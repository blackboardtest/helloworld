http('http://www.yinwang.org').get('/', function (error, response, body) {
	$ = cheerio.load(body);
	$('.list-group a').each(function (index, value) {
		var href  = $(this).attr('href');
		var title = $(this).text();
		var feed  = {
			href: href,
			title: title
		};
		feeds.append(feed);
	});
})
