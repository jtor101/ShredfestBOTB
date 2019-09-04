"use strict";

// This is the extra credit feature

$(function() {
  var radios = document.getElementsByName("themeRadios");
  var val = localStorage.getItem("themeset");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].value == val) {
      radios[i].checked = !0;
      if (radios[i].value == "darkTheme") {
        darkThemeColors();
      }
      if (radios[i].value == "lightTheme") {
        lightThemeColors();
      }
    }
  }
  $('input[name="themeRadios"]').on("change", function() {
    localStorage.setItem("themeset", $(this).val());
  });
  $("#lightRadio").on("change", lightThemeColors);
  function lightThemeColors() {
    $("#nslbody").css("background-color", "white");
    $("#headerBg")
      .css("background-image", "url('/images/shredlight.jpg')")
      .css("border", "1px ridge black");
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
    $("#registerMember")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#editTeam")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#editMode")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
    $("#nslfoot")
      .css("background-color", "lightgrey")
      .css("border", "1px ridge black")
      .css("color", "black");
  }
  $("#darkRadio").on("change", darkThemeColors);
  function darkThemeColors() {
    $("#nslbody").css("background-color", "black");
    $("#headerBg")
      .css("background-image", "url('/images/shreddark.jpg')")
      .css("border", "1px ridge white");
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
    $("#registerMember")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#editTeam")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#editMode")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
    $("#nslfoot")
      .css("background-color", "grey")
      .css("border", "1px ridge white")
      .css("color", "white");
  }
});
