"use strict";

$(function() {
  // Hides team details area
  $("#divisionArea3").hide();

  // Populates dropdown with leagues.
  $.getJSON("/api/leagues", function(data) {
    let leagues = data;

    for (let i = 0; i < leagues.length; i++) {
      let leaguesAll = leagues[i];
      let element = document.createElement("option");
      element.text = leaguesAll.Name;
      element.value = leaguesAll.Code;
      $("#divisionSel").append(element);
    }
  });

  // Changes band detail cards displayed on change of division selection.
  $("#divisionSel").on("change", catFillCard);

  // Begin catFillCard
  function catFillCard() {
    $.getJSON("/api/teams/byleague/" + $("#divisionSel").val(), function(data) {
      let teams = data;
      $(".card").empty(); // Clears card of previous selection.
      $("#divisionArea3").show();

      // Loops through for matching bands.
      for (let i = 0; i < teams.length; i++) {
        let teamName = teams[i].TeamName;
        let mgrName = teams[i].ManagerName;
        let mgrPhone = teams[i].ManagerPhone;
        let numOfMembersCurrent = teams[i].Members.length;
        let numOfMembersMax = teams[i].MaxTeamMembers;

        let card = $(".card");

        // Populates card with results.
        let cardBody = $("<div class='card-body'></div>");
        let cardBandName = $("<h4 class='card-title'>" + teamName + "</h4>");
        let cardMgrName = $(
          "<h5 class='card-subtitle mb-2'>" + mgrName + "</h5>"
        );
        let cardMgrPhone = $("<p class='card-text'>" + mgrPhone + "</p>");
        let cardNumOfMembersCurrent = $(
          "<p class='card-text'>Current Number Of Members: " +
            numOfMembersCurrent +
            "<br>Maximum Number Of Members Allowed: " +
            numOfMembersMax +
            "</p>"
        );
        // Generates Edit Team Details Buttons and assigns unique id and URL.
        let editTeamLink = $(
          "<a class='btn btn-secondary text-light' href='editteam.html?teamid=" +
            teams[i].TeamId +
            "'>Edit Team Details</a>"
        );
        // Generates View Roster Details Buttons and assigns unique id and URL.
        let detailsLink = $(
          "<a class='btn btn-dark text-light mx-2' href='teamdetails.html?teamid=" +
            teams[i].TeamId +
            "'>View Roster Details</a>"
        );
        // Generates Delete Team Buttons and assigns unique id.
        let deleteLink = $(
          "<button class='btn btn-danger text-light' id='team" +
            teams[i].TeamId +
            "'>Delete Team</a>"
        );

        // Appends band info to cards
        cardBody.append(
          cardBandName,
          cardMgrName,
          cardMgrPhone,
          cardNumOfMembersCurrent,
          editTeamLink,
          detailsLink,
          deleteLink
        );
        card.append(cardBody);
        $("#divisionArea3").append(card);

        // Delete band button
        $("#team" + teams[i].TeamId).on("click", function() {
          confirm("Are you sure you want to delete this band?");
          $.ajax({
            url: "/api/teams/" + teams[i].TeamId,
            method: "DELETE",
            success: function() {
              alert("Updated!");
            }
          });
          location.href = "divisions.html";
        });
      }
    });
  }
});
