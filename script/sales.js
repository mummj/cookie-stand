'use strict';

// console.log('I am also alive');

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const tableElm = document.getElementById('cityInfo');


function CookieStand(city, minCustomer, maxCustomer, avgCookieSale){
  this.city = city;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHour = [];

  CookieStand.AllCookieStands.push(this);
}

CookieStand.AllCookieStands = [];

CookieStand.prototype.getCustomerPerHour = function(){
  return random(this.minCustomer, this.maxCustomer);
   
  }
  

CookieStand.prototype.getCookiesPerHour = function(){ 
    for(var i=0; i < time.length; i++){
    const cookiesPerHour = Math.floor((this.getCustomerPerHour() * this.avgCookieSale));
    this.cookiesPerHour.push(cookiesPerHour);
    }

}

CookieStand.prototype.renderCookieStand = function(tbodyElm){
  let total = 0;
  let rowElm = document.createElement('tr');
  tbodyElm.appendChild(rowElm);
  let tHeadCity = document.createElement('th');
  tHeadCity.textContent = this.name;
  rowElm.appendChild(tHeadCity);
  for(var i=0; i < this.cookiesPerHour.length; i++){
    let totalPerHour = this.cookiesPerHour[i];
    let tdElm = document.createElement('td');
    tdElm.textContent = totalPerHour;
    total += totalPerHour;
    rowElm.appendChild(tdElm);
  }
  let totalElm = document.createElement('th');
  totalElm.textContent = total;
  rowElm.appendChild(totalElm);
}

function renderHeader(){
  let tHeaderElm = document.createElement('thead');
  tableElm.appendChild(tHeaderElm);
  let headerRowElm = document.createElement('tr');
  tableElm.appendChild(headerRowElm);
  let emptyCell = document.createElement('td');
  headerRowElm.appendChild(emptyCell);
  for(var i=0; i < time.length; i++){
  let timeHeader = document.createElement('th');
  timeHeader.textContent = time[i];
  headerRowElm.appendChild(timeHeader);
  }
  let totalCell = document.createElement('td');
  totalCell.textContent = 'Total';
  headerRowElm.appendChild(totalCell);
}

function renderAllCookieStands(){
  let tbodyElm = document.createElement('tbody');
  tableElm.appendChild(tbodyElm);
  for (var i=0; i<CookieStand.AllCookieStands.length; i++){
    let currentStand = CookieStand.AllCookieStands[i];
    currentStand.getCookiesPerHour();
    currentStand.renderCookieStand(tbodyElm);
    }
}

const seattle = new CookieStand('Seattle', 23, 65, 6.3);

const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);

const dubai = new CookieStand('Dubai', 11, 38, 3.7);

const paris = new CookieStand('Paris', 20, 38, 2.3);

const lima = new CookieStand('Lima', 2, 16, 4.6)

renderHeader();
renderAllCookieStands();


