// check for any changes on INPUT checkbox tags

let check_list = {};
$(document).ready(function () {
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      check_list[$(this).data('id')] = $(this).data('name');
    } else {
      delete check_list[$(this).data('id')];
    }
    $('div.amenities h4').html(function () {
      let amenities_list = [];
      Object.keys(check_list).forEach(function (key) {
        amenities_list.push(check_list[key]);
      });
      if (amenities_list.length === 0) {
        return ('&nbsp');
      }
      return (amenities_list.join(', '));
    });
  });
});
