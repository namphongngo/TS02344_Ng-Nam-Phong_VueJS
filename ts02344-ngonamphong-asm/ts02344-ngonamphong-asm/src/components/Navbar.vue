<template>
  <!-- NAVBAR – GIAO DIỆN LAB 1 -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light border">
    <div class="container">

      <!-- LOGO LAB 1 -->
      <a
        class="navbar-brand"
        href="#"
        @click.prevent="$emit('change-page','home')"
      >
        <img :src="logo" width="140" />
      </a>

      <!-- TOGGLER -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- MENU -->
      <div class="collapse navbar-collapse" id="menu">
        <!-- LEFT MENU -->
        <ul class="navbar-nav me-auto">

          <!-- HOME -->
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="$emit('change-page','home')"
            >
              Home
            </a>
          </li>

          <!-- POST -->
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="$emit('change-page','post')"
            >
              Post
            </a>
          </li>

          <!-- PROFILE -->
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="$emit('change-page','profile')"
            >
              Profile
            </a>
          </li>
        </ul>

        <!-- RIGHT BUTTON -->
        <div class="d-flex">
          <button
            class="btn btn-outline-dark me-2"
            @click="$emit('change-page','login')"
          >
            Login
          </button>

          <button
            class="btn btn-warning"
            @click="$emit('change-page','register')"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '../assets/logo-energy-pilates.png'
</script>
