$(document).ready(function() {

  $('form').submit(function(event){
    event.preventDefault();
    var info = $(this).serialize();
    console.log( info );
    $.post('/rolls', info, function(data){
      console.log(data);
      $( "#die" ).empty().append( data );//importante usar .empty o las respuestas se acumulan
    });

  });//end $(form).submit  
});
