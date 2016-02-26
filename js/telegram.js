$( "#contactForm" ).submit(function( event ) {
  $.get( "https://api.telegram.org/bot190531902:AAGEh0NWXgR37DaoiMVytlJ_iuf4iHPD6r8/sendMessage?chat_id=14174896&text=test", function() {
    alert( "success" );
  })
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
});
