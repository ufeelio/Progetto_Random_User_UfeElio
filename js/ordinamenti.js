"use strict";

// FILTRO NAZIONI
function filtroNazioni(listaNazioni) {
  console.log(listaNazioni);
  let nationPeople = people.filter((person) =>
    trovaNazioni(person.nat.toLowerCase(), listaNazioni)
  );
  return nationPeople;
}
// FILTRO CON ORDINE CRESCENTE
function filtroNazioniCrescente(listaNazioni) {
  let nationPeople = filtroNazioni(listaNazioni);
  nationPeople.sort(function (person1, person2) {
    let nat1 = person1.nat.toLowerCase();
    let nat2 = person2.nat.toLowerCase();

    if (nat1 < nat2) return -1;
    if (nat1 > nat2) return 1;
    return 0;
  });
  return nationPeople;
}
// FILTRO CON ORDINE DECRESCENTE
function filtroNazioniDecrescente(listaNazioni) {
  let nationPeople = filtroNazioni(listaNazioni);
  nationPeople.sort(function (person1, person2) {
    let nat1 = person1.nat.toLowerCase();
    let nat2 = person2.nat.toLowerCase();

    if (nat1 < nat2) return 1;
    if (nat1 > nat2) return -1;
    return 0;
  });
  return nationPeople;
}

// NOME CRESCENTE
function nomeCrescente() {
  let sortedPeople = people.toSorted(function (person1, person2) {
    let nome1 = person1.name.first.toLowerCase();
    let nome2 = person2.name.first.toLowerCase();

    if (nome1 < nome2) return -1;
    if (nome1 > nome2) return 1;
    return 0;
  });
  return sortedPeople;
}

// NOME DESCRESCENTE
function nomeDecrescente() {
  let sortedPeople = people.toSorted(function (person1, person2) {
    let nome1 = person1.name.first.toLowerCase();
    let nome2 = person2.name.first.toLowerCase();

    if (nome1 < nome2) return 1;
    if (nome1 > nome2) return -1;
    return 0;
  });
  return sortedPeople;
}

// COGNOME CRESCENTE
function cognomeCrescente() {
  let sortedPeople = people.toSorted(function (person1, person2) {
    let cognome1 = person1.name.last.toLowerCase();
    let cognome2 = person2.name.last.toLowerCase();

    if (cognome1 < cognome2) return -1;
    if (cognome1 > cognome2) return 1;
    return 0;
  });
  return sortedPeople;
}
// COGNOME DESCRESCENTE
function cognomeDecrescente() {
  let sortedPeople = people.toSorted(function (person1, person2) {
    let cognome1 = person1.name.last.toLowerCase();
    let cognome2 = person2.name.last.toLowerCase();

    if (cognome1 < cognome2) return 1;
    if (cognome1 > cognome2) return -1;
    return 0;
  });
  return sortedPeople;
}

// NOME E COGNOME CRESCENTE
function nomiCognomiCrescente() {
  let sortedPeople = people.toSorted(function (person1, person2) {
    let nome1 = person1.name.first.toLowerCase();
    let nome2 = person2.name.first.toLowerCase();

    let cognome1 = person1.name.last.toLowerCase();
    let cognome2 = person2.name.last.toLowerCase();

    if (nome1 == nome2) {
      if (cognome1 < cognome2) return -1;
      if (cognome1 > cognome2) return 1;
      return 0;
    } else {
      if (nome1 < nome2) return -1;
      if (nome1 > nome2) return 1;
    }
  });
  return sortedPeople;
}

// NOME E COGNOME DECRESCENTE
function nomiCognomiDecrescente() {
  let sortedPeople = people.toSorted(function (person1, person2) {
    let nome1 = person1.name.first.toLowerCase();
    let nome2 = person2.name.first.toLowerCase();

    let cognome1 = person1.name.last.toLowerCase();
    let cognome2 = person2.name.last.toLowerCase();

    if (nome1 == nome2) {
      if (cognome1 < cognome2) return 1;
      if (cognome1 > cognome2) return -1;
      return 0;
    } else {
      if (nome1 < nome2) return 1;
      if (nome1 > nome2) return -1;
    }
  });
  return sortedPeople;
}
// FILTRO NAZIONI CON NOME CRESCENTE
function filtroNazioniNomeCrescente(listaNazioni) {  
    let nationPeople = filtroNazioni(listaNazioni);
    let sortedPeople = nationPeople.toSorted(function (person1, person2) {
    let nome1 = person1.name.first.toLowerCase();
    let nome2 = person2.name.first.toLowerCase();

    if (nome1 < nome2) return -1;
    if (nome1 > nome2) return 1;
    return 0;
  });
  return sortedPeople;
}

// FILTRO NAZIONI CON NOME DECRESCENTE
function filtroNazioniNomeDecrescente(listaNazioni) {  
    let nationPeople = filtroNazioni(listaNazioni);
    let sortedPeople = nationPeople.toSorted(function (person1, person2) {
    let nome1 = person1.name.first.toLowerCase();
    let nome2 = person2.name.first.toLowerCase();

    if (nome1 < nome2) return 1;
    if (nome1 > nome2) return -1;
    return 0;
  });
  return sortedPeople;
}

// FILTRO NAZIONI CON COGNOME CRESCENTE
function filtroNazioniCognomeCrescente(listaNazioni) {  
    let nationPeople = filtroNazioni(listaNazioni);
    let sortedPeople = nationPeople.toSorted(function (person1, person2) {
    let cognome1 = person1.name.last.toLowerCase();
    let cognome2 = person2.name.last.toLowerCase();

    if (cognome1 < cognome2) return -1;
    if (cognome1 > cognome2) return 1;
    return 0;
  });
  return sortedPeople;
}

// FILTRO NAZIONI CON COGNOME DECRESCENTE
function filtroNazioniCognomeDecrescente(listaNazioni) {  
    let nationPeople = filtroNazioni(listaNazioni);
    let sortedPeople = nationPeople.toSorted(function (person1, person2) {
    let cognome1 = person1.name.last.toLowerCase();
    let cognome2 = person2.name.last.toLowerCase();

    if (cognome1 < cognome2) return 1;
    if (cognome1 > cognome2) return -1;
    return 0;
  });
  return sortedPeople;
}

// FILTRO NAZIONI CON NOME E COGNOME CRESCENTE
function filtroNazioniNomeCognomeCrescente(listaNazioni) {  
    let nationPeople = filtroNazioni(listaNazioni);
    let sortedPeople = nationPeople.toSorted(function (person1, person2) {
    let nome1 = person1.name.first.toLowerCase();
    let nome2 = person2.name.first.toLowerCase();

    let cognome1 = person1.name.last.toLowerCase();
    let cognome2 = person2.name.last.toLowerCase();

    if (nome1 == nome2) {
      if (cognome1 < cognome2) return -1;
      if (cognome1 > cognome2) return 1;
      return 0;
    } else {
      if (nome1 < nome2) return -1;
      if (nome1 > nome2) return 1;
    }
  });
  return sortedPeople;
}

// FILTRO NAZIONI CON NOME E COGNOME DECRESCENTE
function filtroNazioniNomeCognomeDecrescente(listaNazioni) {  
    let nationPeople = filtroNazioni(listaNazioni);
    let sortedPeople = nationPeople.toSorted(function (person1, person2) {
    let nome1 = person1.name.first.toLowerCase();
    let nome2 = person2.name.first.toLowerCase();

    let cognome1 = person1.name.last.toLowerCase();
    let cognome2 = person2.name.last.toLowerCase();

    if (nome1 == nome2) {
      if (cognome1 < cognome2) return 1;
      if (cognome1 > cognome2) return -1;
      return 0;
    } else {
      if (nome1 < nome2) return 1;
      if (nome1 > nome2) return -1;
    }
  });
  return sortedPeople;
}

function trovaNazioni(nazione, listaNazioni) {
  return listaNazioni.includes(nazione);
}