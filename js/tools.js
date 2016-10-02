function $(selector,context){
	context = context || document;
	var firstChar = selector.charAt(0);
	if( firstChar == "#" ){
		return document.getElementById(selector.substring(1));
	} else if ( firstChar == "." ){
		return context.getElementsByClassName(selector.substring(1));
	} else {
		return context.getElementsByTagName(selector);
	}
}

function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}