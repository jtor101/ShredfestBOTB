"use strict";

$(function() {
  // End catFillcard
  // Gets teamId from query
  let urlParams = new URLSearchParams(location.search);
  let id = urlParams.get("id");

  $.getJSON("/api/teams/" + id, function(data) {
    let team = data;

    for (let i = 0; i < team.Members.length; i++) {
      let memInfo = $(
        "<tr><td>" +
          team.Members[i].MemberName +
          "</td><td>" +
          team.Members[i].Email +
          "</td><td>" +
          team.Members[i].ContactName +
          "</td><td>" +
          team.Members[i].Age +
          "</td><td>" +
          team.Members[i].Gender +
          "</td><td>" +
          team.Members[i].Phone +
          "</td><td><a href='memberdetails.html?id=" +
          team.Members[i].MemberId +
          "'>Details</a></tr>"
      );

      $("#teamTBody").append(memInfo);
    }
  });
});
