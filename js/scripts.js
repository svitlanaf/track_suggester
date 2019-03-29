$(document).ready(function() {
  // var company = $("input[name=company]:checked").val();
  // var project = $("input[name=project]:checked").val();
var company = $("form#quiz_company");

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
    $("#answers").hide();
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
    $("#answers").hide();
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
    $("#answers").hide();
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
    $("#answers").hide();
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
    $("#answers").hide();
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
    $("#answers").hide();
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
    $("#answers").hide();
  });

    if($('company input[name="company"]:checked').val() === "Large")

    {
      $('#C_Sharp').show();
      $('#Java').hide();
      $('#Ruby').hide();
      $('#PHP').hide();
      $('#CSS').hide();
      $('#WebDesign').hide();
    }

    // var form = $("form#submit_info");
    // form.submit(function(event) {
    //   event.preventDefault();
    //   $("#submit_info").hide();
    //   $("#submission").show();
    //   var firstnameInput = $("input#firstname").val();
    //   $(".firstname").text(firstnameInput);
    //   var lastnameInput = $("input#lastname").val();
    //   $(".lastname").text(lastnameInput);
    //   var addressInput = $("input#address").val();
    //   $(".address").text(addressInput);
    //   var sizeInput = $("#size").val();
    //   $(".size").text(sizeInput);
    //   var typeInput = $("input[name=type]:checked").val();
    //   $(".type").text(typeInput);

});
