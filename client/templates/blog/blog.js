if (Meteor.isServer) {
  Blog.config({
    adminRole: 'blogAdmin',
    authorRole: 'blogAuthor'
  });
}

if (Meteor.isClient) {
  Blog.config({
    comments: {
      useSideComments: true,
      allowAnonymous: true
    }
  });
}