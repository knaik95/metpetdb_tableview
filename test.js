$(document).ready(function() {
	$('#my-table').dynatable({
		features: {
			paginate: true,
			sorting: true,
			search: true
		},
		dataset: {
			ajax: true,
			ajaxURL: 'https://www.dropbox.com/s/89jqzjr5vafx5wh/minerals2.json',
			ajaxOnLoad: true,
			records: []
		}
	})
});