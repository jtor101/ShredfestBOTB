"use strict";

$(function() {
  let urlParams = new URLSearchParams(location.search);
  let id = urlParams.get("teamid");

  // Submit button click handler
  $("#submitBtn").on("click", function() {
    confirm("Are you sure you want to add this member?");
    $.post(
      "api/teams/" + id + "/members",
      $("#registerMember").serialize(),
      function() {
        alert("Member added!");
        location.href = "teamdetails.html?teamid=" + id;
      }
    );

    //redirects after submit to courses.html
    //return false;
  });
});
