"use strict";

$(function() {
  $("#lightRadio").on("change", function() {
    $("#nslbody").css("background-color", "white");
    $("#headerBg")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black");
    $("#lightRadioLabel").css("color", "black");
    $("#darkRadioLabel").css("color", "black");
    $("#bannerTxt").css("color", "black");
    $("#navlist").css("color", "black");
    $("#contentArea")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#nslfoot")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
  });

  $("#darkRadio").on("change", function() {
    $("#nslbody").css("background-color", "black");
    $("#headerBg")
      .css("background-color", "grey")
      .css("border", "1px ridge white");
    $("#lightRadioLabel").css("color", "white");
    $("#darkRadioLabel").css("color", "white");
    $("#bannerTxt").css("color", "white");
    $("#navlist").css("color", "white");
    $("#contentArea")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#nslfoot")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
  });
});
