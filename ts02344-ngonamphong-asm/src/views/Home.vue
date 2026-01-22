<template>
  <!-- ===== CAROUSEL (LAB 3) ===== -->
  <div
    id="carouselExample"
    class="carousel slide mb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="banner1" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img :src="banner2" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img :src="banner3" class="d-block w-100" />
      </div>
    </div>
  </div>

  <!-- ===== NỘI DUNG LAB 4 ===== -->
  <div class="container">
    <h2 class="text-center mb-4">
      Kiến thức sức khỏe cộng đồng
    </h2>

    <div class="row">
      <div
        class="col-sm-4"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="card mb-3 h-100">
          <img :src="item.image" class="card-img-top" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content }}</p>

            <button class="btn btn-info mt-auto">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'

import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const items = [
  {
    title: '8 loại rau củ quả giàu canxi',
    content: 'Canxi giúp xương chắc khỏe và ngăn ngừa loãng xương.',
    image: img1
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content: 'Gừng, tỏi giúp tăng sức đề kháng cho cơ thể.',
    image: img2
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content: 'Đậu giàu protein, chất xơ và vitamin.',
    image: img3
  }
]
</script>
