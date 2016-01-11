$(function() {

  chrome.storage.sync.get("data", function(items) {
    $('#data').html('<p>ID：' + items.data.id + '</p><p>PASS：' + items.data.pass + '</p><p>最初にアクセスしたURL：'+items.data.url+'</p>');
  });


  $('#save').click(function() {
    $('#error').remove();
    var id = $('#id').val();
    var pass = $('#pass').val();

    if (!id || !pass) {
      $('#error').remove();
      $('#save').after('<p id="error">ID、PASSを記入してください</p>');

    } else {

      $('#error').remove();
      var data = {
        id: id,
        pass: pass
      };

      chrome.storage.sync.set({
        "data": data
      });
      window.close();

    }
  });
});
