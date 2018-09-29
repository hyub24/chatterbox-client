var FormView = {

  $form: $('form'),


  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    //event.preventDefault();
    var inputText = document.getElementById("message").value;
    Parse.create({
      username: App.username,
      text: inputText,
      roomname: $("#currentRoom option:selected").val()

    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};