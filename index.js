$.get('http://www.yinwang.org', function(data, status, xhr) {
		$(data).find('.list-group a').each(function (index, value) {
			var url  = 'http://www.yinwang.org' + $(this).attr('href');
			var title = $(this).text();
			articles.get('url', url, function(article) {
				if (article) return;

				$.get(url, function(data, status, xhr) {
					var html = $(data).find('td').eq(0).find('div').eq(1);
					html.find('h2').remove()

					var article = {
						title: title,
						content: html.html().trim(),
						summary: html.text().trim().substring(0, 50),
						url: url
					};
					articles.append(article);
				});
			});
		});
});
