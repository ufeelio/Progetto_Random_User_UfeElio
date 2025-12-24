"use strict";
let currentModal;
let genereSelezionato;

$("#btnImpostazioni").click(function (e) {
  if (currentModal && currentModal) {
    $(currentModal).hide(300);
  }

  $("#modalImpostazioni").show(300);
  currentModal = document.getElementById("modalImpostazioni");
  console.log(currentModal);
});

$("#chiudiImpostazioni").click(function () {
  $("#modalImpostazioni").hide(300);
  currentModal = null;
});

$("#btnOrdinamenti").click(function (e) {
  if (currentModal) {
    $(currentModal).hide(300);
  }
  $("#modalOrdinamenti").show(300);
  currentModal = document.getElementById("modalOrdinamenti");
});

$("#chiudiOrdinamenti").click(function () {
  $("#modalOrdinamenti").hide(300);
  currentModal = null;
});

let selectedDivGender;

$("#contenitoreImmagini div").click(function () {
    selectedDivGender.stop(true)
      .css({
        boxShadow: "none",
      })
      .animate(
        {
          width: "200px",
          height: "50px",
          borderWidth: "0px",
          fontSize: "24pt",
        },
        200
      );
  genereSelezionato = $(this).attr("data-genere");
  selectedDivGender = $(this)
  console.log(genereSelezionato);
  if (genereSelezionato == "male") {
    $(this)
      .stop(true)
      .css({
        borderColor: "#63a6c0ff",
        borderStyle: "solid",
        boxShadow: "0 0 12px 4px #09435aff",
      })
      .animate(
        {
          width: "110px",
          height: "180px",
          borderWidth: "3px",
        },
        200
      );
  }
});
$("#btnsWrapper button").hover(
  function () {
    $(this)
      .stop(true)
      .css({
        borderColor: "#015170ff",
        borderStyle: "solid",
        boxShadow: "0 0 12px 4px #61a4beff",
      })
      .animate(
        {
          width: "220px",
          height: "60px",
          borderWidth: "3px",
          fontSize: "28pt",
        },
        200
      );
  },
  function () {
    $(this)
      .stop(true)
      .css({
        boxShadow: "none",
      })
      .animate(
        {
          width: "200px",
          height: "50px",
          borderWidth: "0px",
          fontSize: "24pt",
        },
        200
      );
  }
);

$(".btnChiudi").hover(
  function () {
    $(this).stop(true).animate(
      {
        width: "35px",
        height: "35px",
      },
      200
    );
  },
  function () {
    $(this).stop(true).animate(
      {
        width: "30px",
        height: "30px",
      },
      200
    );
  }
);
