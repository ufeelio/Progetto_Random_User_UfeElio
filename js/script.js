"use strict";

//  getPeople(20, "male")

function getPeople(numberOfPeople, gender) {
  let promise = ajax.sendRequest("GET", `/api/?results=${numberOfPeople}&gender=${gender}`);

  promise.catch(ajax.errore);

  promise.then(function (httpResponse) {
    let people = httpResponse.data.results;
    console.log(people);
    for (let person of people) {
        
    }
  });
}
