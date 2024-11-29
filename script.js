document.addEventListener('DOMContentLoaded', function() {
    // Timing Card - Show a popup with gym shift and timings
    document.getElementById('timingCard').addEventListener('click', function() {
      const timingDetails = `
          <h2>Our Gym Timings</h2>
          <ul>
              <li>Monday - Friday </li><li>Morning Shift:  6:00 AM - 11:00 AM</li>
              <li>Evening Shift:  4:00 PM - 10:00 PM</li>
              <li>Saturday</li><li> 8:00 AM - 6:00 PM</li>
              <li>Sunday: Closed</li>
          </ul>
      `;
      showPopup('', timingDetails);
    });
  
    // Contact Card (in the cards section) - Show a popup with contact details
    document.getElementById('contactCard').addEventListener('click', function() {
      const contactDetails = `
          <h2>Contact Us</h2>
          <p>Email: blissfit@gmail.com</p>
          <p>Phone: +91 888666555</p>
          <p>Address: RPD,Belgaum,Karnataka</p>
      `;
      showPopup('', contactDetails);
    });
  
    // Contact Navigation Link - Show a popup with contact details (now using a unique ID for the nav link)
    document.getElementById('contactNavLink').addEventListener('click', function(event) {
      event.preventDefault();  // Prevent default behavior of the link (to avoid page reload)
      const contactDetails = `
          <h2>Contact Us</h2>
          <p>Email: blissfit@gmail.com</p>
          <p>Phone: +91 888666555</p>
          <p>Address: RPD,Belgaum,Karnataka</p>
      `;
      showPopup('Contact Details', contactDetails);
    });
  
    // Function to show the popup with dynamic content
    function showPopup(title, content) {
      const popup = document.createElement('div');
      popup.classList.add('popup');
  
      const popupContent = `
          <div class="popup-content">
              <h3>${title}</h3>
              <div>${content}</div>
              <button onclick="closePopup()">Close</button>
          </div>
      `;
      popup.innerHTML = popupContent;
      document.body.appendChild(popup);
    }
  
    // Function to close the popup
    window.closePopup = function() {
      const popup = document.querySelector('.popup');
      popup.remove();
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Array of quotes
    const quotes = [
      "\"Your potential is limitless.\" - Unknown",
      "\"Strength does not come from what you can do. It comes from overcoming the things you once thought you couldn't.\" - Rikki Rogers",
      "\"The only bad workout is the one that didn't happen.\" - Anonymous",
      "\"Push yourself because no one else is going to do it for you.\" - Anonymous",
      "\"Success starts with self-discipline.\" - Anonymous"
    ];

    let quoteIndex = 0; // To track which quote is being shown
    const quoteElement = document.getElementById('quote'); // Get the quote element

    // Function to change the quote
    function changeQuote() {
      // Change the text content of the quote element
      quoteElement.textContent = quotes[quoteIndex];
      // Move to the next quote, looping back to the start if necessary
      quoteIndex = (quoteIndex + 1) % quotes.length;
    }

    // Change quote every 5 seconds (5000ms)
    setInterval(changeQuote, 5000);

    // Display the first quote immediately
    changeQuote();
});
