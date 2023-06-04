async function journalFormHandler(event) {
    event.preventDefault();

    const gratitude = document.querySelector(".gratitude-user-entry").value.trim();
    const great_day = document.querySelector(".great-day-user-entry").value.trim();
    const affirmation = document.querySelector(".affirmation-user-entry").value.trim();
    const highlights = document.querySelector(".highlights-user-entry").value.trim();
    const lesson = document.querySelector(".lessons-today-user-entry").value.trim();

    const mood = document.querySelector(".mood").value;

    const response = fetch(`/api/journal`, {
            method: 'POST',
            body: JSON.stringify({gratitude, great_day, affirmation, highlights, lesson, mood}),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response === 201) {
            document.location.replace('/');
        } 
    }


// function getPastEntries(){
//     fetch('/api/journal', {
//         method: 'GET',
//     })
//     .then(function (response) {
//         if (response.ok) {
//           console.log(response);
//           response.json().then(function (data) {
//             console.log(data);
//             // Code to clear all the html from the element
//             futureWeatherEl.innerHTML = '';
//             // Fetching the value from the data five times for the next 5 days
//             for (var i = 1; i < 10; i++){
//                 var temperature = data.list[i].main.temp;
//                 var wind = data.list[i].wind.speed;
//                 var humidity = data.list[i].main.humidity;
//                 var iconCode = data.list[i].weather[0].icon;
//                 var icon = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png';
//                 // Calling the function that will get the weather data to display on the site
//                 displayPastEntries(temperature, wind, humidity, icon, i);
//             }
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to connect to Backend');
//       });
// };

// function displayPastEntries(){

// };


document
  .querySelector('#journal-form')
  .addEventListener("submit", journalFormHandler);



// document
//   .querySelector('#list-prevjournals')
//   .addEventListener('onload', getPastEntries);


