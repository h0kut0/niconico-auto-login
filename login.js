$(function() {
  chrome.storage.sync.get("data", function(items) {
    $('#input__mailtel').val(items.data.id);
    $('#input__password').val(items.data.pass);
  });

  setTimeout(function() {
    $('#login_form').submit();
  }, 500);
});
