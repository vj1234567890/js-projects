let search=document.querySelector(".search button");
search.addEventListener("click",function(){
    let city=document.querySelector(".search input").value;
    getwether(city);
})
function getwether(city){
let xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?&appid=056aca53b1f93a175a339081848512d9&units=metric&q="+city)
xhr.onload = function() {
    let data = JSON.parse(xhr.responseText);
    let temprature =data.main.temp;
    let WindSpeed=data.wind.speed;
    let humidity=data.main.humidity;
    // console.log(`temprature=${temprature},WindSpeed=${WindSpeed},humidity=${humidity}`);
    let tempbox=document.querySelector(".temp");
    tempbox.innerHTML=`${temprature}°c`;
    let citybox=document.querySelector(".city");
    citybox.innerHTML=data.name;    
    let humidbox=document.querySelector(".humid");
    humidbox.innerHTML=`${humidity}%`;
    let windbox=document.querySelector(".wind");
    windbox.innerHTML=`${WindSpeed}KM/H`;
    image=document.querySelector(".image");
    if(data.weather[0].main=="Clouds"){
        console.log(data.weather[0].main);
        
        image.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        image.src="clear.png";
        
        console.log(data.weather[0].main);
    }
    else if(data.weather[0].main=="Rain"){
        image.src="rain.png";
        
        console.log(data.weather[0].main);
    }
    else if(data.weather[0].main=="Mist"){
        image.src="mist.png";
        
        console.log(data.weather[0].main);
    }   
    else if(data.weather[0].main=="Drizzle"){
        image.src="drizzle.png";
        console.log(data.weather[0].main);
    }   
    else if(data.weather[0].main=="Snow"){
        image.src="snow.png";
        console.log(data.weather[0].main);
    }   
    else if(data.weather[0].main=="Thunderstorm"){
        image.src="thunderstorm.png";
        console.log(data.weather[0].main);
    } 
    else if(data.weather[0].main=="Haze"){
        image.src="haze.png";
        console.log(data.weather[0].main);
    }
    else if(data.weather[0].main=="Fog"){
        image.src="fog.png";
        console.log(data.weather[0].main);
    }
    
}
xhr.send()
}