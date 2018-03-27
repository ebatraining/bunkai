/* sample01
======================================== */
$(function() {
	var nav = $('.overimg');
	nav.hover(
		function(){
			$(this).fadeTo(500,0.5);
		},
		function () {
			$(this).fadeTo(500,1);
		}
	);
});// JavaScript Document