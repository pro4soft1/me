<template>
  <nuxt-layout :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <nuxt-page/>
  </nuxt-layout>
</template>
<script setup>
const {locale} = useI18n();
</script>

