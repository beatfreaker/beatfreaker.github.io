$(document).ready(function(){
	var colorMap = {"twitter":"#32CCFE","linkedin":"#0085AE","instagram":"#A1755C","skype":"#01AEF2","android":"#A5C63B","pinterest":"#CC2127","github":"#333","envelope":"#AEB5C5","facebook":"#3C599F"};
	var classValue;
	var delay = 50;
	$("li").each(function(index){
		classValue = $(this).attr("class");
		$(".fa-"+classValue).css("background-color",colorMap[classValue]);
	});
	var typingIndex = [2,2,2,0,4,4,0,4,4,4,0,6,6,0,8,0,2,0,6,6,0,7,7,7,0,2,0,3,0,4,4,4,0,2,0];

	var index=0;
	var maxIndex = 9;
	var zeroCount = 1;
	var delay = 300;

	function animateText(curr, prev) {
		if(prev != "undefined" && prev > 0 && prev <= maxIndex) {
			$("ul li:nth-child("+prev+")").removeClass("white");	
		}
		if(prev != "undefined" && curr > 0 && curr <= maxIndex) {
			$("ul li:nth-child("+curr+")").addClass("white");
		}
		if(curr == 0) {
			$(".full-name span:nth-child("+zeroCount+")").css("opacity","1");
			zeroCount++;
		}
		
		if(index < typingIndex.length) {
			index++;
			setTimeout(function(){removeClass(typingIndex[index-1])},delay);
		}
	}

	function removeClass(prev) {
		$("ul :nth-child("+prev+")").removeClass("white");
		if(typingIndex[index-1] == 0) {
			console.log(typingIndex[index-1]);
			setTimeout(function(){animateText(typingIndex[index],typingIndex[index-1])},50)	
		} else {
			setTimeout(function(){animateText(typingIndex[index],typingIndex[index-1])},delay)	
		}
		
	}

	function initiateOpacity() {
		var charLength = $(".full-name span").length;
		var count = 1;
		while(count <= charLength) {
			$(".full-name span:nth-child("+count+")").css("opacity","0.2");
			count++;
		}
	}
	initiateOpacity();
	animateText(typingIndex[index],typingIndex[index-1]);
});
