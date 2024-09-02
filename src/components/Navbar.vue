<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Electro Quéiro</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/cars">Cars</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/checkout">Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contactus">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin">Admin</a>
        </li>
      </ul>
    </div>
  </div>
</nav> -->

<!-- ============ HEADER =========== -->
<header class="header" id="header">
      <nav class="nav container">
        <a href="/" class="nav__logo">
          <i class="ri-steering-2-line"></i>
          Electro Quéiro
        </a>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="/" class="nav__link active-link">Home</a>
            </li>
            <li class="nav__item">
              <a href="/about" class="nav__link">About</a>
            </li>
            <li class="nav__item">
              <a href="/cars" class="nav__link">Cars</a>
            </li>
            <li class="nav__item">
              <a href="/checkout" class="nav__link">Cart</a>
            </li>
            <li class="nav__item">
              <a href="/contactus" class="nav__link">Contact Us</a>
            </li>
            <li class="nav__item">
              <a href="/admin" class="nav__link">Admin</a>
            </li>
          </ul>

          <div class="nav__close" id="nav-close">
            <i class="ri-close-line"></i>
          </div>
        </div>

        <!-- Toggle button -->
        <div class="nav__toggle" id="nav-toggle">
          <i class="ri-menu-line"></i>
        </div>
      </nav>
    </header>

</template>