async function journalFormHandler(event) {
    event.preventDefault();

    const gratitude = document.querySelector(".gratitude-user-entry").value.trim();
    const great_day = document.querySelector(".great-day-user-entry").value.trim();
    const affirmation = document.querySelector(".affirmation-user-entry").value.trim();
    const highlights = document.querySelector(".highlights-user-entry").value.trim();
    const lesson = document.querySelector(".lessons-today-user-entry").value.trim();

    const mood = document.querySelector('input[class="mood"]:checked').value;

    const response = fetch(`/api/journal`, {
        method: 'POST',
        body: JSON.stringify({ gratitude, great_day, affirmation, highlights, lesson, mood }),
        headers: { 'Content-Type': 'application/json' }
    });

    document.location.replace('/');

}

document
    .querySelector('#journal-form')
    .addEventListener("submit", journalFormHandler);
