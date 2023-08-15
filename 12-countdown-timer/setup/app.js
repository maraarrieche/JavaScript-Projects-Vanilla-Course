const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
//console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//como el mes se lee como array, debo colocarlo segun la posicion. Ejemplo: mayo(mes 4) = index 3
//las horas se escriben de 0 - 24
//new Date se lee: año, mes(index), dia, hora, minuto, segundo
//let futureDate = new Date(2023, 7, 15, 8, 30, 0);
//console.log(futureDate);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
//puedo ver en la consola el mes por su nombre en vez de index
//console.log(months[month]);
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

//propiedad textContent controla el texto
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in milli seconds
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1day = 24hr

  // values in ms
  const oneDay = 24*60*60*1000; // 24hr*60min*60s*1000ms
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds]; //estan en un array son varios items y los podemos iterar así

  //funcion para que cualquier numero menor de 10 en alguna fecha se le agregue un cero a la izquierda.
  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]); //aqui iteramos los items que estan como array y usamos el index para que se queden en posicion
  });
  //esto es para no tener error una vez que pasa el deadline y aparezca un mensaje!
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> sorry, this giveaway has expired! </h4>`
  };
};

// countdown 
//setInterval necesita 2 cosas: la funcion remaining time con las fechas y el 1000 para que comience el contador desde ms
//IMPORTANTE: invocar funcion remaining time DESPUES de declarar el countdown para tener acceso a la fecha exacta
let countdown = setInterval(getRemainingTime, 1000); // el contador corre cada ms

getRemainingTime();