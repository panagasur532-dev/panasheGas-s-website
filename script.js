window.onload = function() {
  alert("Hello, Welcome to my profile page!");
};
setTimeout(() => {
  alert("please fill in the form below");
}, 5000); // waits 5 seconds
setTimeout(() => {
  alert("Thanks for clicking!!");
}, 10000); // waits 10 seconds

const form = document.getElementById("profileForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!nameInput.value.trim() || !contactInput.value.trim()) {
    alert("Please fill in all required fields.");
    return;
  }
  alert("Profile saved!");
});
