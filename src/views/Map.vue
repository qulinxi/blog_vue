<template>
    <div class="container">
        <div class="content">
            <div id="map"></div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'



function initMap () { 
    var map = new BMap.Map("map", {coordsType: 5});          
    var point = new BMap.Point(109.72564, 28.28771);  
    map.centerAndZoom(point, 15);         
    // map.enableScrollWheelZoom(true);        
}
onMounted(() => {
    initMap()
})
</script>
<style lang="less" scoped>
.container{
    padding: 0 10%;
    margin: 0 auto;
    background-color: #f5f6f7;
    .content{
        background-color: #fff;
        padding: 5% 0;
        display: flex;
        justify-content: center;
        width: 100%;
        #map {
            width: 1000px;
            height: 700px;
        }
    }
    
}

</style>
