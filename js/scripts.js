$(document).ready(function() {
  $("#quiz_city").hide();
  $("#quiz_company").hide();
  $("#quiz_team").hide();
  $("#quiz_project").hide();
  $("#quiz_level").hide();
  $("#quiz_toy").hide();
  $("#quiz_reason").hide();
  $("#answers").hide();
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
    $("#answers").hide();
    $("#quiz_city").submit(function(event) {
      var city = $("input[name=type]:checked").val();
      $(".type").text(city);
    });
  });
  $("#next").click(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").show();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    $("#answers").hide();
    $("#quiz_company").submit(function(event) {
      var company = $("input[name=type]:checked").val();
      $(".type").text(company);
    });
  });
  $("#next1").click(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team ").show();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    $("#answers").hide();
    $("#quiz_team").submit(function(event) {
      var team = $("input[name=type]:checked").val();
      $(".type").text(team);
    });
  });
  $("#next2").click(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").show();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    $("#answers").hide();
    $("#quiz_project").submit(function(event) {
      var project = $("input[name=type]:checked").val();
      $(".type").text(project);
    });
  });
  $("#next3").click(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").show();
    $("#quiz_toy").hide();
    $("#quiz_reason").hide();
    $("#answers").hide();
    $("#quiz_level").submit(function(event) {
      var level = $("input[name=type]:checked").val();
      $(".type").text(level);
    });
  });
  $("#next4").click(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").show();
    $("#quiz_reason").hide();
    $("#answers").hide();
    $("#quiz_toy").submit(function(event) {
      var toy = $("input[name=type]:checked").val();
      $(".type").text(toy);
    });
  });
  $("#next5").click(function(event) {
    event.preventDefault();
    $("#text").hide();
    $("#quiz_city").hide();
    $("#quiz_company").hide();
    $("#quiz_team").hide();
    $("#quiz_project").hide();
    $("#quiz_level").hide();
    $("#quiz_toy").hide();
    $("#quiz_reason").show();
    $("#answers").hide();
    $("#quiz_reason").submit(function(event) {
      var reason = $("input[name=type]:checked").val();
      $(".type").text(reason);
    });
  });
  $("#next6").click(function(event) {
    event.preventDefault();
    if (company === "Large") {
      $('#C#').show();
      $('#Java').hide();
      $('#Ruby').hide();
      $('#PHP').hide();
      $('#CSS').hide();
      $('#WebDesign').hide();
    // } else if ( )  {
    //   $('#C#').hide();
    //   $('#Java').hide();
    //   $('#Ruby').hide();
    //   $('#PHP').hide();
    //   $('#CSS').hide();
    //   $('#WebDesign').hide();
    // } else {
    //   $('#C#').hide();
    //   $('#Java').hide();
    //   $('#Ruby').hide();
    //   $('#PHP').hide();
    //   $('#CSS').hide();
    //   $('#WebDesign').hide();
    }
});
