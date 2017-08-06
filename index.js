$.get('http://www.yinwang.org', function(data, status, xhr) {
		$(data).find('.list-group a').each(function (index, value) {
			var url  = 'http://www.yinwang.org' + $(this).attr('href');
			var title = $(this).text();
			articles.get('url', url, function(article) {
				if (article) return;

				$.get(url, function(data, status, xhr) {
					var content = $(data).find('td').eq(0).find('div').eq(1);
					content.find('h2').remove()
					var article = {
						title: title,
						content: content.html(),
						summary: content.text().substring(0, 30),
						url: url
					};
					articles.append(article);
				});
			});
		});
});
