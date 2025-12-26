"use strict";
//#region Pulsanti impostazioni e Ordinamenti
$("#btnImpostazioni").click(function (e) {
  $("#bgScuro").show(300);
  $("#modalImpostazioni").show(300);
});

$("#chiudiImpostazioni").click(function () {
  $("#bgScuro").hide(300);
  $("#modalImpostazioni").hide(300);
});

$("#btnOrdinamenti").click(function (e) {
  $("#bgScuro").show(300);
  $("#modalOrdinamenti").show(300);
});

$("#chiudiOrdinamenti").click(function () {
  $("#bgScuro").hide(300);
  $("#modalOrdinamenti").hide(300);
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
//#endregion

//#region Moldal impostazioni contenuto
let genereSelezionato = "male";
$("#contenitoreImmagini div").hover(
  function () {
    // over
    $(this).stop(true).animate({ width: "110px", height: "175px" }, 200);
  },
  function () {
    // out
    $(this).stop(true).animate({ width: "100px", height: "167px" }, 200);
  }
);

$("#contenitoreImmagini div").click(function () {
  genereSelezionato = $(this).attr("data-genere");
  console.log(genereSelezionato);
  if(genereSelezionato == "male")
  {
    $(this).css({borderColor: "#61a4beff", boxShadow: "rgb(34, 108, 138)"})
  }
  else if (genereSelezionato == "female")
  {
    $(this).css({borderColor: "#be61aaff", boxShadow: "rgba(138, 34, 115, 1)"})
  }
  else
  {
    $(this).css({borderColor: "#7261beff", boxShadow: "rgba(74, 34, 138, 1)"})
  }
  $("#contenitoreImmagini div").removeClass("selectedGender");
  $(this).addClass("selectedGender");
});

$("#rangePersone").on("input", function () {
  $("#valuePersone").text($(this).val());
});

$("#btnGenera").hover(
  function () {
    $(this)
      .css({
        borderColor: "#015170ff",
        borderStyle: "solid",
        borderWidth: "3px",
        boxShadow: "0 0 12px 4px #61a4beff",
      })
      .stop(true)
      .animate({ fontSize: "20pt" }, 200);
  },
  function () {
    $(this).css({
        boxShadow: "none",
        borderWidth: "0px"
      }).stop(true).animate({ fontSize: "18pt" }, 200);
  }
);

$("#btnGenera").click(function () {  
  getPeople($("#rangePersone").val(), genereSelezionato)
  $("#bgScuro").hide(300);
  $("#modalImpostazioni").hide(300);

}) 

//#endregion

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
