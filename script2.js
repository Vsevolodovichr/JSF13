$(function() {
    $('#button').on('click', function() {
      $.ajax({
        url: '/api/books',
        type: 'GET',
        success: function(data) {
          $.each(data.authors, function(i, author) {
            $('#authors').append($('<li>', {text: author}));
          });
        }
      });
    });
  });