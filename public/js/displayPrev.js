let gratitudeEl = document.querySelector('.gratitude');
let great_dayEl = document.querySelector('.great_day');
let affirmationEl = document.querySelector('.affirmation');
let highlightsEl = document.querySelector('.highlights');
let lessonEl = document.querySelector('.lesson');
let moodEl = document.querySelector('.mood');

const getPastEntries = async (event) => {

    const response = await fetch(`/api/journal/`, {
        method: 'GET'
    })
        .then(function (res) {
            if (res.ok) {
                res.json().then(function (data) {
                    // Code to clear all the html from the element
                    listPrevEl.innerHTML = '';

                     // Fetching the value from the data ten times for the last 10 entries
                    for (var i = 0; i < 10; i++) {
                        let id = data[i].id;
                        let createdAtData = data[i].createdAt;
                        let result = createdAtData.split('T');
                        let createdAt = result[0];
                        console.log(createdAt, id);

                        // Calling the function that will get the data to displayed on the site
                        displayPastEntries(createdAt, id);
                    }
                })
            } else {
                alert('Error: ' + res.statusText);
            }
        })
        .catch (function (error) {
    alert('Unable to connect to Backend');
});
};

function displayPastEntries(createdAt, id) {

    let itemEl = document.createElement('il');
    let buttonEl = document.createElement('button');
    let idEl = document.createElement('p');

    buttonEl.textContent = createdAt;
    itemEl.appendChild(buttonEl);

    idEl.textContent = id;
    idEl.style.display ='none';
    idEl.setAttribute('id', 'journal-id');
    itemEl.appendChild(idEl);

    listEl.appendChild(itemEl);

    listPrevEl.appendChild(listEl);
};


getPastEntries();