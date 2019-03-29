$(document).ready(function() {
  // if ( ! $("input").is(':checked') ) {
  //   alert("Please select one of the following options");
  // } else {
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
  $("#start").click(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").show();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    // $("#answers").hide();
  });
    $("#quiz_city").submit(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").show();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    // $("#answers").hide();
  });
  $("#quiz_company").submit(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team ").show();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    // $("#answers").hide();
  });
  $("#quiz_team").submit(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").show();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    // $("#answers").hide();
  });
  $("#quiz_project").submit(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").show();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    // $("#answers").hide();
  });
  $("#quiz_level").submit(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").show();
    $("#quiz_reason").hide();
    // $("#answers").hide();
  });
  $("#quiz_toy").submit(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").show();
    // $("#answers").hide();
  });
  $("#quiz_reason").submit(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    // $("#answers").hide();

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
    }
    else {
        $('#WebDesign').show();
    }
});
});
