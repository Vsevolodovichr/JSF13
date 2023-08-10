
(function() {
    // Get a random user from the API
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://randomuser.me/api/');
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Parse the JSON response
        var user = JSON.parse(xhr.responseText);
        // Set the user information on the page
        document.getElementById('name').innerText = user.name.first;
        document.getElementById('age').innerText = user.dob.age;
        document.getElementById('gender').innerText = user.gender;
        document.getElementById('country').innerText = user.location.country;
        document.getElementById('login').innerText = user.login.username;
        document.getElementById('password').innerText = user.login.password;
        document.getElementById('email').innerText = user.email;
      }
    };
    xhr.send();
  })();