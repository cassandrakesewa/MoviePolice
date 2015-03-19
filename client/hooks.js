AutoForm.hooks({
  visitorForm: {
   formToDoc: function(doc, ss, formId) {
      // send MAIl to userId
      console.log(doc);
      var userName = doc.name;
      var userEmail = doc.email;

      if (userName && userEmail){
        var text = userName + " " + "Thanks for signing up with us. You will be the first to know the new movies tto be shown and the venue.";
        Meteor.call('sendEmail',  userEmail, "moviepolicer@gmail.com", "Movie Police", text, function(e,r){
          if (e){
            alert(e)
          } else {
            $('#success-modal').modal('show');
          }
        });
      }
      

      return doc
    }
  }
});
