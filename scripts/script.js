
$ (document).ready(function() {
  $ ('#col1').click(function() {
    $( '.description1').show();
    $('#col1').hide();
  
  });
});
$ (document).ready(function() {
  $('.description1').click(function() {
    $('#col1').show();
    $('.description1').hide();
  });
});
$ (document).ready(function() {
  $ ('#col2').click(function() {
    $( '.description2').show();
    $('#col2').hide();
  
  });
});
$ (document).ready(function() {
  $('.description2').click(function() {
    $('#col2').show();
    $('.description2').hide();
  });
});
$ (document).ready(function() {
  $ ('#col3').click(function() {
    $( '.description3').show();
    $('#col3').hide();
  
  });
});
$ (document).ready(function() {
  $('.description3').click(function() {
    $('#col3').show();
    $('.description3').hide();
  });
});

function myFunction(event) { 
  event.preventDefault()

  var name = document.getElementById('name').value;
  console.log(name)
  var email = document.getElementById('email').value;
  console.log(email)
  var message = document.getElementById('message').value;
  console.log(message)
  if(!(message===" ") ) {
    alert("Thank you for contacting us," + name + ".We have received your message")
  }

}

  
  


