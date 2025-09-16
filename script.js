// Search Function
function searchTrips() {
  const query = document.getElementById('search').value;
  if (query) {
    alert("Searching for: " + query);
  } else {
    alert("Please enter a destination or keyword.");
  }
}

// Book Now and Explore Deals
function bookNow() {
  alert("Redirecting to Booking Page...");
}

function exploreDeals() {
  alert("Showing best travel deals...");
}

// Handle Login
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  alert(`Logged in as ${email}`);
  // You can integrate with a backend for authentication
}

// Handle Signup
function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  alert(`Welcome ${name}! Signup successful.`);
}
document.addEventListener("DOMContentLoaded", function () {
  // Get search query from URL
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("query");
  document.getElementById("search-query").innerText = query;

  // Mock Data for Available Trips
  const trips = {
    delhi:"delhi.html"
  };

  // Display Matched Trips
  const tripsContainer = document.getElementById("trips-container");
  const matchedTrips = trips.filter(trip => trip.place.toLowerCase().includes(query.toLowerCase()));

  if (matchedTrips.length > 0) {
    matchedTrips.forEach(trip => {
      const tripCard = document.createElement("div");
      tripCard.classList.add("trip-card");
      tripCard.innerHTML = `<h3>${trip.place}</h3><p>Transport: ${trip.transport}</p>`;
      tripsContainer.appendChild(tripCard);
    });
  } else {
    tripsContainer.innerHTML = "<p>No trips found for this destination.</p>";
  }

  // Google Maps Integration
  function initMap() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: query }, function (results, status) {
      if (status === "OK") {
        const map = new google.maps.Map(document.getElementById("map"), {
          center: results[0].geometry.location,
          zoom: 10,
        });
        new google.maps.Marker({
          position: results[0].geometry.location,
          map: map,
        });
      } else {
        document.getElementById("map").innerHTML = "<p>Location not found on map.</p>";
      }
    });
  }
  window.initMap = initMap;

//   // Load Suggested Blog
//   fetch("blog_data.json")
//     .then(response => response.json())
//     .then(data => {
//       const blog = data.find(blog => blog.place.toLowerCase() === query.toLowerCase());
//       if (blog) {
//         document.getElementById("blog-title").innerText = blog.title;
//         document.getElementById("blog-link").href = blog.link;
//       } else {
//         document.getElementById("blog-suggestion").innerHTML = "<p>No blog found for this destination.</p>";
//       }
    // });
});
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const destination = urlParams.get("destination");
  if (destination) {
    document.getElementById("destination-name").innerText = destination;
  }

  document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const travelDate = document.getElementById("travel-date").value;
    const transportMode = document.getElementById("transport-mode").value;

    if (!travelDate) {
      alert("Please select a travel date.");
      return;
    }
    function handleBooking(event) {
      event.preventDefault();
  
      // Simulate a success/failure randomly
      const success = Math.random() > 0.3; // 70% chance of success
  
      if (success) {
        window.location.href = 'confirmation.html';
      } else {
        window.location.href = 'failure.html';
      }
  
      return false;
    }
  
    document.addEventListener("DOMContentLoaded", function() {
      const urlParams = new URLSearchParams(window.location.search);
      document.getElementById("destination").value = urlParams.get("destination");
    });
    
    // alert(`Booking Confirmed!\nDestination: ${destination}\nDate: ${travelDate}\nTransport: ${transportMode}`);
  });
});
