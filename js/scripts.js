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
  $("#retry").hide();



  $("#submit_info").submit(function(event) {
    event.preventDefault();
    var firstnameInput = $("input#firstname").val();
    $(".firstname").text(firstnameInput);
    if ($('input').val() === "") {
      alert('Please enter your name');
      return;
    } else {
      $("submit_info").hide();
      $("#text").hide();
      $("#quiz_city").show();
    };
  });
  $("#quiz_city").submit(function(event) {
    event.preventDefault();
    if ($("input:radio[name='city']:checked").length === 0) {
      alert('Please select one option');
      return;
    } else {
      $("#quiz_city").hide();
      $("#quiz_company").show();
    };
  });
  $("#quiz_company").submit(function(event) {
    event.preventDefault();
    if ($("input:radio[name='company']:checked").length === 0) {
      alert('Please select one option');
      return;
    } else {
      $("#quiz_company").hide();
      $("#quiz_team ").show();
    };
  });
  $("#quiz_team").submit(function(event) {
    event.preventDefault();
    if ($("input:radio[name='team']:checked").length === 0) {
      alert('Please select one option');
      return;
    } else {
      $("#quiz_team").hide();
      $("#quiz_project").show();
    };
  });
  $("#quiz_project").submit(function(event) {
    event.preventDefault();
    if ($("input:radio[name='project']:checked").length === 0) {
      alert('Please select one option');
      return;
    } else {
      $("#quiz_project").hide();
      $("#quiz_level").show();
    };
  });
  $("#quiz_level").submit(function(event) {
    event.preventDefault();
    if ($("input:radio[name='level']:checked").length === 0) {
      alert('Please select one option');
      return;
    } else {
      $("#quiz_level").hide();
      $("#quiz_toy").show();
    };
  });
  $("#quiz_toy").submit(function(event) {
    event.preventDefault();
    if ($("input:radio[name='toy']:checked").length === 0) {
      alert('Please select one option');
      return;
    } else {
      $("#quiz_toy").hide();
      $("#quiz_reason").show();
    };
  });
  $("#quiz_reason").submit(function(event) {
    event.preventDefault();
    if ($("input:radio[name='reason']:checked").length === 0) {
      alert('Please select one option');
      return;
    } else {
      $("#quiz_reason").hide();
      if ($('input[name="company"]:checked').val() === "Large") {
        $('#C_Sharp').fadeIn();
      } else if ($('input[name="project"]:checked').val() === "Apps") {
        $('#Java').fadeIn();
      } else if ($('input[name="company"]:checked').val() === "Small") {
        $('#Ruby').fadeIn();
      } else if ($('input[name="project"]:checked').val() === "contentManagement") {
        $('#PHP').fadeIn();
      } else if ($('input[name="project"]:checked').val() === "Anything") {
        $('#CSS').fadeIn();
      } else {
        $('#WebDesign').fadeIn();
      }
      $("#retry").show();
    };
  });
  $("#retry").click(function(event) {
    document.getElementById("submit_info").reset();
    $('input[type=radio]').prop('checked', false);
    $("#text").show();
    $("#C_Sharp").hide();
    $("#Java").hide();
    $("#Ruby").hide();
    $("#PHP").hide();
    $("#CSS").hide();
    $("#WebDesign").hide();
    $("#retry").hide();
  });
});
