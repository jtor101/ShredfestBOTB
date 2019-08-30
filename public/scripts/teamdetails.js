"use strict";

$(function() {
  // Gets teamId from query
  let urlParams = new URLSearchParams(location.search);
  let id = urlParams.get("teamid");
  sessionStorage.setItem("teamid", id);

  $("#memberInfo").hide();
  $("#cancelBtn").hide();
  $("#submitBtn").hide();
  $("#editMode").hide();

  $("#regBtn").attr("href", "registermember.html?teamid=" + id);

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
    confirm("Are you sure you want to make these changes to this member?");
    $.ajax({
      //if/else w validation, see editcourse
      url: "/api/teams/" + id + "/members",
      method: "PUT",
      dataType: "json",
      data: $("#memberInfo").serialize()
    });
    alert("Updated member!");
    location.href = "teamdetails.html?teamid=" + id;
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
          "</td><td><a class='btn btn-primary' id='id" +
          i +
          "' href='#memberInfo?memberid=" +
          team.Members[i].MemberId +
          "'>Details</a></td><td><button class='btn btn-danger' href='divisions.html' id='deleteid" +
          team.Members[i].MemberId +
          "'>Delete</button></td></tr>"
      );

      $("#teamTBody").append(memInfo);

      $("#deleteid" + team.Members[i].MemberId).on("click", function() {
        confirm("Are you sure you want to delete this member?");
        $.ajax({
          url: "/api/teams/" + id + "/members/" + team.Members[i].MemberId,
          method: "DELETE",
          contentType: "application/json"
        });
        alert("Member deleted!");
        location.href = "teamdetails.html?teamid=" + id;
      });

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
