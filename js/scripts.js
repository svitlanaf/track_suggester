$(document).ready(function() {
  $("#quiz_city").hide();
  $("#quiz_company").hide();
  $("#quiz_team").hide();
  $("#quiz_project").hide();
  $("#quiz_level").hide();
  $("#quiz_toy").hide();
  $("#quiz_reason").hide();
  $("#C_Sharp").hide();
  $("#Java").hide();
  $("#Ruby").hide();
  $("#PHP").hide();
  $("#CSS").hide();
  $("#WebDesign").hide();
  $("#start_again").hide();

  $("#start").click(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").show();
  });
  $("#quiz_city").submit(function(event) {
    event.preventDefault();
    $("#quiz_city").hide();
    $("#quiz_company").show();
  });
  $("#quiz_company").submit(function(event) {
    event.preventDefault();
    $("#quiz_company").hide();
    $("#quiz_team ").show();
  });
  $("#quiz_team").submit(function(event) {

    event.preventDefault();
    $("#quiz_team").hide();
    $("#quiz_project").show();
  });
  $("#quiz_project").submit(function(event) {

    event.preventDefault();
    $("#quiz_project").hide();
    $("#quiz_level").show();
  });
  $("#quiz_level").submit(function(event) {

    event.preventDefault();
    $("#quiz_level").hide();
    $("#quiz_toy").show();
  });
  $("#quiz_toy").submit(function(event) {

    event.preventDefault();
    $("#quiz_toy").hide();
    $("#quiz_reason").show();
  });
  $("#quiz_reason").submit(function(event) {

    event.preventDefault();
    $("#quiz_reason").hide();

    if ($('input[name="company"]:checked').val() === "Large") {
      $('#C_Sharp').show();
    } else if ($('input[name="project"]:checked').val() === "Apps") {
      $('#Java').show();
    } else if ($('input[name="company"]:checked').val() === "Small") {
      $('#Ruby').show();
    } else if ($('input[name="project"]:checked').val() === "contentManagement") {
      $('#PHP').show();
    } else if ($('input[name="project"]:checked').val() === "Anything") {
      $('#CSS').show();
    } else {
      $('#WebDesign').show();
    }
    $("#start_again").show();

  });
  $("#start_again").click(function(event) {
    event.preventDefault();
    $("#text").show();
    $("#C_Sharp").hide();
    $("#Java").hide();
    $("#Ruby").hide();
    $("#PHP").hide();
    $("#CSS").hide();
    $("#WebDesign").hide();
    $("#start_again").hide();
  });

});
