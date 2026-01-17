document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".btn-login").forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Đăng nhập thành công (demo)");
        });
    });

    document.querySelectorAll(".btn-register").forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Đăng ký thành công (demo)");
        });
    });

});
