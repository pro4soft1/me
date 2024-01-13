<template>

  <!-- Header -->
  <header id="site_header" class="header">
    <div class="header-content clearfix">

      <!-- Text Logo -->
      <div class="text-logo">
        <nuxt-link to="/">

          <div class="logo-symbol">S</div>
          <div class="logo-text">Sayed <span>Mohamed</span></div>
        </nuxt-link>
      </div>
      <!-- /Text Logo -->

      <!-- Navigation -->
      <div class="site-nav mobile-menu-hide">
        <ul class="leven-classic-menu site-main-menu">
          <li class="menu-item  current-menu-item">
            <nuxt-link to="/">About Me</nuxt-link>
          </li>

          <li class="menu-item">
            <nuxt-link to="/resume">Resume</nuxt-link>
          </li>

          <li class="menu-item ">
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>

          </li>

          <li class="menu-item ">
            <nuxt-link to="/blog">Blog</nuxt-link>

          </li>

          <li class="menu-item">
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>

      <!-- Mobile Menu Toggle -->
      <a class="menu-toggle mobile-visible">
        <i class="fa fa-bars"></i>
      </a>
      <!-- Mobile Menu Toggle -->
    </div>
  </header>
  <!-- /Header -->
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
