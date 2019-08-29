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
    $.post("api/teams", $("#registerTeam").serialize());
    window.location.href = "divisions.html"; //redirects after submit to courses.html
  });
});
