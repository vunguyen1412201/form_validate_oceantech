 var modal = document.getElementById("id01");

      // tat cua so
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      function pass() {
        document.getElementById("dangnhap").innerHTML = "Đăng nhập hệ thống";
      }

      var currentuser = "admin";
      var currentpass = "admin";
      function validate() {
        const user = document.getElementById("user").value;
        console.log(user);
        const pass = document.getElementById("pass").value;
        if (user.trim().length == 0) {
          document.getElementById("loiuser").innerHTML =
            "Vui long nhap Username";
        } else {
          document.getElementById("loiuser").innerHTML = "";
        }
        if (pass.trim().length == 0) {
          document.getElementById("loipass").innerHTML =
            "Vui long nhap Password";
        } else {
          document.getElementById("loipass").innerHTML = "";
        }
        if (user != currentuser && user != null) {
          document.getElementById("loiuser").innerHTML = "Sai Username";
        } else {
          document.getElementById("loiuser").innerHTML = "";
        }
        if (pass != currentpass && pass != null) {
          document.getElementById("loipass").innerHTML = "Sai Password";
        } else {
          document.getElementById("loipass").innerHTML = "";
        }
        if (true) {
          document.getElementById("dangnhap").innerText =
            "Đăng nhập thành công!!";
          document.getElementById("dangnhap").style.background = "antiquewhite";
          document.getElementById("close").click();
        }
      }
      // lam moi trang khi log va doi pass thanh cong
      function lammoi() {
        document.getElementById("fullname").value = "";
        document.getElementById("password").value = "";
        document.getElementById("oldpass").value = "";
        document.getElementById("newpass").value = "";
        document.getElementById("loipass").innerHTML = "";
        document.getElementById("loiuser").innerHTML = "";
        document.getElementById("loioldpass").innerHTML = "";
        document.getElementById("loinewpass").innerHTML = "";
        document.getElementById("tcong").innerHTML = "";
      }

      function loaddinga() {
        document.getElementById("loadding").innerHTML = "Loading...";
        setTimeout(function () {
          validate();
          document.getElementById("loadding").innerHTML = "Login";
        }, 1000);
      }

      function forgot() {
        lammoi();
        document.getElementById("login").style.display = "none";
        document.getElementById("save").style.display = "block";
        document.getElementById("tenform").style.innerHTML = "Member Login";
      }

      function validatenew() {
        const oldpass = document.getElementById("oldpass").value;
        const newpass = document.getElementById("newpass").value;
        if (oldpass.trim().length == 0) {
          document.getElementById("loioldpass").innerHTML =
            "Xin mời nhập mật khẩu cũ";
          return false;
        } else {
          document.getElementById("loioldpass").innerHTML = "";
        }
        if (oldpass != currentpass) {
          document.getElementById("loioldpass").innerHTML = "Sai mật khẩu cũ";
          return false;
        } else {
          document.getElementById("loioldpass").innerHTML = " ";
        }
        if (newpass.trim().length == 0) {
          document.getElementById("loinewpass").innerHTML =
            "Xin mời nhập mật khẩu mới";
          return false;
        } else {
          document.getElementById("loinewpass").innerHTML = "";
        }
        if (newpass == oldpass) {
          document.getElementById("loinewpass").innerHTML =
            "Mật khẩu mới phải khác mật khẩu cũ";
        } else {
          document.getElementById("loinewpass").innerHTML = "";
        }
        if (true) {
          currentpass = newpass;
          document.getElementById("tcong").innerHTML =
            "Bạn đã đổi mật khẩu thành công";
          document.getElementById("login").style.display = "block";
          document.getElementById("save").style.display = "none";
        }
      }