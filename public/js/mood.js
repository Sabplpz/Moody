const journalFormHandler = async (event) => {
    event.preventDefault();

    const gratitudeEntry = document.querySelector("#gratitude-user-entry").value.trim();
    const greatDayEntry = document.querySelector("#great-day-user-entry").value.trim();
    const affirmationEntry = document.querySelector("#affirmation-user-entry").value.trim();
    const highlightsEntry = document.querySelector("#highlights-user-entry").value.trim();
    const lessonEntry = document.querySelector("#lessons-today-user-entry").value.trim();

    if (gratitudeEntry || greatDayEntry || affirmationEntry || highlightsEntry || lessonEntry) {

        const response = await fetch('api/journal', {
            method: 'POST',
            body: JSON.stringify({gratitudeEntry, greatDayEntry, affirmationEntry, highlightsEntry, lessonEntry}),
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

const happyBtn = document.querySelector("#happy-mood");
const neutralBtn = document.querySelector("#neutral-mood");
const indecisiveBtn = document.querySelector("#indecisive-mood");
const anxiousBtn = document.querySelector("#anxious-mood");
const sadBtn = document.querySelector("#sad-mood");
const emotionalBtn = document.querySelector("#emotional-mood");
const angryBtn = document.querySelector("#angry-mood");
const annoyedBtn = document.querySelector("#annoyed-mood");
const sickBtn = document.querySelector("#sick-mood");
const tiredBtn = document.querySelector("#tired-mood");

async function happyMood(event) {
    event.preventDefault();

    const happyEntry = "happy";
    
    const response = await fetch('/api/mood/', {
        method: 'POST',
        body: JSON.stringify({
            happyEntry
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#happyBtn').addEventListener('submit', happyMood);
