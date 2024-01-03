$(function () {
          $("#header").load("/components/navbar.html");
          $("#footer").load("/components/footer.html");
          $("#subNavbar").load("/components/subNavbar.html");
          $("#banner").load("/components/banner.html");
          $("#products").load("/components/products.html");
        });




        function checkLogin() {
          var email = document.getElementById('exampleFormControlInput2').value;
          var password = document.getElementById('exampleFormControlInput1').value;
  
          if (email === 'admin@admin.com' && password === '123456') {
              alert('Login successful');
          } else {
              alert('Incorrect email or password');
          }
      }