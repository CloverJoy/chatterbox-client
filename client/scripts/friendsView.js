var FriendsView = {

  $user: $('.username'),

  initialize: function() {
    FriendsView.$user.on('click', function(event) {
      console.log('test');
      Friends.toggle(this);
    });
    // $user.on('click', Friends.toggle(this))
    // console.log("friendsview initialize");
    // $(".username").on('click', function() {
    //   console.log(this);
    //   Friends.toggle(this);
    // });


  }
};