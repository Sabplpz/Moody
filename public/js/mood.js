// const happyBtn = document.querySelector("#happy-mood");
// const neutralBtn = document.querySelector("#neutral-mood");
// const indecisiveBtn = document.querySelector("#indecisive-mood");
// const anxiousBtn = document.querySelector("#anxious-mood");
// const sadBtn = document.querySelector("#sad-mood");
// const emotionalBtn = document.querySelector("#emotional-mood");
// const angryBtn = document.querySelector("#angry-mood");
// const annoyedBtn = document.querySelector("#annoyed-mood");
// const sickBtn = document.querySelector("#sick-mood");
// const tiredBtn = document.querySelector("#tired-mood");


// //HAPPY MOOD ENTRY
// async function happyMood(event) {
//     event.preventDefault();

//     const happyEntry = "happy";
    
//     const response = await fetch('/api/mood/', {
//         method: 'POST',
//         body: JSON.stringify({
//             happyEntry
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// };

// document.querySelector('#happyBtn').addEventListener('submit', happyMood);


// //NEUTRAL MOOD ENTRY
// async function neutralMood(event) {
//     event.preventDefault();

//     const neutralEntry = "neutral";
    
//     const response = await fetch('/api/mood/', {
//         method: 'POST',
//         body: JSON.stringify({
//             neutralEntry
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// };

// document.querySelector('#neutralBtn').addEventListener('submit', neutralMood);

// //INDECISIVE MOOD ENTRY
// async function indecisiveMood(event) {
//     event.preventDefault();

//     const indecisiveEntry = "indecisive";
    
//     const response = await fetch('/api/mood/', {
//         method: 'POST',
//         body: JSON.stringify({
//             indecisiveEntry
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// };

// document.querySelector('#anxiousBtn').addEventListener('submit', indecisiveMood);

// //ANXIOUS MOOD ENTRY
// async function anxiousMood(event) {
//     event.preventDefault();

//     const anxiousEntry = "anxious";
    
//     const response = await fetch('/api/mood/', {
//         method: 'POST',
//         body: JSON.stringify({
//             anxiousEntry
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// };

// document.querySelector('#anxiousBtn').addEventListener('submit', anxiousMood);

// //SAD MOOD ENTRY
// async function sadMood(event) {
//     event.preventDefault();

//     const sadEntry = "sad";
    
//     const response = await fetch('/api/mood/', {
//         method: 'POST',
//         body: JSON.stringify({
//             sadEntry
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// };

// document.querySelector('#sadBtn').addEventListener('submit', sadMood);

// //EMOTIONAL MOOD ENTRY
// async function emotionalMood(event) {
//     event.preventDefault();

//     const emotionalEntry = "emotional";
    
//     const response = await fetch('/api/mood/', {
//         method: 'POST',
//         body: JSON.stringify({
//             emotionalEntry
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// };

// document.querySelector('#emotionalBtn').addEventListener('submit', emotionalMood);

// //ANGRY MOOD ENTRY
// async function angryMood(event) {
//     event.preventDefault();

//     const angryEntry = "angry";
    
//     const response = await fetch('/api/mood/', {
//         method: 'POST',
//         body: JSON.stringify({
//             angryEntry
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// };

// document.querySelector('#angryBtn').addEventListener('submit', angryMood);

// //ANNOYED MOOD ENTRY
// async function annoyedMood(event) {
//     event.preventDefault();

//     const annoyedEntry = "annoyed";
    
//     const response = await fetch('/api/mood/', {
//         method: 'POST',
//         body: JSON.stringify({
//             annoyedEntry
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// };

// document.querySelector('#annoyedBtn').addEventListener('submit', annoyedMood);

// //SICK MOOD ENTRY
// async function sickMood(event) {
//     event.preventDefault();

//     const sickEntry = "sick";
    
//     const response = await fetch('/api/mood/', {
//         method: 'POST',
//         body: JSON.stringify({
//             sickEntry
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// };

// document.querySelector('#annoyedBtn').addEventListener('submit', sickMood);

// //TIRED MOOD ENTRY
// async function tiredMood(event) {
//     event.preventDefault();

//     const tiredEntry = "tired";
    
//     const response = await fetch('/api/mood/', {
//         method: 'POST',
//         body: JSON.stringify({
//             tiredEntry
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText);
//     }
// };

// document.querySelector('#tiredBtn').addEventListener('submit', tiredMood);

