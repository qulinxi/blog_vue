<script setup>
import { defineProps, reactive, ref, shallowReactive } from 'vue';
import { Home,RocketSharp,VideocamSharp,LeafSharp } from "@vicons/ionicons5";
import { useRouter } from 'vue-router';
const  prop = defineProps({name:String,age:Number,subjects:Array})
const router = useRouter()
const nav = [
    {path:'/', name:'主页',icon:Home},
    {path:'/everyDay', name:'每日',icon:RocketSharp},
    {path:'/other', name:'其他',icon:VideocamSharp},
    {path:'/map', name:'地图',icon:LeafSharp}];
let navList = shallowReactive(nav)
let currentSelect = ref('主页') 
const go = (obj)=>{
    currentSelect.value = obj.name
    router.push(obj.path)
}
</script>
<template>
    <div class="container">
        
        <div @click="go(item)" :class="{link:true,active:currentSelect==item.name}" v-for="(item, index) in navList" :key="index">
            <n-icon size="28" :component="item.icon" />
            <span>{{item.name}}</span>
        </div>
    </div>    
</template>
<style lang="less" scoped>
    .container{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        height: 80px;
        padding-left: 8%;
        background-color: #e8e8e8;
        .link{
            width: 120px;
            color: #777;
            font-size: 16px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .active{
            color: #000;
        }
    }
</style>
