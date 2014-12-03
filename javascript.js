$("select").change(function(){
	$page = $(this).val();
})

$(".btn-primary").click(function(){
	window.location = $page;
})
