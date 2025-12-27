"use strict";
let people = [];
let currentPage = 0;
let currentArray = [];
let searchArray = [];
previous.addEventListener("click", previousClick);
next.addEventListener("click", nextClick);
getPeople(20, "male");
chiudiCard.addEventListener("click", function () {
  $("#bgScuro").hide(200);
  $("#modalCard").hide(200);
});
searchBar.addEventListener("input", cercaPersone);

let min = 0;
let max;

function getPeople(numberOfPeople, gender) {
  let promise = ajax.sendRequest(
    "GET",
    `/api/?results=${numberOfPeople}&gender=${gender}`
  );

  promise.catch(ajax.errore);

  promise.then(function (httpResponse) {
    people = httpResponse.data.results;
    currentArray = people;
    console.log(people);
    showPeople(currentArray);
  });
}

function showPeople(peopleList) {
  visualizzatoreMultiplo.textContent = "";
  for (
    let i = currentPage * 4;
    i < currentPage * 4 + 4 && i < peopleList.length;
    i++
  ) {
    let div = creaTag("div");
    visualizzatoreMultiplo.append(div);
    div.classList.add("card");

    let img = creaTag("img");
    img.src = `${peopleList[i].picture.large}`;
    div.append(img);

    div.append(
      creaTag("div", `${peopleList[i].name.first} ${peopleList[i].name.last}`)
    );

    if (peopleList[i].gender == "male") {
      div.classList.add("maschio");
    } else {
      div.classList.add("femmina");
    }

    div.addEventListener("click", () => visualizzaDettagli(peopleList[i]));
  }

  $(".card").hover(
    function () {
      // over
      $(this).stop(true).animate({ width: "410px", height: "240px" }, 200);
    },
    function () {
      // out
      $(this).stop(true).animate({ width: "400px", height: "230px" }, 200);
    }
  );

  changSpan(peopleList);
}

function visualizzaDettagli(person) {
  if (person.gender == "male") {
    modalCard.classList.remove("femmina");
    modalCard.classList.add("maschio");
  } else {
    modalCard.classList.remove("maschio");
    modalCard.classList.add("femmina");
  }
  console.log(person);
  $("#bgScuro").show(200);
  $("#modalCard").show(200);

  imgPerson.src = `${person.picture.large}`;
  txtNome.value = person.name.first + " " + person.name.last;
  txtEmail.value = person.email;
  txtData.value = person.registered.date.substring(0, 10);
  txtIndirizzo.value = person.location.country;
  txtTelefono.value = person.phone;
  txtPassword.value = person.login.password;
}

function creaTag(tagName, content) {
  const TAG = document.createElement(tagName);
  TAG.textContent = content;
  return TAG;
}

function previousClick() {
  if (currentPage == 0) {
    currentPage = max;
  } else {
    currentPage--;
  }
  if(searchBar.value == 0)
  showPeople(currentArray);
  else
  showPeople(searchArray);
}

function nextClick() {
  if (currentPage == max) {
    currentPage = 0;
  } else {
    currentPage++;
  }
  if(searchBar.value == 0)
  showPeople(currentArray);
  else
  showPeople(searchArray);
}

function changSpan(peopleList) {
  max = parseInt((peopleList.length - 1) / 4);
  pages.textContent = `${currentPage + 1}/${max + 1}`;
}

function cercaPersone() {
  let text = this.value.toLowerCase().trim().split(/\s+/);

  if (text.length == 0) {
    showPeople(currentArray);
    searchArray = [];
    return;
  }

  searchArray = currentArray.filter((person) => {
    let fullName = (person.name.first + " " + person.name.last).toLowerCase();

    for (let parola of text) {
      if (fullName.includes(parola)) {
        return true;
      }
    }
    return false;
  });

  currentPage = 0;
  showPeople(searchArray);

}
