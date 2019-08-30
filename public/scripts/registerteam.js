"use strict";

$(function() {
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
  $("#submitBtn").on("click", function() {
    confirm("Are you sure you want to register this band?");
    $.post("api/teams", $("#registerTeam").serialize());
    alert("Band registered!");
    // Form action redirects to divisions.html
  });
});
