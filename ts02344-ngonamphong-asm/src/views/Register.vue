<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">

        <div class="card">
          <div class="card-body">

            <h5 class="mb-3 text-center">
              Form Đăng Ký Thông Tin
            </h5>

            <form>
              <!-- HỌ TÊN -->
              <label class="form-label">Họ và Tên</label>
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Nhập họ và tên"
              >

              <!-- EMAIL -->
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control mb-2"
                placeholder="Nhập email"
              >

              <!-- SỐ ĐIỆN THOẠI -->
              <label class="form-label">Số Điện Thoại</label>
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Nhập số điện thoại"
              >

              <!-- MẬT KHẨU -->
              <label class="form-label">Mật Khẩu</label>
              <input
                type="password"
                class="form-control mb-2"
                placeholder="Nhập mật khẩu"
              >

              <!-- XÁC NHẬN MẬT KHẨU -->
              <label class="form-label">Xác Nhận Mật Khẩu</label>
              <input
                type="password"
                class="form-control mb-2"
                placeholder="Xác nhận mật khẩu"
              >

              <!-- GIỚI TÍNH -->
              <label class="form-label">Giới Tính</label><br>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                >
                <label class="form-check-label">Nam</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                >
                <label class="form-check-label">Nữ</label>
              </div>

              <br><br>

              <!-- NGÔN NGỮ -->
              <label class="form-label">Ngôn Ngữ</label>
              <select class="form-select mb-2">
                <option>Tiếng Việt</option>
                <option>English</option>
              </select>

              <!-- ĐIỀU KHOẢN -->
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                >
                <label class="form-check-label">
                  Tôi đồng ý với các điều khoản và điều kiện
                </label>
              </div>

              <!-- NÚT ĐĂNG KÝ -->
              <button class="btn btn-success w-100">
                Đăng Ký
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// Y1: chỉ cần giao diện, chưa xử lý logic
</script>
