var userName = prompt("Lütfen Kullanıcı Adını Giriniz : ");
var name = (document.querySelector("#myName").innerHTML = userName);

function clock() {
  var myClock = document.querySelector("#myClock");

  var hour = new Date().getHours();
  var minute = new Date().getMinutes();
  var second = new Date().getSeconds();

  var d = new Date();
  var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  myClock.innerHTML = `${hour}:${minute}:${second}   ${days[d.getDay()]} `;
}

var interval = setInterval(clock, 100);
