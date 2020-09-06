(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here

  ajaxSwimCommand = () => {
    $.ajax({
      type: 'GET',
      url: serverUrl + '/swimCommand',
      success: (command) => {
        SwimTeam.move(command);
      },
      complete: () => {
        // setTimeout(ajaxSwimCommand, 100)
      }
    });
  }

  setTimeout(ajaxSwimCommand, 0);



  //
  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: '127.0.0.1:8080/',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        console.log('hello');
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
