'use strict';

// console.log('I am also alive');

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CookieStand(city, minCustomer, maxCustomer, avgCookieSale){
  this.city = city;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
}

CookieStand.prototype.getCustomerPerHour = function(){
  for(var i=0; i < time.length; i++){
    var randomNum = random(this.minCustomer, this.maxCustomer)
    this.customerPerHour.push(randomNum);
  }
  }

CookieStand.prototype.getCookiesPerHour = function(){ 
  this.getCustomerPerHour();
    for(var i=0; i < time.length; i++){
    var everyHour = Math.ceil(this.customerPerHour[i] * this.avgCookieSale);
    this.cookiesPerHour.push(everyHour);
    this.totalCookies += everyHour;
    }
}

const seattle = new CookieStand('Seattle', 23, 65, 6.3);

const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);

const dubai = new CookieStand('Dubai', 11, 38, 3.7);

const paris = new CookieStand('Paris', 20, 38, 2.3);

const lima = new CookieStand('Lima', 2, 16, 4.6)


// const seattle = {
//   city: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   customerPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getCustomerPerHour: function(){
//     for(var i=0; i < time.length; i++){
//       var randomNum = random(this.minCustomer, this.maxCustomer)
//       this.customerPerHour.push(randomNum);
//     }
//   },
//   getCookiesPerHour: function(){
//     this.getCustomerPerHour();
//     for(var i=0; i < time.length; i++){
//     var everyHour = Math.ceil(this.customerPerHour[i] * this.avgCookieSale);
//     this.cookiesPerHour.push(everyHour);
//     this.totalCookies += everyHour;
//     }
//   },
// }

// console.log(seattle);


// const tokyo = {
//   city: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   customerPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getCustomerPerHour: function(){
//     for(var i=0; i < time.length; i++){
//       var randomNum = random(this.minCustomer, this.maxCustomer)
//       this.customerPerHour.push(randomNum);
//     }
//   },
//   getCookiesPerHour: function(){
//     this.getCustomerPerHour();
//     for(var i=0; i < time.length; i++){
//     var everyHour = Math.ceil(this.customerPerHour[i] * this.avgCookieSale);
//     this.cookiesPerHour.push(everyHour);
//     this.totalCookies += everyHour;
//     }
//   },
// }

// console.log(tokyo);


// const dubai = {
//   city: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSale: 3.7,
//   customerPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getCustomerPerHour: function(){
//     for(var i=0; i < time.length; i++){
//       var randomNum = random(this.minCustomer, this.maxCustomer)
//       this.customerPerHour.push(randomNum);
//     }
//   },
//   getCookiesPerHour: function(){
//     this.getCustomerPerHour();
//     for(var i=0; i < time.length; i++){
//     var everyHour = Math.ceil(this.customerPerHour[i] * this.avgCookieSale);
//     this.cookiesPerHour.push(everyHour);
//     this.totalCookies += everyHour;
//     }
//   },
// }

// // console.log(dubai);


// const paris = {
//   city: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSale: 2.3,
//   customerPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getCustomerPerHour: function(){
//     for(var i=0; i < time.length; i++){
//       var randomNum = random(this.minCustomer, this.maxCustomer)
//       this.customerPerHour.push(randomNum);
//     }
//   },
//   getCookiesPerHour: function(){
//     this.getCustomerPerHour();
//     for(var i=0; i < time.length; i++){
//     var everyHour = Math.ceil(this.customerPerHour[i] * this.avgCookieSale);
//     this.cookiesPerHour.push(everyHour);
//     this.totalCookies += everyHour;
//     }
//   },
// }

// // console.log(paris);


// const lima = {
//   city: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSale: 4.6,
//   customerPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getCustomerPerHour: function(){
//     for(var i=0; i < time.length; i++){
//       var randomNum = random(this.minCustomer, this.maxCustomer)
//       this.customerPerHour.push(randomNum);
//     }
//   },
//   getCookiesPerHour: function(){
//     this.getCustomerPerHour();
//     for(var i=0; i < time.length; i++){
//     var everyHour = Math.ceil(this.customerPerHour[i] * this.avgCookieSale);
//     this.cookiesPerHour.push(everyHour);
//     this.totalCookies += everyHour;
//     }
//   },
// }

// // console.log(lima);



const cityArray = [seattle, tokyo, dubai, paris, lima];

const citiesMainElm = document.getElementById('cityInfo');

function renderLocation(CookieStand){
let articleElm = document.createElement('article');
citiesMainElm.appendChild(articleElm);
// let h2Elm = document.createElement('h2');
// h2Elm.textContent = location.city;
// articleElm.appendChild(h2Elm);
// let ulElm = document.createElement('ul');
// articleElm.appendChild(ulElm);
// for(let i=0; i<time.length; i++){
//   let liElm = document.createElement('li');
//   liElm.textContent = `${time[i]}: ${location.cookiesPerHour[i]} cookies`
//   ulElm.appendChild(liElm);
//   }
  
  let tableElm = document.createElement('table');
  articleElm.appendChild(tableElm);
  let rowElm = document.createElement('tr');
  tableElm.appendChild(rowElm);
  let theadElm = document.createElement('thead');
  theadElm.textContent = `${time}`;
  rowElm.appendChild(theadElm);
  let tbodyElm = document.createElement('tbody');
  tableElm.appendChild(tbodyElm);
  let trow2Elm = docuemt.createElement('tr');
  trow2Elm.textContent=`${seattle}`
  tbodyElm.appendChild(trow2Elm);
  let trow3Elm = docuemt.createElement('tr');
  trow3Elm.textContent=`${tokyo}`
  tbodyElm.appendChild(trow3Elm);
  let trow4Elm = docuemt.createElement('tr');
  trow4Elm.textContent=`${dubai}`
  tbodyElm.appendChild(trow4Elm);
  let trow5Elm = docuemt.createElement('tr');
  trow5Elm.textContent=`${paris}`
  tbodyElm.appendChild(trow5Elm);
  let trow6Elm = docuemt.createElement('tr');
  trow6Elm.textContent=`${lima}`
  tbodyElm.appendChild(trow6Elm);
 }
// seattle.getCookiesPerHour();
// tokyo.getCookiesPerHour();
// paris.getCookiesPerHour();
// dubai.getCookiesPerHour();
// lima.getCookiesPerHour();
renderLocation(seattle);
// renderLocation(paris);
// renderLocation(tokyo);
// renderLocation(dubai);
// renderLocation(lima);


// for (let i=0; i < cityArray; i++){
//   renderLocation(cityArray[i]);

