document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const formAlert = document.getElementById("formAlert");

  // Simple ahh client sided validation for username and password
  form.onsubmit = function (event) {
    const username = document.getElementById("username").value.trim();
    const pw = document.getElementById("pw").value.trim();

    if (username.length < 3 || pw.length < 8) {
      formAlert.classList.remove("d-none"); // Show alert if validation fails
      event.preventDefault(); // Prevent the form from submitting if validation fails
    } else {
      formAlert.classList.add("d-none"); // Hide alert if form is valid

      // Pass data through URL (just for simplicity hehe)
      window.location.href = `submissions.html?username=${encodeURIComponent(
        username
      )}&pw=${encodeURIComponent(pw)}`;
    }
  };

  // For submissions.html message display
  const param = new URLSearchParams(window.location.search);
  const submittedUsername = param.get("username");
  const submittedPw = param.get("pw");
  const message = document.getElementById("message");

  // da display messages and da hardcoded user and pass
  if (submittedUsername && submittedPw) {
    if (
      submittedUsername.toLowerCase() === "hokma" &&
      submittedPw === "hokmaballs"
    ) {
      message.innerHTML = "BALLS";
    } else {
      message.innerHTML = "Client-Sided Validation Worked!";
    }
  }
});
