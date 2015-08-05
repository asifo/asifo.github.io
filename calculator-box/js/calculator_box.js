$(document).ready(function(){
	var total = 0;

	//Do this for a10, a20, a30, n10, n20, n30
	$("#a10").click(function(){
		$("#out").html(total+10);
	});

	$("#a20").click(function(){
		$("#out").html(total+20);
	});

	$("#a30").click(function(){
		$("#out").html(total+30);
	});

	$("#n10").click(function(){
		$("#out").html(total-10);
	});

	$("#n20").click(function(){
		$("#out").html(total-20);
	});

	$("#n30").click(function(){
		$("#out").html(total-30);
	});

	$("#red").click(function(){
		$("#out").css("background-color", "red");
	});

	$("#blue").click(function(){
		$("#out").css("background-color","blue");
	});

	$("#out").click(function(){
		$("#out").css("background-color","white");
		$("#out").html(total);
	});

	
});