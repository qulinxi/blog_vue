<script setup>
import { defineProps, reactive, ref, shallowReactive } from 'vue';

</script>
<template>
    <div class="container">
        这是底部的导航栏
    </div>    
</template>
<style lang="less" scoped>
   .container{
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background-color: #e8e8e8;
   }
</style>
