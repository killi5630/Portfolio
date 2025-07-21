


    const user = "admin"
    const pass = "205125"

    function Log() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        console.log("username: " + username);
        console.log("password: " + password);


        if (user == username && pass == password) {
            console.log("Login is OK")

            window.location.href = "test.html";
        }
        else {
            console.log("Error 002")
        }
}

   
   
        
    


