// Fetch a random quote from the API
fetch('https://type.fit/api/quotes',)
  .then(response => response.json())
  .then(data => {
    // Pull the quote and author from the API response
    const quote = data[0].text;
    const author = data[0].author;

    // Display the quote and author on the webpage
    const randomElement = document.getElementById('random');

    //Generate Random Quote
    
    for (var i = 0; i < 1; i++) {
      var randomIndex = Math.floor(Math.random() * data.length);
      var randomQuote = data[randomIndex];
      randomElement.textContent = `${randomQuote.text} - ${randomQuote.author}`;
      console.log(`${randomQuote.text} - ${randomQuote.author}`);
    }

    console.log(`"${quote}" - ${author}`); // Output the quote and author
  })
  .catch(error => console.error(error));