var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/adobo/',
      url: 'adobo.html',
    },
    {
      path: '/afritada/',
      url: 'afritada.html',
    },
     {
      path: '/bulalo/',
      url: 'bulalo.html',
    },
     {
      path: '/kinilaw/',
      url: 'kinilaw.html',
    },
     {
      path: '/sisig/',
      url: 'sisig.html',
    },
     {
      path: '/tinola/',
      url: 'tinola.html',
    },
  ],
  // ... other parameters
});
var $$ = Dom7;

var mainView = app.views.create('.view-main');  

var myPhotoBrowserStandalone = app.photoBrowser.create({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ]
});
//Open photo browser on click
$$('.pb-standalone').on('click', function () {
    myPhotoBrowserStandalone.open();
});
