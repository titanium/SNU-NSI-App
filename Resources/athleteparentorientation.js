var win = Titanium.UI.currentWindow;

var text = Titanium.UI.createWebView({
	color:'#999',
	top: 0,
	textAlign:'Left',
	url:'http://www.snu.edu/workshop-sessions'
});

win.add(text);