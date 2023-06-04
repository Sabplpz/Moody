const date = dayjs().format('MMM DD, YYYY');

let dateEl = document.querySelector('.date');
dateEl.textContent = date;