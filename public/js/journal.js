async function journalFormHandler(event) {
    event.preventDefault();

    const gratitude = document.querySelector(".gratitude-user-entry").value.trim();
    const great_day = document.querySelector(".great-day-user-entry").value.trim();
    const affirmation = document.querySelector(".affirmation-user-entry").value.trim();
    const highlights = document.querySelector(".highlights-user-entry").value.trim();
    const lesson = document.querySelector(".lessons-today-user-entry").value.trim();

    const response = fetch(`/api/journal`, {
            method: 'POST',
            body: JSON.stringify({gratitude, great_day, affirmation, highlights, lesson}),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } 
    }


document.querySelector('.journal-form').addEventListener('submit', journalFormHandler);



