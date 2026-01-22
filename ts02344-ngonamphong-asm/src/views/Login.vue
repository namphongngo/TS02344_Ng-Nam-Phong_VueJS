<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-5">

        <div class="card">
          <div class="card-body">

            <h5 class="mb-3 text-center">
              Form Đăng Nhập
            </h5>

            <form>
              <!-- EMAIL -->
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control mb-2"
                placeholder="Nhập email"
              >

              <!-- MẬT KHẨU -->
              <label class="form-label">Mật Khẩu</label>
              <input
                type="password"
                class="form-control mb-3"
                placeholder="Nhập mật khẩu"
              >

              <!-- NÚT ĐĂNG NHẬP -->
              <button class="btn btn-primary w-100">
                Đăng Nhập
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
