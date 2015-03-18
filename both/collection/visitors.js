Visitors = new Mongo.Collection('visitors');

Visitors.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 300,
    autoform: {
      afFieldInput:{
        class: 'contact-input'
      }
    }
  },
  email: {
    type: String,
    label: "Email",
    autoform: {
      afFieldInput:{
        type:'email',
        class: 'contact-input'
      }
    }
  }

}));