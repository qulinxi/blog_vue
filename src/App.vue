<script setup>
import { computed, onMounted } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { reactive,ref } from 'vue';
import TopNav from './components/TopNav.vue';
import BottomNav from './components/BottomNav.vue';
</script>

<template>
  
  <TopNav></TopNav>  
  <RouterView></RouterView>
  <BottomNav></BottomNav>
 
</template>

<style scoped>

</style>
