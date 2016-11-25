$("#contactForm").submit(function( event ) {
  event.preventDefault();
  var name = $("#contactName").val();
  var email = $("#contactEmail").val();
  var message = $("#contactMessage").val();
  var text = message + "\n" + " from " + name + " " + email;
  var chat_id = 14174896;
  var url = "https://api.telegram.org/bot190531902:AAGEh0NWXgR37DaoiMVytlJ_iuf4iHPD6r8/sendMessage";
  $('#image-loader').fadeIn();
  httpGetAsync(url+"?"+"chat_id="+chat_id+"&text="+text, function() {
    $('#image-loader').fadeOut();
    $('#message-error').fadeIn();
  },function (){
    $('#image-loader').fadeOut();
    $('#message-success').fadeIn();
  }
);
});

function httpGetAsync(url, error, success) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.status == 200) {
      success();
    } else {
      error();
    }
  };
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}
