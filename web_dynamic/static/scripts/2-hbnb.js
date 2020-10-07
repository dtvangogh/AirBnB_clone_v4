// Checks for api status

let api_url = 'http://0.0.0.0:5001/api/v1/status/';
$.get(api_url, function (data, status) {
  console.log(data);
  if (data.status === 'OK') {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
});

// check for changes INPUT checkbox tagis

let checked_list = {};
$(document).ready(function () {
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      checked_list[$(this).data('id')] = $(this).data('name');
    } else {
      delete checked_list[$(this).data('id')];
    }
    $('div.amenities h4').html(function () {
      let amenities = [];
      Object.keys(checked_list).forEach(function (key) {
        amenities.push(checked_list[key]);
      });
      if (amenities.length === 0) {
        return ('&nbsp');
      }
      return (amenities.join(', '));
    });
  });
});
