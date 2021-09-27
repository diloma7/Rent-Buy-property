$(document).ready(function () {
  $('#sel').change(function () {
    $(this).find("option:selected").each(function () {
      var optionValue = $(this).attr("value");
      if (optionValue === 'Buy') {
        $('#Buy_prop').show();
        $('#Rental').hide();
      } else if (optionValue === 'Renting') {
        $('#Rental').show();
        $('#Buy_prop').hide();
      } else {
        $('#Buy_prop').hide();
        $('#Rental').hide();
      }
    });
  }).change();
});


$(document).ready(function () {
  $('#sel-vehicle').change(function () {
    $(this).find("option:selected").each(function () {
      var optionValue = $(this).attr("value");
      if (optionValue === 'yes') {
        $('#Buy_vehicle').show();
      } else {
        $('#Buy_vehicle').hide();
      }
    });
  }).change();
});


