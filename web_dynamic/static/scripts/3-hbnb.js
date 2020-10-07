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
 $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let place = data[i];
        $('.places ').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
      }
    }
  });
});
