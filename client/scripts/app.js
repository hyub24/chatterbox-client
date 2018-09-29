var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    
  },

  fetch: function(callback = ()=>{}) {
    
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      //Messages.data = data;
      //console.log(Messages.data);
      // console.log(Messages.database);
      // work in progress, initial rooms
      // var roomsArr = [];
      // for(var i = 0; i<data.results.length; i++) {
      //   roomsArr.push(data.results[i].roomname);
      // }
      // var uniqRooms = _.uniq(roomsArr); 
      // for(var j = 0; j<uniqRooms.length; j++) {
      //   RoomsView.$select.append(`<option>${uniqRooms[j]}</option>`)
      // }

      //console.log(roomsArr);
      callback();
    });

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
