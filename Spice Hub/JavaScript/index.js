// JavaScript to set the product descriptions
const descriptions = {
    item1: "Delicious and freshly baked pizza with a variety of toppings.",
    item2: "Savory noodles cooked to perfection with a choice of sauces.",
    item3: "Delicious and freshly baked pizza with a variety of toppings.",
    item4: "Crispy and golden French fries, a perfect side for any meal.",
  };
  
  // Add descriptions to the respective <p> tags
  for (const itemClass in descriptions) {
    const description = descriptions[itemClass];
    const item = document.querySelector(`.${itemClass}`);
    const descriptionTag = item.querySelector('p');
    descriptionTag.textContent = description;
  }

  //For Geo Location
  
  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const locationElement = document.getElementById("location");
    locationElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        locationElement.textContent = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        locationElement.textContent = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        locationElement.textContent = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        locationElement.textContent = "An unknown error occurred.";
        break;
    }
  }

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    locationElement.textContent = "Geolocation is not supported by your browser.";
  }