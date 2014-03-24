$(function() {
	var viewGroup, $list_elem;
	
	$("#list_group").removeClass("hidden");
	$list_elem = $("#list");
	
	viewGroup = new GroupView($list_elem);		
});