document.addEventListener('DOMContentLoaded', function() {
    
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
  

    document.getElementById('contactCard').addEventListener('click', function() {
      const contactDetails = `
          <h2>Contact Us</h2>
          <p>Email: blissfit@gmail.com</p>
          <p>Phone: +91 888666555</p>
          <p>Address: RPD,Belgaum,Karnataka</p>
      `;
      showPopup('', contactDetails);
    });
  
    
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
  
    
    window.closePopup = function() {
      const popup = document.querySelector('.popup');
      popup.remove();
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    
    const quotes = [
      "\"Your potential is limitless.\" - Unknown",
      "\"Strength does not come from what you can do. It comes from overcoming the things you once thought you couldn't.\" - Rikki Rogers",
      "\"The only bad workout is the one that didn't happen.\" - Anonymous",
      "\"Push yourself because no one else is going to do it for you.\" - Anonymous",
      "\"Success starts with self-discipline.\" - Anonymous"
    ];

    let quoteIndex = 0; 
    const quoteElement = document.getElementById('quote'); 

    
    function changeQuote() {
      
      quoteElement.textContent = quotes[quoteIndex];
      
      quoteIndex = (quoteIndex + 1) % quotes.length;
    }


    setInterval(changeQuote, 5000);

   
    changeQuote();
});
