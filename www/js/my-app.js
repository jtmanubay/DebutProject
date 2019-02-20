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
      path: '/home/',
      url: 'index.html',
    },
    {
      path: '/precious18/',
      url: 'precious18.html',
    },
    {
      path: '/programme/',
      url: 'programme.html',
    } ,
    {
      path: '/location/',
      url: 'location.html',
    } ,
    {
      path: '/menu/',
      url: 'menu.html',
    }       

  ],
 
  
  
 
  
  // ... other parameters
});


var mainView = app.views.create('.view-main');  

