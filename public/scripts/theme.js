"use strict";

$(function() {
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
    $("#teamTable")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#memberInfo")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#nslfoot")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
  });

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
    $("#teamTable")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#memberInfo")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#nslfoot")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
  });
});
