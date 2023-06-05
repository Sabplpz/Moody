async function journalFormHandler(event) {
    event.preventDefault();

    const id = document.querySelector('.journal-id').textContent;
    console.log(id);
    const route = `/api/journal/${id}`;
    console.log(route);

    const gratitude = document.querySelector(".gratitude-user-entry").value.trim();
    const great_day = document.querySelector(".great-day-user-entry").value.trim();
    const affirmation = document.querySelector(".affirmation-user-entry").value.trim();
    const highlights = document.querySelector(".highlights-user-entry").value.trim();
    const lesson = document.querySelector(".lessons-today-user-entry").value.trim();

    const mood = document.querySelector('input[class="mood"]:checked').value;

    const response = fetch(route, {
        method: 'PUT',
        body: JSON.stringify({ gratitude, great_day, affirmation, highlights, lesson, mood }),
        headers: { 'Content-Type': 'application/json' }
    });

    document.location.replace(`/prevjournal/${id}`);

}

document
    .querySelector('#journal-form')
    .addEventListener("submit", journalFormHandler);
