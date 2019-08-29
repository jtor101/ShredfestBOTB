"use strict";

$(function() {
  let urlParams = new URLSearchParams(location.search);
  let id = urlParams.get("teamid");

  $("#submitBtn").on("click", function() {
    $.post("api/teams/" + id + "/members", $("#registerMember").serialize());
    window.location.href = "teamdetails.html?teamid=" + id; //redirects after submit to courses.html
    //return false;
  });
});
