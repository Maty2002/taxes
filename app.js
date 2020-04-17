var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element

  id: 'io.framework7.myapp', // App bundle ID
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});
// Login Screen Demo


$$(document).on('page:init', '.page[data-name="tabela"]', function(){
  let tabel = document.getElementById('tab');
 
  for(var i=1; i<12; i++){
    let row = tabel.insertRow(i);

    let cell = row.insertCell(0);
    cell.classList.add("label-cell");

    let cell2 = row.insertCell(1);
    cell2.classList.add("numeric-cell");

    let cell3 = row.insertCell(2);
    cell3.classList.add("medium-only");

    cell.innerHTML = i-1;
    cell2.innerHTML = `${i-1}x19`;
    cell3.innerHTML = `${i*19} | Mateusz Małolepszy`;
  }
});










$$(document).on('click', '.PODATEK', ()=>{
  const el1 = document.querySelector('input.sorce2');
  const el2 = document.querySelector('label.sorce2');

  if(document.querySelector('input.PODATEK').checked){
    el1.style.display = 'block'; 
    el2.style.display = 'block'; 
  }else{
    el1.style.display = 'none'; 
    el2.style.display = 'none'; 
  }
});

$$(document).on('click', '.VAT', ()=>{
  const el1 = document.querySelector('input.sorce3');
  const el2 = document.querySelector('label.sorce3');

  if(document.querySelector('input.VAT').checked){
    el1.style.display = 'block'; 
    el2.style.display = 'block'; 
  }else{
    el1.style.display = 'none'; 
    el2.style.display = 'none'; 
  }
});


                          /////////////////////////////////////////////////////////////
const values = ()=>{
  const price = parseInt(document.querySelector('input.cena').value); 
  const quantity = parseInt(document.querySelector('input.ilosc').value); 
  const tax = document.querySelector('input.PODATEK').checked;
  const vat = document.querySelector('input.VAT').checked;

  
  return {
    price: price,
    quantity: quantity,
    netto: price * quantity,
    tax: tax,
    vat: vat
  };
};

const prices = (val)=>{
  const secondResult = val.netto * 0.18;
  const thirdResult = secondResult * 0.23;

  return {
    secondResult: secondResult, 
    thirdResult: thirdResult,
    netto: val.netto
  }
};

const change = (pri)=>{
  const price = document.querySelectorAll('input.sorce'); 

  price[0].value = pri.netto;
  price[1].value = pri.secondResult;
  price[2].value = pri.thirdResult;
}

$$(document).on('keyup', '.cena', ()=>{
  change(prices(values()));
});

$$(document).on('keyup', '.ilosc', ()=>{
  change(prices(values()));
});
///////////////////////////////////////////////////////////////////////////








































$$(document).on('keyup', '.imie',function(){
  const input = document.querySelector('input.imie');
  if(input.value.match(/^[A-Z][a-z]+$/))
    input.style.color = 'green'
  else
    input.style.color = 'red' 
});

$$(document).on('keyup', '.nazwisko',function(){
  const input = document.querySelector('input.nazwisko');
  if(input.value.match(/^[A-Z][a-z]+$/))
    input.style.color = 'green'
  else
    input.style.color = 'red' 
});

$$(document).on('keyup', '.KodPocztowy',function(){
  const input = document.querySelector('input.KodPocztowy');
  if(input.value.match(/^[0-9][0-9]-[0-9][0-9][0-9]$/))
    input.style.color = 'green'
  else
    input.style.color = 'red' 
});

$$(document).on('keyup', '.Miasto',function(){
  const input = document.querySelector('input.Miasto');
  if(input.value.match(/^[A-Z][a-z]+$/))
    input.style.color = 'green'
  else
    input.style.color = 'red' 
});

$$(document).on('keyup', '.email',function(){
  const input = document.querySelector('input.email');
  if(input.value.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i))
    input.style.color = 'green'
  else
    input.style.color = 'red' 
});

$$(document).on('keyup', '.tel',function(){
  const input = document.querySelector('input.tel');
  if(input.value.match(/^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9]$/))
    input.style.color = 'green'
  else
    input.style.color = 'red' 
});

$$(document).on('click', '.add',function(){
  var formData = app.form.convertToData('#my-form');
  alert(parseInt(formData.a)+parseInt(formData.b));
});

$$(document).on('click', '.odj',function(){
  var formData = app.form.convertToData('#my-form');
  alert(parseInt(formData.a)-parseInt(formData.b));
});

$$(document).on('click', '.mno',function(){
  var formData = app.form.convertToData('#my-form');
  alert(parseInt(formData.a)*parseInt(formData.b));
});

$$(document).on('click', '.dzie',function(){
  var formData = app.form.convertToData('#my-form');
  alert(parseInt(formData.a)/parseInt(formData.b));
});

$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
  
});