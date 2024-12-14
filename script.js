function toggleMenu(){
    const nave =document.getElementById("novelists");
    nave.classList.toggle("active");
}

 function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

      if (name === "") {
        alert("Please enter your name.");
        return false; 
      }
      if (email === "") {
        alert("Please enter a email.");
        return false;
      }
      if (phone === "") {
        alert("Please enter your phone.");
        return false;
      }
    alert("Form submitted successfully!");
    return true;
  }