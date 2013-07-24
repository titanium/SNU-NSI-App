///////////////     athlete parent orientation    /////////////////////

Ti.App.addEventListener('athlete', function()
{
	var w = Titanium.UI.createWindow({
		title:'NSI 2012',
		url:'athleteparentorientation.js',
		barColor:'black'
		
	});
	var b = Titanium.UI.createButton({
		title:'Close',
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
	w.setLeftNavButton(b);
	b.addEventListener('click',function()
	{
		w.close();
	});
	w.open({modal:true});
});
