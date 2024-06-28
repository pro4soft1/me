<template>

  <!-- Header -->
  <header id="site_header" class="header">
    <div class="header-content clearfix">

      <!-- Text Logo -->
      <div class="text-logo">
        <nuxt-link :to="localePath('/')">

          <div class="logo-symbol">S</div>
          <div class="logo-text">Sayed <span>Mohamed</span></div>
        </nuxt-link>
      </div>
      <!-- /Text Logo -->

      <!-- Navigation -->
      <div class="site-nav mobile-menu-hide">
        <ul class="leven-classic-menu site-main-menu">
          <li class="menu-item  current-menu-item">
            <nuxt-link :to="localePath('/')">{{$t('about_me')}}</nuxt-link>
          </li>

          <li class="menu-item">
            <nuxt-link :to="localePath('/resume')">{{$t('resume')}}</nuxt-link>
          </li>

          <li class="menu-item ">
            <nuxt-link :to="localePath('/portfolio')">{{$t('portfolio')}}</nuxt-link>

          </li>

          <li class="menu-item ">
            <nuxt-link :to="localePath('/blog')">{{$t('blog')}}</nuxt-link>

          </li>

          <li class="menu-item">
            <nuxt-link :to="localePath('/contact')">{{$t('contact')}}</nuxt-link>
          </li>

                <li class="menu-item langswitcher">

                  <lang-switcher/>
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
  name: "Header",

 }
</script>

<style scoped>

</style>
