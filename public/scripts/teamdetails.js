"use strict";

$(function() {
  // Gets teamId from query
  let urlParams = new URLSearchParams(location.search);
  let id = urlParams.get("id");
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
    $("#contactName").attr("readonly", false);
    $("#memberAge").attr("readonly", false);
    $("#memberGender").attr("readonly", false);
    $("#memberPhone").attr("readonly", false);
    $("#editMode").show();
  });
  $("#cancelBtn").on("click", function() {
    $("#editBtn").show();
    $("#cancelBtn").hide();
    $("#submitBtn").hide();
    $("#memberName").prop("readonly", true);
    $("#memberEmail").prop("readonly", true);
    $("#contactName").attr("readonly", true);
    $("#memberAge").attr("readonly", true);
    $("#memberGender").attr("readonly", true);
    $("#memberPhone").attr("readonly", true);
    $("#editMode").hide();
  });

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
          "' href='#?id=" +
          team.Members[i].MemberId +
          "'>Details</a></tr>"
      );

      $("#teamTBody").append(memInfo);

      $("#id" + i).on("click", function() {
        $("#memberInfo").show();
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
