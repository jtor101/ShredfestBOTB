"use strict";

$(function() {
  $(".errorMsg").hide();

  // Populates dropdown with leagues.
  $.getJSON("/api/leagues", function(data) {
    let leagues = data;

    for (let i = 0; i < leagues.length; i++) {
      let leaguesAll = leagues[i];
      let element = document.createElement("option");
      element.text = leaguesAll.Name;
      element.value = leaguesAll.Code;
      $("#teamLeague").append(element);
    }
  });

  // Input Validation
  function inputVal() {
    $(".errorMsg")
      .hide()
      .empty();

    if (
      $("#teamName")
        .val()
        .trim() == ""
    ) {
      $("#teamNameError").text("Team Name required");
      $("#teamNameError").show();
      return false;
    }

    if (
      $("#managerName")
        .val()
        .trim() == ""
    ) {
      $("#managerNameError").text("Manager Name required");
      $("#managerNameError").show();
      return false;
    }

    if (
      $("#managerPhone")
        .val()
        .trim() == ""
    ) {
      $("#managerPhoneError").text("Manager Phone required");
      $("#managerPhoneError").show();
      return false;
    }

    if (
      $("#minAge")
        .val()
        .trim() == ""
    ) {
      $("#minAgeError").text("Minimum Age required");
      $("#minAgeError").show();
      return false;
    }

    if (
      $("#emailAddr")
        .val()
        .trim() == ""
    ) {
      $("#managerEmailError").text("Manager Email required");
      $("#managerEmailError").show();
      return false;
    }

    if (
      $("#maxAge")
        .val()
        .trim() == ""
    ) {
      $("#maxAgeError").text("Maximum Age required");
      $("#maxAgeError").show();
      return false;
    }
  }

  // Submit button click handler
  $("#submitBtn").on("click", function() {
    let isOk = inputVal();
    if (isOk == false) {
      return;
    } else {
      confirm("Are you sure you want to register this band?");
      $.post("api/teams", $("#registerTeam").serialize());
      alert("Band registered!");
      // Form action redirects to divisions.html
    }
  });
});
