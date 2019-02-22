var chat = [];
var msg;
var final;

var loop = function(){
	document.getElementById("chat").innerHTML=chat;

	setTimeout(loop,100);
}
var keypressed = function(event){
	var key = event.keyCode || event.which;
	if(key === 13) submit();
}
var submit = function(){

}
setTimeout(loop,100);
