document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  
  
    const form = document.getElementById("lead-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      let valid = true;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const country = document.getElementById("country").value;
  
      if (name === "" || email === "" || phone === "" || country === "") {
        alert("Please fill in all the fields.");
        valid = false;
      } else if (!/^[a-zA-Z ]{3,}$/.test(name)) {
        alert("Enter a valid name (at least 3 characters).");
        valid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Enter a valid email address.");
        valid = false;
      } else if (!/^\d{10,15}$/.test(phone)) {
        alert("Enter a valid phone number (10-15 digits).");
        valid = false;
      }
  
      if (valid) {
        setTimeout(() => {
          alert("Application Submitted Successfully!");
          form.reset();
        }, 500);
      }
    });
  });
  