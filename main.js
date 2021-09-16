function colorSearch() {
		let search, sort, list, li, a, i, input;
		search = document.getElementById('search_input');
		sort = search_input.value.toUpperCase();
		list = document.getElementById("list");
		li = list.getElementsByTagName('li');
		
		let colors = ['Blue', 'Brown','Cyan','Green','Orange','Purple','Red', 'Indigo', 'Tan','Yellow'];
		for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		input = a.textContent || a.innerText;
		if (input.toUpperCase().indexOf(sort) > -1) {
		li[i].style.display = "";
		} else {
		li[i].style.display = "none";
		}
	}
	$('#search_input').keyup(function(e) {
    $("#out").html($(this).val());
}).keypress(function(e) {
    return /[a-z0-9.-]/i.test(String.fromCharCode(e.which));
});
}