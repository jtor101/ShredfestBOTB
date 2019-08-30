"use strict";

$(function() {
  let urlParams = new URLSearchParams(location.search);
  let id = urlParams.get("teamid");

  $("#submitBtn").on("click", function() {
    $.post("api/teams/" + id + "/members", $("#registerMember").serialize());
    location.href = "divisions.html";
    //redirects after submit to courses.html
    //return false;
  });
});
