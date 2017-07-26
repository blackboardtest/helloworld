$.get('http://www.yinwang.org', function(data, status, xhr) {
		$(data).find('.list-group a').each(function (index, value) {
			var url  = 'http://www.yinwang.org' + $(this).attr('href');
			var title = $(this).text();
			articles.get('url', url, function(article) {
				if (article) return;

				$.get(url, function(data, status, xhr) {
					var article = {
						title: title,
						content: $(data).find('td').eq(0).find('div').eq(1).html(),
						summary: $(data).find('h2').next('p').val().substring(0, 30),
						url: url,
						time: ""
					};
					articles.append(article);
				});
			});
		});
});
