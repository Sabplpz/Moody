// async function getPastEntries(){
    // fetch('/api/journal/5', {
    //     method: 'GET',
    // })
    // .then(function (response) {
    //       console.log(response);
    //     //   response.json().then(function (data) {
    //     //     console.log(data);
    //     //     // Code to clear all the html from the element
    //     //     futureWeatherEl.innerHTML = '';
    //     //     // Fetching the value from the data five times for the next 5 days
    //     //     for (var i = 1; i < 10; i++){
    //     //         var temperature = data.list[i].main.temp;
    //     //         var wind = data.list[i].wind.speed;
    //     //         var humidity = data.list[i].main.humidity;
    //     //         var iconCode = data.list[i].weather[0].icon;
    //     //         var icon = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png';
    //     //         // Calling the function that will get the weather data to display on the site
    //     //         displayPastEntries(temperature, wind, humidity, icon, i);
    //     //     }
    //     //   });
    //     // } else {
    //     //   alert('Error: ' + response.statusText);
    //     // }
    //   })
    //   .catch(function (error) {
    //     alert('Unable to connect to Backend');
    //   });

    fetch(`/api/journal`, {
        method: 'GET',
    })
    .then(function (response) {
        console.log(response)
    });

// };

// function displayPastEntries(){

// };

// document
//   .querySelector('.list-prevjournals')
//   .addEventListener("load", getPastEntries);