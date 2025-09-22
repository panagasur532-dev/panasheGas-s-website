window.onload = function() {
  alert("Hello, Welcome to my profile page!...Please fill the form below......Thank you");
};



const togglebtn = document.getElementById("toggleBtn");
const details = document.getElementById("details");
const nameValue = document.getElementById("name").value;
const emailValue = document.getElementById("email").value;

const occupationValue = document.getElementById("occupation").value ;
const numberValue = document.getElementById("number").value ;


toggleBtn.addEventListener("click", () => {
  if (details.style.display === "none") {
    details.style.display = "block";
    toggleBtn.textContent = "Hide Details";
  } else {
    details.style.display = "none";
    toggleBtn.textContent = "Show Details";
  }
}
);

let errors = [];

if (name.length < 2) {
    errors.push("Name must be at least 2 characters long.");
  }

  if (message.length < 10) {
    errors.push("Message must be at least 10 characters long.");
  }

  if (errors.length > 0) {
    alert("Form errors:\\n- " + errors.join("\\n- "));
  } else {
    alert("Form submitted successfully!");
    form.reset(); // clear fields
  };

const form = document.getElementById("profileform");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
})

 const mess = document.getElementById("message");
form.addEventListener("click", (e) => {
  Event.preventDefault();
  if (!nameInput.value.trim() || !contactInput.value.trim()) {
    alert("Please fill in all required fields.");
    return;
  }
  alert("Profile saved!");
});

