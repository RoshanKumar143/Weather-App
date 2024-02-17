let inputEle = document.getElementById("location-input")
let tempEle = document.getElementById("temp-value")
let locEle = document.getElementById("location")
let weatherDescEle = document.getElementById("weather-desc")
let btnFirstEle = document.getElementById("btn1")


const apiKey = "c6aeac6306d7f8b2d28139630aa50d8a";


btnFirstEle.onclick = function(){

    if(inputEle.value == "")
        alert("Please Enter some location")
    else{
        loc =inputEle.value
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const{name} = data
            const{feels_like} = data.main
            const{description} = data.weather[0]
            tempEle.innerText = Math.floor(feels_like-273)
            weatherDescEle.innerText = description
            locEle.innerText = name
        })
        .catch(() => {
            alert("Enter valid location")
        })
        inputEle.value = ""
    }
}









// for this weather api request is based on location
/*
New York
London
Hyderabad
Mumbai
Jagtial
*/