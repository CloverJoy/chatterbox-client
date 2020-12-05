var Friends = {
  //class username
  //if we click, highlighted or bolded.
  //befriended
  //maybe make an array of friends.
  //if we click the username class. if its unique on the array of friends
  //add it
  //if not remove from the array
  list: [],

  toggle: function(friend) {

    if (Friends.indexOf(friend) === -1) {
      Friends.list.push(friend);
    } else if (Friends.indexOf(friend) !== -1) {
      var index = Friends.indexOf(friend);
      Friends.list.splice(index, 1);
    }
    console.log('clicked');
    console.log(Friends.list);
  },

};

