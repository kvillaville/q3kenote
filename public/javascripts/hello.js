$(function() {
  $( ".content" ).draggable();
});

$(document).ready(function(){

  $(".autocomplete").autocomplete({
    data: {
      "Maestro": null,
      "SecureAuth": null,
      "Walri": null
    }
  });
});

