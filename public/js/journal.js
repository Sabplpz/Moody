const journalFormHandler = async (event) => {
    event.preventDefault();

    const gratitudeEntry = document.querySelector("#gratitude-user-entry").value.trim();
    const greatDayEntry = document.querySelector("#great-day-user-entry").value.trim();
    const affirmationEntry = document.querySelector("#affirmation-user-entry").value.trim();
    const highlightsEntry = document.querySelector("#highlights-user-entry").value.trim();
    const lessonEntry = document.querySelector("#lessons-today-user-entry").value.trim();

    if (gratitudeEntry || greatDayEntry || affirmationEntry || highlightsEntry || lessonEntry) {

        const response = await fetch('/api/journal', {
            method: 'POST',
            body: JSON.stringify({gratitudeEntry, greatDayEntry, affirmationEntry, highlightsEntry, lessonEntry}),
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

document
  .querySelector('.journal-form')
  .addEventListener('submit', journalFormHandler);


