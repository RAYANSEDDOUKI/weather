// const kep_api = "69c0ebf2b8dd96592aa6a75409e604be";
// const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// const A = document.getElementById("inp-name");
// const B = document.getElementById("btn");
// const icon = document.getElementById("icon");
// const p = document.getElementById("p")

// async function checkWeather(nme){
//       var w = document.getElementById("weather")
//       w.style.display = "block";

//       const response = await fetch(url + nme + `&appid=${kep_api}`);

//       if(response.status == 404 || 400){
//             document.querySelector(".error").style.display = "block";
//             w.style.display = "none";

//             if(A.value == ""){
//                   p.innerHTML = "Please fill in the field with the city or state";
//             }
//       }

//       const data = await response.json();

//       console.log(data);

//       document.getElementById("city-name").innerHTML = data.name;
//       document.getElementById("temp").innerHTML = data.main.temp + "°C";
//       document.getElementById("humidity").innerHTML = data.main.humidity + "%";
//       document.getElementById("wind").innerHTML = data.wind.speed+ "km/h";

//       const img_weather = data.weather[0].main;

//       if(img_weather == "Clouds"){
//             icon.src = "images./clouds.png"
//       }else if(img_weather == "Rain"){
//             icon.src = "images./rain.png"
//       }else if(img_weather == "Haze"){
//             icon.src = "images./drizzle.png"
//       }else if(img_weather == "Mist"){
//             icon.src = "images./mist.png"
//       }else if(img_weather == "Humidity"){
//             icon.src = "images./humidity.png"
//       }else if(img_weather == "Clear"){
//             icon.src = "images./clear.png"
//       }

//       console.log(img_weather)

// }
// B.addEventListener("click", function(){
//       console.log(A.value)
//       checkWeather(A.value)

// })

const kep_api = "69c0ebf2b8dd96592aa6a75409e604be";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const A = document.getElementById("inp-name");
const B = document.getElementById("btn");
const icon = document.getElementById("icon");
const p = document.getElementById("p");
const e = document.querySelector(".error");


async function checkWeather(nme) {
    var w = document.getElementById("weather");
    w.style.display = "block";

    const response = await fetch(url + nme + `&appid=${kep_api}`);

    if(response.status === 404) {
      e.style.display = "block";
      
      p.innerHTML = "Sorry, the city name appears to be incorrect or not found. Please try again.";
      w.style.display = "none";
     
      // إضافة السطر لإخفاء عنصر الرسالة الخطأ
      
      return;
  }else{
      e.style.display = "none";
  }

  if(response.status === 400) {
      e.style.display = "block";
      w.style.display = "none";
      if(A.value === "") {
          p.innerHTML = "Please fill in the field with the city or state";
      }else{
            e.style.display = "none";
      }
      // إضافة السطر لإخفاء عنصر الرسالة الخطأ
      // e.style.display = "none";
      return;
  }else{
      e.style.display = "none";
  }

    const data = await response.json();

    console.log(data);

    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp + "°C";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";

    const img_weather = data.weather[0].main;

    if(img_weather == "Clouds") {
        icon.src = "images/clouds.png";
    } else if(img_weather == "Rain") {
        icon.src = "images/rain.png";
    } else if(img_weather == "Haze") {
        icon.src = "images/drizzle.png";
    } else if(img_weather == "Mist") {
        icon.src = "images/mist.png";
    } else if(img_weather == "Clear") {
        icon.src = "images/clear.png";
    }

    console.log(img_weather);
}

B.addEventListener("click", function() {
    console.log(A.value);
    checkWeather(A.value);
});
