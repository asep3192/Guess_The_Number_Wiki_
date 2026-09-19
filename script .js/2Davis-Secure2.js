 function checkPassword() {
            var password = "pass"; // Set your password here
            var userInput = prompt("Please enter the password to view this page:");
    
            if (userInput === password) {
                // Password is correct, show the content
                document.getElementById("protectedContent").style.display = "block";
            } else {
                // Password is incorrect, redirect or show an error
                alert("Incorrect password. You will be redirected.");
                window.location.href = "index.html"; // Redirect to another page
            }
        }