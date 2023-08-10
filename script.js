$(function() {
    $('#button').on('click', function() {
      $.ajax({
        url: '/api/hello',
        type: 'GET',
        success: function(data) {
          $('#button').text(data);
        }
      });
    });
  });
  
 