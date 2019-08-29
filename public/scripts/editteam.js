"use strict";

$(function() {
  // Gets teamId from query
  let urlParams = new URLSearchParams(location.search);
  let id = urlParams.get("teamid");

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

  $("#submitBtn").on("click", sendForm);

  function sendForm() {
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
    location.href = "index.html";
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
