let listPrevEl = document.querySelector('.list-prevjournals');
let listEl = document.createElement('ul');

const getPastEntries = async (event) => {

    const response = await fetch(`/api/journal/`, {
        method: 'GET'
    })
        .then(function (res) {
            if (res.ok) {
                res.json().then(function (data) {
                    // Code to clear all the html from the element
                    listPrevEl.innerHTML = '';
                    let length;

                    if (data.length < 10) {
                        length = data.length;
                    } else {
                        length = 10;
                    };

                    // Fetching the value from the data ten times for the last 10 entries
                    for (var i = 0; i < length; i++) {
                        let id = data[i].id;
                        let createdAtData = data[i].createdAt;
                        let result = createdAtData.split('T');
                        let createdAt = result[0];

                        // Calling the function that will get the data to displayed on the site
                        displayPastEntries(createdAt, id);
                    }
                })
            } else {
                alert('Error: ' + res.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to Backend');
        });
};

function displayPastEntries(createdAt, id) {

    let itemEl = document.createElement('il');
    let linkEl = document.createElement('a');
    let buttonEl = document.createElement('button');
    let idEl = document.createElement('p');

    buttonEl.textContent = createdAt;
    linkEl.appendChild(buttonEl);
    linkEl.setAttribute('href', `/prevjournal/${id}`);

    itemEl.appendChild(linkEl);

    idEl.textContent = id;
    idEl.style.display = 'none';
    idEl.setAttribute('id', 'journal-id');
    itemEl.appendChild(idEl);

    listEl.appendChild(itemEl);

    listPrevEl.appendChild(listEl);
};


getPastEntries();