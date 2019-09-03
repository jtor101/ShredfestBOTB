"use strict";

$(function() {
  let urlParams = new URLSearchParams(location.search);
  let id = urlParams.get("teamid");

  $(".errorMsg").hide();

  // Input Validation
  function inputVal() {
    $(".errorMsg").hide();
    $(".errorMsg").empty();

    if (
      $("#memberName")
        .val()
        .trim() == ""
    ) {
      $("#memberNameError").text("Member Name required");
      $("#memberNameError").show();
      return false;
    }

    if (
      $("#memberEmail")
        .val()
        .trim() == ""
    ) {
      $("#memberEmailError").text("Member Email required");
      $("#memberEmailError").show();
      return false;
    }

    if (
      $("#contactName")
        .val()
        .trim() == ""
    ) {
      $("#contactNameError").text("Contact Name required");
      $("#contactNameError").show();
      return false;
    }

    if (
      $("#memberAge")
        .val()
        .trim() == ""
    ) {
      $("#memberAgeError").text("Member Age required");
      $("#memberAgeError").show();
      return false;
    }

    if (
      $("#memberPhone")
        .val()
        .trim() == ""
    ) {
      $("#memberPhoneError").text("Member Phone Number required");
      $("#memberPhoneError").show();
      return false;
    }
  }

  // Submit button click handler
  $("#submitBtn").on("click", function() {
    let isOk = inputVal();
    if (isOk == false) {
      return;
    } else {
      confirm("Are you sure you want to add this member?");
      $.post(
        "api/teams/" + id + "/members",
        $("#registerMember").serialize(),
        function() {
          alert("Member added!");
          location.href = "teamdetails.html?teamid=" + id;
        }
      );
    }
  });
});
