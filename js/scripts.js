$(document).ready(function() {
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    $("#answers").hide();
  $("#start").submit(function(event) {
    event.preventDefault();
    $("#quiz_city").show();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    $("#answers").hide();
  });
  $("#quiz_city").submit(function(event) {
    event.preventDefault();
    $("#quiz_city").hide();
    $("#quiz_company").show();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    $("#answers").hide();
  });
  });
