'use strict';

// console.log('I am also alive');

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.random() * (max - min + 1) + min;
}

const seattle = {
  city: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  getCustomerPerHour: function(){
      for (var i=0; i < time.length; i++){
        this.customerPerHour.push(random(this.minCustomer, this.maxCustomer));
      }
    },
  getCookiesPerHour: function() {
    this.getCustomerPerHour();
    for (var i = 0; i < time.length; i++) {
      var everyHour = Math.floor(this.customerPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(everyHour);
      this.totalCookies += everyHour;
  }
},
}

console.log(seattle);



const tokyo = {
  city: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
}

console.log(tokyo);


const dubai = {
  city: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
}

console.log(dubai);


const paris = {
  city: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
}

console.log(paris);


const lima = {
  city: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
}

console.log(lima);


const cityArray = [seattle, tokyo, dubai, paris, lima];

const citiesMainElm = document.getElementById('cityInfo');

function renderLocation(location){
let articleElm = document.createElement('article');
citiesMainElm.appendChild(articleElm);
let h2Elm = document.createElement('h2');
h2Elm.textContent = location.city;
articleElm.appendChild(h2Elm);
let ulElm = document.createElement('ul');
articleElm.appendChild(ulElm);
for(let i=0; i<time.length; i++){
  let liElm = document.createElement('li');
  liElm.textContent = `${time[i]}: ${location.totalCookies()} cookies`
  ulElm.appendChild(liElm);
  }
}

renderLocation(seattle);
renderLocation(paris);
renderLocation(tokyo);
renderLocation(dubai);
renderLocation(lima);


for (let i=0; i < cityArray; i++){
  renderLocation(cityArray[i]);
}
console.log(seattle.getTotalCookies());