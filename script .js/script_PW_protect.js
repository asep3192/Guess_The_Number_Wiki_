
//password = "2DAVIS";


//inputPassword = "";

//while (inputPassword != password) {
    
    
    if (confirm("WARNING: This page is Password Protected")) {

    }
    else
    {
        window.location.href="index.html"
    }

  //  if  (inputPassword == password) {
       
    //    alert(" Password Correct, please wait");
      //  break;
    //} else {
      //  alert("Password incorrect, Please try again :(");
       
    //}
//}
//}
    
body.style.removeProperty("display");


            if (userInput === password) {
                // Password is correct, show the content
                document.getElementById("protectedContent").style.display = "block";
            } else {
                // Password is incorrect, redirect or show an error
                alert("Incorrect password. You will be redirected.");
                window.location.href = "index.html"; // Redirect to another page
            }
        
        

//Password Prompt Code with Password
        const correctPassword = "000077101101112495051"; // Set your correct password here
        let failedAttempts = 0;
        const maxAttempts = 25;
        let enterKeyEnabled = true;

        $(document).ready(function() {
            const checkPassword = () => {
                const inputPassword = $("#password-input").val();
                if (checkPass(correctPassword)) {
                    $("#message").text("Password Correct ✔").addClass("correct");
                    $("#login-container").css({
                        transform: "translateY(-100vh)",
                        opacity: "0"
                    });
                    console.log("Showing")
                    document.getElementById("PageBar1").classList.remove("hidden")
                    document.getElementById("PageBar1").classList.add("shown")
                    document.getElementById("PageBar2").classList.remove("hidden")
                    document.getElementById("PageBar2").classList.add("shown")
                    document.getElementById("body2").classList.remove("hidden")
                    document.getElementById("body2").classList.add("shown")
                    document.getElementById("login-container").classList.remove("shown")
                    document.getElementById("login-container").classList.add("hidden")
                    document.getElementById("UnlockedPage").classList.add("shown")
                    document.getElementById("UnlockedPage").classList.remove("hidden")
                    setTimeout(() => {
                       // window.location.href = "SecretPage.html";
                    }, 500);
                } else {
                    failedAttempts++;
                    $("#message").text("Incorrect Password. Please try again.").removeClass("correct");

                    if (failedAttempts >= maxAttempts) {
                        $("#overlay").show();
                        $("#lockout-modal").show();
                    }
                }
            };

            $("#submit-btn").on("click", checkPassword);

            $("#password-input").on("keypress", function(event) {
                if (enterKeyEnabled && event.key === "Enter") {
                    checkPassword();
                }
            });

            $("#toggle-enter-btn").on("click", function() {
                enterKeyEnabled = !enterKeyEnabled;
                $(this).text(`Enter Key: ${enterKeyEnabled ? "On" : "Off"}`);
            });

            $("#exit-page-btn, #close-btn, #exit-btn").on("click", function() {
                window.close();
            });

            $("#toolbar-toggle").on("click", function() {
                $("#toolbar").toggle();
            });
        });
        function checkPass(code) {

let x = document.getElementById("password-input")

let store = ""

for (let i = 0; i < x.value.length; i++) {
    store += x.value.charCodeAt(i).toString()

    while (store.length % 3 != 0) {
        store = "0" + store;
    }

}


if (code == store.toString()) {
    return true
}
else {
    false;
}
}


function setPass(input) {


store = ""

for (i = 0; i < input.length; i++) {
    console.log(input.charCodeAt(i).toString())
    store += input.charCodeAt(i).toString()

    while (store.length % 3 != 0) {
        store = "0" + store;
        console.log(store)
    }

}


return store
}
