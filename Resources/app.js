Ti.include('/campusmap.js');
Ti.include('/info.js');

// opens a safari webview link call
Ti.App.addEventListener('openLink', function(e){
	Ti.Platform.openURL(e.linkUrl);
});

// back button functionality in the nav bar --- It's not quite right!
//backButton.addEventListener('click', function(e){
//    Ti.Platform.goBack(e.goBack);
//});

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// create scroll view
var sv = Ti.UI.createScrollView({
	contentHeight:'auto',
	height:750,
	//width:480,
	verticalBounce:'YES'
});


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    //title:'Friday, August 17th',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({  
    icon:'icon17.png',
    title:'Friday',
    window:win1
});

var text1 = Titanium.UI.createWebView({
	color:'#999',
	top: 190,
	textAlign:'Left'
});

var view = Ti.UI.createView({
	backgroundColor:'#e3e3e3',
	font:{fontSize:20,fontFamily:'Verdana'},
	borderRadius: 10,
	top: 10,
	height:1000,
	width: 480
});

// scrollable view

var win = Ti.UI.createWindow();

var view1 = Ti.UI.createWebView({ backgroundColor:'#fff', url: 'fridaystudent.html',
	});
var view2 = Ti.UI.createWebView({ backgroundColor:'#fff', url: 'fridayparent.html',
	});


var scrollableView2 = Ti.UI.createScrollableView({
  views:[view1,view2],
  showPagingControl:true
});

var backButton = Ti.UI.createButton({
    backgroundImage: 'back.png',
    font: { fontSize: 13, fontWeight: 'bold' },
    height: 28,
    title: " Back",
    width: 51
});

// Testing this out from kitchensink.  Trying to create a modal.

//
//  TRADITIONAL MODAL (FROM 0.8.x)
//
var b3 = Titanium.UI.createButton({
	title:'Traditional Modal',
	width:200,
	height:40,
	top:110
});

// Just for viewing purposes to copy functionality off of, can be deleted
//  Ti.App.addEventListener('openLink', function(e){
//	Ti.Platform.openURL(e.linkUrl);
//});

//backButton.addEventListener('click', function()


/// End of traditional modal code

// left over from the back button testing out.  see line 7 possibly.
//backButton.addEventListener('click', function(e){
//    if (scrollableView2.canGoBack()) {
//    	scrollableView2.goBack();
//    } else {
//    	win1.open();
//			}    
//    navBar.close();
//});
win1.leftNavButton = backButton;

// Put everything together
win1.hideNavBar();
sv.add(view);
sv.add(text1);
win1.add(sv);
win1.add(scrollableView2);

//
// 2nd tab for Saturday  ------------------------------------------------------------------------------- //
//

// create scroll view
var sv2 = Ti.UI.createScrollView({
	contentHeight:'auto',
	height:750,
	//width:480,
	verticalBounce:'YES'
});


Ti.App.addEventListener("app:fromTitanium", function(e) {
			e.webView.close();
		});


var win2 = Titanium.UI.createWindow({  
    //title:'Saturday, August 18th',
    backgroundColor:'#fff'
});

var tab2 = Titanium.UI.createTab({  
    icon:'icon18.png',
    title:'Saturday',
    window:win2
});

var text2 = Titanium.UI.createWebView({
	color:'#999',
	top: 190,
	textAlign:'Left'
});

var view20 = Ti.UI.createView({
	backgroundColor:'#e3e3e3',
	font:{fontSize:20,fontFamily:'Verdana'},
	borderRadius: 10,
	top: 10,
	height:1000,
	width: 480
});

/// Scrollable view for students and parents

var win = Ti.UI.createWindow();

var view1 = Ti.UI.createWebView({ backgroundColor:'#fff', url: 'saturdaystudent.html',
	});
var view2 = Ti.UI.createWebView({ backgroundColor:'#fff', url: 'saturdayparent.html',
	});

var scrollableView2 = Ti.UI.createScrollableView({
  views:[view1,view2],
  showPagingControl:true
});

// Putting everything together
win2.hideNavBar()
win2.leftNavButton = backButton;
sv2.add(view20);
sv2.add(text2);
win2.add(sv2);
win2.add(scrollableView2);

///
// 3rd tab for Sunday ------------------------------------------------------------------------------- //
//

// create scroll view
var sv3 = Ti.UI.createScrollView({
	contentHeight:'auto',
	height:750,
	//width:480,
	verticalBounce:'YES'
});

var win3 = Titanium.UI.createWindow({  
    //title:'Sunday, August 19th',
    backgroundColor:'#fff'
});

var tab3 = Titanium.UI.createTab({  
    icon:'icon19.png',
    title:'Sunday',
    window:win3
});

var text3 = Titanium.UI.createWebView({
	color:'#999',
	top: 190,
	textAlign:'Left'
});

var view30 = Ti.UI.createView({
	backgroundColor:'#e3e3e3',
	font:{fontSize:20,fontFamily:'Verdana'},
	borderRadius: 10,
	top: 10,
	height:1000,
	width: 480
});

//  Scrollable view

var win = Ti.UI.createWindow();

var view1 = Ti.UI.createWebView({ backgroundColor:'#fff', url: 'sundaystudent.html',
	});
var view2 = Ti.UI.createWebView({ backgroundColor:'#fff', url: 'sundayparent.html',
	});

var scrollableView3 = Ti.UI.createScrollableView({
  views:[view1,view2],
  showPagingControl:true
});


win3.hideNavBar()
sv3.add(view30);
sv3.add(text3);
win3.add(sv3);
win3.add(scrollableView3);

//
// creates the 4th tab ------------------------------------------------------------------------------- //
//

// create scroll view
var sv4 = Ti.UI.createScrollView({
	contentHeight:'auto',
	height:750,
	//width:480,
	verticalBounce:'YES'
});


var win4 = Titanium.UI.createWindow({  
    //title:'Monday, August 20th',
    backgroundColor:'#fff'
});

var tab4 = Titanium.UI.createTab({  
    icon:'icon20.png',
    title:'Monday',
    window:win4
});

// Creates WebView to allow for the HTML to be used 

var text4 = Titanium.UI.createWebView({
	color:'#999',
	top: 190,
	textAlign:'Left'
});

var view4 = Ti.UI.createView({
	backgroundColor:'#e3e3e3',
	font:{fontSize:20,fontFamily:'Verdana'},
	borderRadius: 10,
	top: 10,
	height:1000,
	width: 480
});

// scrollable view

var win = Ti.UI.createWindow();

var view1 = Ti.UI.createWebView({ backgroundColor:'#fff', url: 'mondaystudent.html',
	});
var view2 = Ti.UI.createWebView({ backgroundColor:'#fff', url: 'mondayparent.html',
	});


var scrollableView4 = Ti.UI.createScrollableView({
  views:[view1,view2],
  showPagingControl:true
});



win4.hideNavBar()
sv4.add(view4);
sv4.add(text4);
win4.add(sv4);
win4.add(scrollableView4);

//
// creates the 5th tab ------------------------------------------------------------------------------- //
//

// create scroll view
var sv5 = Ti.UI.createScrollView({
	contentHeight:'auto',
	height:750,
	//width:480,
	verticalBounce:'YES'
});
            

var win5 = Titanium.UI.createWindow({  
    //title:'Tuesday, August 21st',
    backgroundColor:'#fff'
});

var tab5 = Titanium.UI.createTab({  
    icon:'icon21.png',
    title:'Tuesday',
    window:win5
});

// Creates WebView to allow for the HTML to be used 

var text5 = Titanium.UI.createWebView({
	color:'#999',
	top: 190,
	textAlign:'Left'
});

var view5 = Ti.UI.createView({
	backgroundColor:'#e3e3e3',
	font:{fontSize:20,fontFamily:'Verdana'},
	borderRadius: 10,
	top: 10,
	height:1000,
	width: 480
});

// scrollable view

var win = Ti.UI.createWindow();

var view1 = Ti.UI.createWebView({ backgroundColor:'#fff', url: 'tuesdaystudent.html',
	});
var view2 = Ti.UI.createWebView({ backgroundColor:'#fff', url: 'tuesdayparent.html',
	});


var scrollableView5 = Ti.UI.createScrollableView({
  views:[view1,view2],
  showPagingControl:true
});



win5.hideNavBar()
sv5.add(view5);
sv5.add(text5);
win5.add(sv5);
win5.add(scrollableView5);


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);  
tabGroup.addTab(tab5);  

// open tab group
tabGroup.open();
