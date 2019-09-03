"use strict";

$(function() {
  // Gets teamId from query
  let urlParams = new URLSearchParams(location.search);
  let id = urlParams.get("teamid");

  // Hides Submit/Cancel/Edit Mode
  $("#teamSubmitBtn").hide();
  $("#teamCancelBtn").hide();
  $("#editMode").hide();
  $(".errorMsg").hide();

  // Edit Button enables fields, shows Submit/Cancel, hides self.
  $("#teamEditBtn").on("click", function() {
    $("#teamEditBtn").hide();
    $("#teamCancelBtn").show();
    $("#teamSubmitBtn").show();
    $("#teamName").prop("readonly", false);
    $("#teamLeague").prop("disabled", false);
    $("#managerName").prop("readonly", false);
    $("#managerPhone").prop("readonly", false);
    $("#minAge").prop("readonly", false);
    $("#emailAddr").prop("readonly", false);
    $("#maxAge").prop("readonly", false);
    $("#maxTeamMembers").prop("disabled", false);
    $("#teamGender").prop("disabled", false);
    $("#editMode").show();
  });
  // Cancel Button disables fields, hides Submit/Cancel, shows Edit
  $("#teamCancelBtn").on("click", function() {
    $("#teamEditBtn").show();
    $("#teamCancelBtn").hide();
    $("#teamSubmitBtn").hide();
    $("#teamName").prop("readonly", true);
    $("#teamLeague").prop("disabled", true);
    $("#managerName").prop("readonly", true);
    $("#managerPhone").prop("readonly", true);
    $("#minAge").prop("readonly", true);
    $("#emailAddr").prop("readonly", true);
    $("#maxAge").prop("readonly", true);
    $("#maxTeamMembers").prop("disabled", true);
    $("#teamGender").prop("disabled", true);
    $("#editMode").hide();
  });

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
      $("#minAge")
        .val()
        .trim() < 18
    ) {
      $("#minAgeError").text("Minimum Age must be greater than 18");
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

  // Submit button handler
  $("#teamSubmitBtn").on("click", sendForm);

  // Send form function
  function sendForm() {
    let isOk = inputVal();
    if (isOk == false) {
      return;
    } else {
      confirm("Are you sure you want to confirm these changes?");
      $.ajax({
        //if/else w validation, see editcourse
        url: "/api/teams/",
        method: "PUT",
        dataType: "json",
        data: $("#editTeam").serialize()
      });
      alert("Band Info updated!");
    }
  }

  // Populates form fields with current values.
  $.getJSON("/api/teams/" + id, function(data) {
    let team = data;

    $("#teamId").val(team.TeamId);
    $("#teamName").val(team.TeamName);
    $("#teamLeague").val(team.League);
    $("#managerName").val(team.ManagerName);
    $("#managerPhone").val(team.ManagerPhone);
    $("#emailAddr").val(team.ManagerEmail);
    $("#maxTeamMembers").val(team.MaxTeamMembers);
    $("#minAge").val(team.MinMemberAge);
    $("#maxAge").val(team.MaxMemberAge);
    $("#teamGender").val(team.TeamGender);
  });
});
