"use strict";

$(function() {
  // Gets teamId from query
  let urlParams = new URLSearchParams(location.search);
  let id = urlParams.get("teamid");
  $("#memberInfo").hide();
  $("#cancelBtn").hide();
  $("#submitBtn").hide();
  $("#editMode").hide();

  $("#editBtn").on("click", function() {
    $("#editBtn").hide();
    $("#cancelBtn").show();
    $("#submitBtn").show();
    $("#memberName").prop("readonly", false);
    $("#memberEmail").prop("readonly", false);
    $("#contactName").prop("readonly", false);
    $("#memberAge").prop("readonly", false);
    $("#memberGender").prop("readonly", false);
    $("#memberPhone").prop("readonly", false);
    $("#editMode").show();
  });
  $("#cancelBtn").on("click", function() {
    $("#editBtn").show();
    $("#cancelBtn").hide();
    $("#submitBtn").hide();
    $("#memberName").prop("readonly", true);
    $("#memberEmail").prop("readonly", true);
    $("#contactName").prop("readonly", true);
    $("#memberAge").prop("readonly", true);
    $("#memberGender").prop("readonly", true);
    $("#memberPhone").prop("readonly", true);
    $("#editMode").hide();
  });

  $("#submitBtn").on("click", sendForm);

  function sendForm() {
    $.ajax({
      //if/else w validation, see editcourse
      url: "/api/teams/" + id + "/members",
      method: "PUT",
      dataType: "json",
      data: $("#memberInfo").serialize(),
      success: function() {
        alert("Updated!");
      }
    });
    location.href = "index.html";
  }

  //return false;

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
          "</td><td><a id='id" +
          i +
          "' href='#memberInfo?memberid=" +
          team.Members[i].MemberId +
          "'>Details</a></tr>"
      );

      $("#teamTBody").append(memInfo);

      $("#id" + i).on("click", function() {
        $("#memberInfo").show();
        $("#memberId").val(team.Members[i].MemberId);
        $("#memberName").val(team.Members[i].MemberName);
        $("#memberEmail").val(team.Members[i].Email);
        $("#contactName").val(team.Members[i].ContactName);
        $("#memberAge").val(team.Members[i].Age);
        $("#memberGender").val(team.Members[i].Gender);
        $("#memberPhone").val(team.Members[i].Phone);
      });
    }
  });
});