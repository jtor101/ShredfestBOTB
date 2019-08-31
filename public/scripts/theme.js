"use strict";

$(function() {
  // Light theme radio button
  $("#lightRadio").on("change", function() {
    localStorage.themeset = "lightTheme";
    if (localStorage.themeset == "lightTheme") {
      $("#lightRadio").attr("checked", "true");
    }

    $("#nslbody").css("background-color", "white");
    $("#headerBg")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black");
    $("#lightRadioLabel").css("color", "black");
    $("#darkRadioLabel").css("color", "black");
    $("#bannerTxt").css("color", "black");
    $("#navlist").css("color", "black");
    $("#contentArea1")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#contentArea2")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#contentArea3")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#divisionArea1")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#divisionArea2")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $(".card")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#cardHeading")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#teamTable")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#memberInfo")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#registerArea1")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#registerTeam")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#editTeam")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#nslfoot")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
  });

  // Dark theme radio button
  $("#darkRadio").on("change", function() {
    localStorage.themeset = "darkTheme";
    if (localStorage.themeset == "darkTheme") {
      $("#darkRadio").attr("checked", "true");
    }

    $("#nslbody").css("background-color", "black");
    $("#headerBg")
      .css("background-color", "grey")
      .css("border", "1px ridge white");
    $("#lightRadioLabel").css("color", "white");
    $("#darkRadioLabel").css("color", "white");
    $("#bannerTxt").css("color", "white");
    $("#navlist").css("color", "white");
    $("#contentArea1")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#contentArea2")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#contentArea3")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#divisionArea1")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#divisionArea2")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $(".card")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#cardHeading")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#teamTable")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#memberInfo")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#registerArea1")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#registerTeam")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#editTeam")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#nslfoot")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
  });
});
