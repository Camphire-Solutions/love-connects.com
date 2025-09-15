// Upload profile picture
document.getElementById("photoUpload").addEventListener("change", function(event) {
  const reader = new FileReader();
  reader.onload = function() {
    document.getElementById("profile-photo").src = reader.result;

    // Save photo to localStorage
    localStorage.setItem("profilePhoto", reader.result);
  };
  reader.readAsDataURL(event.target.files[0]);
});

// Save profile details
document.getElementById("profileForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const lookingFor = document.getElementById("lookingFor").value;
  const city = document.getElementById("city").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const education = document.getElementById("education").value;
  const english = document.getElementById("english").value;
  const language = document.getElementById("language").value;

  // Update UI
  document.getElementById("username").innerText = name;
  document.getElementById("location").innerText = "📍 " + city;

  // Save data to localStorage
  const profileData = {
    name,
    gender,
    age,
    lookingFor,
    city,
    height,
    weight,
    education,
    english,
    language
  };

  localStorage.setItem("userProfile", JSON.stringify(profileData));

  alert("✅ Profile updated successfully!");
});

// Load profile if exists
window.addEventListener("DOMContentLoaded", () => {
  const savedProfile = localStorage.getItem("userProfile");
  const savedPhoto = localStorage.getItem("profilePhoto");

  if (savedProfile) {
    const data = JSON.parse(savedProfile);

    document.getElementById("username").innerText = data.name;
    document.getElementById("location").innerText = "📍 " + data.city;

    // Fill the form again
    document.getElementById("name").value = data.name;
    document.getElementById("gender").value = data.gender;
    document.getElementById("age").value = data.age;
    document.getElementById("lookingFor").value = data.lookingFor;
    document.getElementById("city").value = data.city;
    document.getElementById("height").value = data.height;
    document.getElementById("weight").value = data.weight;
    document.getElementById("education").value = data.education;
    document.getElementById("english").value = data.english;
    document.getElementById("language").value = data.language;
  }

  if (savedPhoto) {
    document.getElementById("profile-photo").src = savedPhoto;
  }
});
