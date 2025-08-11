let cars = [
  {
    id: 1,
    make: "Maruti Suzuki",
    model: "Swift",
    year: 2023,
    price: 850000,
    mileage: 12000,
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Maruti-Swift-2011-2014/2522/front-left-side-47.jpg",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Manual",
    available: true,
  },
  {
    id: 2,
    make: "Hyundai",
    model: "Creta",
    year: 2022,
    price: 1500000,
    mileage: 8000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Creta/11434/1707294369951/225_Fiery-Red_c10b0b.jpg",
    type: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    available: true,
  },
  {
    id: 3,
    make: "Tata",
    model: "Nexon EV",
    year: 2024,
    price: 1600000,
    mileage: 4000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Tata/Nexon-EV/11117/1725003782910/Fearless-Purple_130d50.jpg",
    type: "SUV",
    fuel: "Electric",
    transmission: "Automatic",
    available: true,
  },
  {
    id: 4,
    make: "Kia",
    model: "Seltos",
    year: 2023,
    price: 1700000,
    mileage: 5000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Kia/Seltos-2023/8709/1688466916189/224_-Aurora-Black-Pearl_0f0f0f.jpg",
    type: "SUV",
    fuel: "Diesel",
    transmission: "Manual",
    available: true,
  },
  {
    id: 5,
    make: "Mahindra",
    model: "Thar",
    year: 2023,
    price: 1800000,
    mileage: 7000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Mahindra/Thar/6723/1723640626958/225_EverestWhite_e0e0de.jpg",
    type: "SUV",
    fuel: "Diesel",
    transmission: "Manual",
    available: true,
  },
  {
    id: 6,
    make: "Toyota",
    model: "Fortuner",
    year: 2023,
    price: 3800000,
    mileage: 10000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Toyota/Fortuner-Legender/10229/1686812131705/221_super-white_eeefef.jpg",
    type: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    available: true,
  },
  {
    id: 7,
    make: "Honda",
    model: "City",
    year: 2022,
    price: 1300000,
    mileage: 9000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Honda/City/9710/1677754515528/224_Meteroid-Grey-Metallic_39393b.jpg",
    type: "Sedan",
    fuel: "Petrol",
    transmission: "Manual",
    available: true,
  },
  {
    id: 8,
    make: "Skoda",
    model: "Slavia",
    year: 2023,
    price: 1500000,
    mileage: 3000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Skoda/Slavia/11810/1751874427447/Brilliant-Silver_989d97.jpg",
    type: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    available: true,
  },
  {
    id: 9,
    make: "MG",
    model: "Astor",
    year: 2022,
    price: 1400000,
    mileage: 6000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/MG/Astor/11413/1718186922255/226_DUAL-TONE-WHITE-&-BLACK_c4c7d1.jpg",
    type: "SUV",
    fuel: "Petrol",
    transmission: "Manual",
    available: true,
  },
  {
    id: 10,
    make: "Renault",
    model: "Kiger",
    year: 2022,
    price: 900000,
    mileage: 11000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Renault/Kiger/10042/1751374471872/Dual-tone_caspian-blue_0074b6.jpg",
    type: "Compact SUV",
    fuel: "Petrol",
    transmission: "Manual",
    available: true,
  },
  {
    id: 11,
    make: "Maruti Suzuki",
    model: "Brezza",
    year: 2023,
    price: 1200000,
    mileage: 3000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Maruti/Brezza/8679/Maruti-Brezza-Lxi/1656651893738/222_brave-khaki_897c5d.jpg",
    type: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    available: true,
  },
  {
    id: 12,
    make: "Hyundai",
    model: "i20",
    year: 2023,
    price: 1000000,
    mileage: 4000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Creta/8667/1741752768794/227_starry-night_000307.jpg",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Manual",
    available: true,
  },
  {
    id: 13,
    make: "Volkswagen",
    model: "Virtus",
    year: 2023,
    price: 1600000,
    mileage: 2000,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Volkswagen/Virtus/10617/1739606213770/carbon-steel-gray-matee.jpg",
    type: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    available: true,
  },
  {
    id: 14,
    make: "Tata",
    model: "Punch",
    year: 2024,
    price: 800000,
    mileage: 1500,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Tata/Punch/10681/1739271167873/Tropical-Mist_304056.jpg?tr=w-898",
    type: "Micro SUV",
    fuel: "Petrol",
    transmission: "Manual",
    available: true,
  },
  {
    id: 15,
    make: "Mahindra",
    model: "XUV700",
    year: 2024,
    price: 2500000,
    mileage: 3500,
    image:
      "https://stimg.cardekho.com/images/car-images/930x620/Mahindra/XUV700/11422/1719569943902/222_DeepForest_333a2e.jpg",
    type: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    available: true,
  },
];
localStorage.setItem("allCars", JSON.stringify(cars));


// Load cars on page load
document.addEventListener("DOMContentLoaded", function () {
  renderCars();
});


//for inventory
// 🧠 Render each car under the correct section
  document.addEventListener("DOMContentLoaded", function () {
    cars.forEach((car) => {
      const card = createCarCard(car);
      const containerId = getCategoryContainerId(car.type.toLowerCase());
      if (containerId) {
        document.getElementById(containerId).appendChild(card);
      }
    });
  });

  function createCarCard(car) {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
    <div class="card h-100 shadow">
      <img src="${car.image}" class="card-img-top" alt="${car.name}" style="height:200px; object-fit:cover;">
      <div class="card-body">
        <h5 class="card-title">${car.name}</h5>
        <p class="card-text"><strong>Price:</strong> ${car.price}</p>
      </div>
    </div>
  `;
    return col;
  }

  function getCategoryContainerId(type) {
    switch (type) {
      case "hatchback":
        return "hatchback-container";
      case "sedan":
        return "sedan-container";
      case "suv":
        return "suv-container";
      case "ev":
        return "ev-container";
      default:
        return null;
    }
  }


function renderCars() {
  const container = document.getElementById("inventory-container");
  container.innerHTML = "";
 // container.innerHTML="available-cars.html"

  cars.forEach((car) => {
    if (car.available) {
      const card = document.createElement("div");

      card.className = "col-md-4";
      card.innerHTML = `
                <div class="car-card">
                    <img src="${car.image}" alt="${car.year} ${car.make} ${
        car.model
      }" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${car.year} ${car.make} ${
        car.model
      }</h5>
                        <p class="card-text">
                            <i class="fas fa-tachometer-alt me-2"></i> ${car.mileage.toLocaleString()} kms<br>
                            <i class="fas fa-gas-pump me-2"></i> ${car.fuel}<br>
                            <i class="fas fa-cog me-2"></i> ${car.transmission}
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="price">₹${car.price.toLocaleString()}</span>
                            <button class="btn btn-sm btn-primary" onclick="viewCarDetails(${
                              car.id
                            })">
                                <i class="fas fa-eye me-1"></i> View
                            </button>
                        </div>
                    </div>
                </div>
            `;
      container.appendChild(card);
    }
  });
}


//
if (window.location.pathname.includes("car-details.html")) {
  const car = JSON.parse(localStorage.getItem("selectedCar"));
  if (car) {
    const container = document.getElementById("car-details");
    container.innerHTML = `
      <div class="card">
        <img src="${car.image}" class="card-img-top" alt="${car.make} ${
      car.model
    }">
        <div class="card-body">
          <h2 class="card-title">${car.year} ${car.make} ${car.model}</h2>
          <p class="card-text">
            <strong>Type:</strong> ${car.type}<br>
            <strong>Fuel:</strong> ${car.fuel}<br>
            <strong>Transmission:</strong> ${car.transmission}<br>
            <strong>Mileage:</strong> ${car.mileage.toLocaleString()} kms<br>
            <strong>Price:</strong> ₹${car.price.toLocaleString()}
          </p>
          <button class="btn btn-success">Buy Now</button>
          <a href="available-cars.html" class="btn btn-secondary ms-2">Back</a>
        </div>
      </div>
    `;
  } else {
    document.getElementById("car-details").innerHTML = `<p>Car not found.</p>`;
  }
}

function viewCarDetails(carId) {
  localStorage.setItem("selectedCarId", carId);
  window.location.href = "car-details.html";
}



//localStorage.setItem("Cars", JSON.stringify(Cars));

//to handle the form submission and add the new car to your cars array (or localStorage)
if (window.location.pathname.includes("sell-car.html")) {
  const sellForm = document.getElementById("sellCarForm");

  sellForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newCar = {
      id: Date.now(), // Unique ID
      make: document.getElementById("brand").value,
      model: document.getElementById("model").value,
      year: document.getElementById("year").value,
      fuel: document.getElementById("fuel").value,
      transmission: document.getElementById("transmission").value,
      mileage: parseInt(document.getElementById("mileage").value),
      price: parseFloat(document.getElementById("price").value),
      image: document.getElementById("image").value,
      type: "Used",
    };

    // Optional: Save to localStorage or push to cars[] if global
    let cars = JSON.parse(localStorage.getItem("cars") || "[]");
    cars.push(newCar);
    localStorage.setItem("cars", JSON.stringify(cars));

    alert("Car  details submitted successfully!");
    window.location.href = "index.html"; // Redirect to car listings
  });
}


// Auto-scroll slider
function loadFeaturedSlider() {
  const featuredSlider = document.getElementById("featuredSlider");
  if (!featuredSlider) return;

  const featuredCars = cars.slice(0, 10); // Limit for smoother scroll

  featuredCars.forEach((car) => {
    const card = document.createElement("div");
    card.className = "car-card mx-3 flex-shrink-0";
    card.style.width = "250px";
    card.innerHTML = `
      <div class="card h-100 shadow">
        <img src="${car.image}" class="card-img-top" style="height:160px; object-fit:cover;">
        <div class="card-body bg-black ">
          <h5 class="card-title">${car.make} ${car.model}</h5>
          
          <button class="btn btn-sm btn-primary" onclick="viewCarDetails(${car.id})">View</button>
        </div>
      </div>
    `;
    featuredSlider.appendChild(card);
  });

  // Auto-scroll effect
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 260; // Card width + margin
    if (scrollAmount >= featuredSlider.scrollWidth - featuredSlider.clientWidth) {
      scrollAmount = 0; // Reset scroll
    }
    featuredSlider.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }, 2500); // Adjust speed (ms)
}

// Only run this on index.html
if (window.location.pathname.includes("index.html")) {
  loadFeaturedSlider();
}


//search fuctionality
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-box input");
  const searchButton = document.querySelector(".search-box button");

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const matchingCars = cars.filter((car) => {
      return (
        car.make.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query) ||
        car.price.toString().includes(query)
      );
    });

    if (matchingCars.length === 0) {
      alert("Sorry, no matching car found. Please try another search.");
      return;
    }

    localStorage.setItem("searchResults", JSON.stringify(matchingCars));
    window.location.href = "search-results.html";
  });
});







if (window.location.pathname.includes("available-cars.html")) {
  const searchResults = JSON.parse(localStorage.getItem("searchResults"));

  if (searchResults && Array.isArray(searchResults)) {
    renderFilteredCars(searchResults);
  } else {
    renderCars(); // fallback if nothing found
  }

  function renderFilteredCars(filteredCars) {
    const container = document.getElementById("inventory-container");
    container.innerHTML = "";

    filteredCars.forEach((car) => {
      if (car.available) {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
          <div class="car-card">
              <img src="${car.image}" alt="${car.year} ${car.make} ${
          car.model
        }" class="card-img-top">
              <div class="card-body">
                  <h5 class="card-title">${car.year} ${car.make} ${
          car.model
        }</h5>
                  <p class="card-text">
                      <i class="fas fa-tachometer-alt me-2"></i> ${car.mileage.toLocaleString()} kms<br>
                      <i class="fas fa-gas-pump me-2"></i> ${car.fuel}<br>
                      <i class="fas fa-cog me-2"></i> ${car.transmission}
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                      <span class="price">₹${car.price.toLocaleString()}</span>
                      <button class="btn btn-sm btn-primary" onclick="viewCarDetails(${
                        car.id
                      })">
                          <i class="fas fa-eye me-1"></i> View
                      </button>
                  </div>
              </div>
          </div>
        `;
        container.appendChild(card);
      }
    });
  }
}



// User Authentication Functions
if (window.location.pathname.includes("auth.html")) {
  // Auth page specific code would go here
}

// Admin Dashboard Functions
if (window.location.pathname.includes("admin.html")) {
  // Admin page specific code would go here
}

// Save user to localStorage (for demo purposes)
function saveUser(username, password) {
  const user = { username, password };
  localStorage.setItem("currentUser", JSON.stringify(user));
}

// Get current user
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  alert("You've been logged out.");
  window.location.href = "auth.html?action=login";
}


//serarch button function
