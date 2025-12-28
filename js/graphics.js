"use strict";
//#region Pulsanti impostazioni e Ordinamenti
$("#btnImpostazioni").click(function () {
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
$("#btnGenera").click(function () {
  pulisci();
  currentPage = 0;
  getPeople($("#rangePersone").val(), genereSelezionato);
  $("#bgScuro").hide(300);
  $("#modalImpostazioni").hide(300);
});

$("#btnRigenera").click(function () {
  pulisci();
  currentPage = 0;
  getPeople($("#rangePersone").val(), genereSelezionato);
  $("#bgScuro").hide(300);
  $("#modalImpostazioni").hide(300);
});

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
  if (genereSelezionato == "male") {
    $(this).css({ borderColor: "#61a4beff", boxShadow: "rgb(34, 108, 138)" });
  } else if (genereSelezionato == "female") {
    $(this).css({
      borderColor: "#be61aaff",
      boxShadow: "rgba(138, 34, 115, 1)",
    });
  } else {
    $(this).css({
      borderColor: "#7261beff",
      boxShadow: "rgba(74, 34, 138, 1)",
    });
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
    $(this)
      .css({
        boxShadow: "none",
        borderWidth: "0px",
      })
      .stop(true)
      .animate({ fontSize: "18pt" }, 200);
  }
);
//#endregion

//#region Modal ordinamenti
$("#pulisciNazioni").hover(
  function () {
    $(this)
      .css({
        borderColor: "#015170ff",
        borderStyle: "solid",
        borderWidth: "3px",
        boxShadow: "0 0 12px 4px #61a4beff",
      })
      .stop(true)
      .animate({ width: "80px", fontSize: "14pt" }, 200);
  },
  function () {
    $(this)
      .css({
        boxShadow: "none",
        borderWidth: "0px",
      })
      .stop(true)
      .animate({ width: "70px", fontSize: "12pt" }, 200);
  }
);

$("#btnAltri").hover(
  function () {
    $(this)
      .css({
        borderColor: "#015170ff",
        borderStyle: "solid",
        borderWidth: "3px",
        boxShadow: "0 0 12px 4px #61a4beff",
      })
      .stop(true)
      .animate({ width: "80px", fontSize: "14pt" }, 200);
  },
  function () {
    $(this)
      .css({
        boxShadow: "none",
        borderWidth: "0px",
      })
      .stop(true)
      .animate({ width: "70px", fontSize: "12pt" }, 200);
  }
);

$("#btnAltri").click(function () {
  $("#contenitoreSelect").toggle(200);
});

$("#btnOrdina").hover(
  function () {
    $(this)
      .css({
        borderColor: "#015170ff",
        borderStyle: "solid",
        borderWidth: "3px",
        boxShadow: "0 0 12px 4px #61a4beff",
      })
      .stop(true)
      .animate({ width: "80px", fontSize: "14pt" }, 200);
  },
  function () {
    $(this)
      .css({
        boxShadow: "none",
        borderWidth: "0px",
      })
      .stop(true)
      .animate({ width: "70px", fontSize: "12pt" }, 200);
  }
);

$("#btnOrdina").click(function () {
  let listaNazioni = [];

  $(".divNazioni img[data-selected=true]").each(function () {
    listaNazioni.push($(this).attr("data-nazione").toLowerCase());
  });

  let risultato;

  if (listaNazioni.length > 0) {
    if ($("#chkNome").prop("checked") && $("#chkCognome").prop("checked")) {
      if ($("#rdbCre").prop("checked")) {
        risultato = filtroNazioniNomeCognomeCrescente(listaNazioni);
      } else {
        risultato = filtroNazioniNomeCognomeDecrescente(listaNazioni);
      }
    } else if ($("#chkNome").prop("checked")) {
      if ($("#rdbCre").prop("checked")) {
        risultato = filtroNazioniNomeCrescente(listaNazioni);
      } else {
        risultato = filtroNazioniNomeDecrescente(listaNazioni);
      }
    } else if ($("#chkCognome").prop("checked")) {
      if ($("#rdbCre").prop("checked")) {
        risultato = filtroNazioniCognomeCrescente(listaNazioni);
      } else {
        risultato = filtroNazioniCognomeDecrescente(listaNazioni);
      }
    } else {
      if ($("#rdbCre").prop("checked")) {
        risultato = filtroNazioniCrescente(listaNazioni);
      } else {
        risultato = filtroNazioniDecrescente(listaNazioni);
      }
    }
  } else {
    if ($("#chkNome").prop("checked") && $("#chkCognome").prop("checked")) {
      if ($("#rdbCre").prop("checked")) {
        risultato = nomiCognomiCrescente();
      } else {
        risultato = nomiCognomiDecrescente();
      }
    } else if ($("#chkNome").prop("checked")) {
      if ($("#rdbCre").prop("checked")) {
        risultato = nomeCrescente();
      } else {
        risultato = nomeDecrescente();
      }
    } else if ($("#chkCognome").prop("checked")) {
      if ($("#rdbCre").prop("checked")) {
        risultato = cognomeCrescente();
      } else {
        risultato = cognomeDecrescente();
      }
    }
  }

  console.log(risultato);
  if (risultato.length != 0) {
    currentArray = risultato;
  }
  else
  {
    alert("NESSUN UTENTE TROVATO!");
  }

  if (searchBar.value != "") {
    risultato = cercaPersoneDue(risultato);
    currentArray = risultato;
  }
  currentPage = 0;
  showPeople(currentArray);
  $("#bgScuro").hide(300);
  $("#modalOrdinamenti").hide(300);
});

function cercaPersoneDue(risultato) {
  let text = searchBar.value.toLowerCase().trim().split(/\s+/);
  console.log(text)
  if (text.length == 0) {
    showPeople(risultato);
    return;
  }

  let searchArray = risultato.filter((person) => {
    let fullName = (person.name.first + " " + person.name.last).toLowerCase();

    for (let parola of text) {
      if (fullName.includes(parola)) {
        return true;
      }
    }
    return false;
  });

  return searchArray
}

let rdbCreChecked = false;
$("#chkNome, #chkCognome").click(function () {
  if (!rdbCreChecked) {
    $("#rdbCre").prop("checked", true);
    rdbCreChecked = true;
  }
});

$("#pulisciNazioni").click(function () {
  pulisci();
  currentPage = 0;
  currentArray = people;
  showPeople(currentArray);
  $("#bgScuro").hide(300);
  $("#modalOrdinamenti").hide(300);
});

function pulisci() {
  rdbCreChecked = false;
  $("#contenitoreNazioni img").each(function (index, img) {
    $(img).attr("data-selected", "false");
    $(img).removeClass(`nazione-${$(img).attr("data-nazione")}`);
  });

  $("#contenitoreSelect input").prop("checked", false);
  searchBar.value = "";
}

$(".divNazioni img").hover(
  function () {
    // over
    $(this).stop(true).animate({ width: "68px", height: "45px" }, 200);
  },
  function () {
    // out
    $(this).stop(true).animate({ width: "65px", height: "40px" }, 200);
  }
);

$(".divNazioni img").click(function () {
  $(this).toggleClass(`nazione-${$(this).attr("data-nazione")}`);
  let valore = $(this).attr("data-selected") == "true" ? "false" : "true";
  $(this).attr("data-selected", valore);
});
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

//#region Main
$("#navButtons span").hover(
  function () {
    // over
    $(this).stop(true).animate({ fontSize: "34pt" }, 200);
  },
  function () {
    // out
    $(this).stop(true).animate({ fontSize: "30pt" }, 200);
  }
);

//#endregion
