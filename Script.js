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


$(function () {
  $("input[name='chkPassPort']").click(function () {
    if ($("#chkYes").is(":checked")) {
      $("#dvPassport").show();
    } else {
      $("#dvPassport").hide();
    }
  });
});