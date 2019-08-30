"use strict";

$(function() {
  // Gets teamId from query
  let urlParams = new URLSearchParams(location.search);
  let id = urlParams.get("teamid");
  $("#teamSubmitBtn").hide();
  $("#teamCancelBtn").hide();

  $("#teamEditBtn").on("click", function() {
    $("#teamEditBtn").hide();
    $("#teamCancelBtn").show();
    $("#teamSubmitBtn").show();
    $("#teamName").prop("readonly", false);
    $("#teamLeague").prop("disabled", false);
    $("#managerName").prop("readonly", false);
    $("#managerPhone").prop("readonly", false);
    $("#minAge").prop("readonly", false);
    $("#managerEmail").prop("readonly", false);
    $("#maxAge").prop("readonly", false);
    $("#maxTeamMembers").prop("disabled", false);
    $("#teamGender").prop("disabled", false);
    //  $("#editMode").show();
  });
  $("#teamCancelBtn").on("click", function() {
    $("#teamEditBtn").show();
    $("#teamCancelBtn").hide();
    $("#teamSubmitBtn").hide();
    $("#teamName").prop("readonly", true);
    $("#teamLeague").prop("disabled", true);
    $("#managerName").prop("readonly", true);
    $("#managerPhone").prop("readonly", true);
    $("#minAge").prop("readonly", true);
    $("#managerEmail").prop("readonly", true);
    $("#maxAge").prop("readonly", true);
    $("#maxTeamMembers").prop("disabled", true);
    $("#teamGender").prop("disabled", true);
    //$("#editMode").hide();
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

  $("#teamSubmitBtn").on("click", sendForm);

  function sendForm() {
    confirm("Are you sure you want to confirm these changes?");
    $.ajax({
      //if/else w validation, see editcourse
      url: "/api/teams/",
      method: "PUT",
      dataType: "json",
      data: $("#editTeam").serialize(),
      success: function() {
        alert("Updated!");
      }
    });
  }

  $.getJSON("/api/teams/" + id, function(data) {
    let team = data;

    $("#teamId").val(team.TeamId);
    $("#teamName").val(team.TeamName);
    $("#teamLeague").val(team.League);
    $("#managerName").val(team.ManagerName);
    $("#managerPhone").val(team.ManagerPhone);
    $("#managerEmail").val(team.ManagerEmail);
    $("#maxTeamMembers").val(team.MaxTeamMembers);
    $("#minAge").val(team.MinMemberAge);
    $("#maxAge").val(team.MaxMemberAge);
    $("#teamGender").val(team.TeamGender);
  });
});
