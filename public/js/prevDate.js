const id = document.querySelector('.journal-id').textContent;
const text = document.querySelector('.text');

fetch(`/api/journal/${id}`, {
    method: 'GET',
})
.then(function (res) {
    if (res.ok) {
        res.json().then(function (data) {
            // Code to clear all the html from the element
            let dateData = data.createdAt;
            let dateArray = dateData.split('T');
            let date = dateArray[0];

            text.textContent = `Your Mood On ${date}:`;
        })
    } else {
        alert('Error: ' + res.statusText);
    }
})
.catch(function (error) {
    alert('Unable to connect to Backend');
});