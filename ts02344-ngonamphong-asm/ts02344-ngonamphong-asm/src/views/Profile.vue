<template>
  <div class="container mt-4">
    <div class="row">

      <!-- ===== CỘT TRÁI: ẢNH + GIỚI THIỆU (LAB 1) ===== -->
      <aside class="col-md-4">
        <div class="card mb-3">
          <img
            :src="avatar"
            class="card-img-top"
            alt="Avatar"
          >
          <div class="card-body">
            <h5 class="card-title">Về tôi</h5>
            <p class="card-text">
              MR. Ngô Nam Phong – Lập Trình Viên.
            </p>
          </div>
        </div>
      </aside>

      <!-- ===== CỘT PHẢI: THÔNG TIN CÁ NHÂN ===== -->
      <div class="col-md-8">
        <h3 class="mb-3 text-center">
          Thông tin cá nhân
        </h3>

        <div class="card p-4">
          <div class="mb-3">
            <label class="form-label">Họ tên</label>
            <input
              type="text"
              class="form-control"
              value="Ngô Nam Phong"
            >
          </div>

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              value="phong@gmail.com"
            >
          </div>

          <div class="mb-3">
            <label class="form-label">Số Điện Thoại</label>
            <input
              type="text"
              class="form-control"
              value="0969270647"
            >
          </div>

          <div class="mb-3">
            <label class="form-label">Giới tính</label>
            <select class="form-select">
              <option selected>Nam</option>
              <option>Nữ</option>
              <option>Khác</option>
            </select>
          </div>


          <button class="btn btn-primary">
            Cập nhật
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import avatar from '../assets/avatar.png'
</script>
