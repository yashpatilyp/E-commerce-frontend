$(function () {
          $("#header").load("/components/navbar.html");
          $("#footer").load("/components/footer.html");
          $("#subNavbar").load("/components/subNavbar.html");
          $("#banner").load("/components/banner.html");
          $("#products").load("/components/products.html");
        });




 
function checkLogin() {
    // Get values from email and password input fields
    var email = document.getElementById('exampleFormControlInput2').value;
    var password = document.getElementById('exampleFormControlInput1').value;

    // Check if email and password match a predefined admin login
    if (email === 'admin@admin.com' && password === '123456') {
        // Display a success message if login is successful
        alert('Login successful');
    } else {
        // Display an error message if login fails
        alert('Incorrect email or password');
    }
}




      