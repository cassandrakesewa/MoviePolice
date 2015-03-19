Router.route('/', function(){
  this.render('index');
}, {
  name: 'home'

});

Router.route('/visitorForm/:_id', function(){
  this.render('visitorForm');
}, {
  name: 'visitorForm'
});

Router.route('/admin', function(){
  this.render('adminPage');
}, {
  name: 'adminPage'
});