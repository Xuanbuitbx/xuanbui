function validateForm() {
    // Lấy các giá trị nhập vào
    var fullName = document.getElementById("full-name").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Kiểm tra tính đầy đủ các trường thông tin bắt buộc
    if (fullName === "" || gender === "" || email === "" || password === "") {
      alert("Nhập đầy đủ thông tin");
      return false;
    }
  
    // Nếu các trường thông tin bắt buộc đã nhập đủ, thông báo đăng ký thành công
    alert("Đăng ký thành công");
    return true;
  }
  