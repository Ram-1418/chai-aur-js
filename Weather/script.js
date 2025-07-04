const baseUrl = "http://api.weatherapi.com/v1/current.json"

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apikey = "5da0c2e43cb5495899953708250407"
    const url = `${baseUrl}?key=${apikey}&q=${city}&aqi=yes`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("city not found");

        }
        const data = await response.json();
        console.log(data)

        displayData(data)


    } catch (error) {
        document.getElementById("weatherOutput").innerHTML = `<p style="color:red">${error.message}</p>`;
    }
}

document.getElementById("btn").addEventListener("click", function () {
    // console.log(e);
    
   getWeather()
  

})


function displayData(data) {
    const city = data.location.name;
    const country = data.location.country;
    const time = data.location.localtime;
    const temp = data.current.temp_c;
    const humidity = data.current.humidity;
    const condition = data.current.condition.text;
    const icon = "https:" + data.current.condition.icon

    const weatherBox = document.getElementById("weatherOutput")


    weatherBox.innerHTML = `

   <h2>weather in ${city}, ${country}<h2/>
   <p>Time:${time}<p/>
   <img src="${icon}" alt="weather icon"/>
   <p>temperature:${temp}C<p/>
    <p>Humidity: ${humidity}%</p>
    <p>Condition: ${condition}</p>

`
}


