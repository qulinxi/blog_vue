<script setup>
import { defineProps } from 'vue';
import { NButton } from 'naive-ui'
import {BalloonSharp,TimeSharp,SearchOutline,CaretBack,CaretForward} from '@vicons/ionicons5'
import { useRouter } from 'vue-router';

const  prop = defineProps({name:String,age:Number,subjects:Array})
const router = useRouter()
const goDetail = (id)=>{
    router.push('/home/'+id)
}     
</script>
<template>
    <div class="container">
        <div class="content">
            <div class="search">
                <n-input round placeholder="点击搜索" >
                    <template #prefix>
                        <n-icon size="18" :component="SearchOutline" />
                      </template>
                </n-input>
                <n-button type="info">
                    搜索
                  </n-button>
            </div>
            <div @click="goDetail(1)" class="note" v-for="(item, index) in 5" :key="index">
                <div  class="title">
                    <n-icon color="orange"  size="33">
                        <BalloonSharp></BalloonSharp>
                    </n-icon>
                    <span>标题</span>
                </div>
                <div class="text">
                    <p>
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                    </p>
                    <div>
                        <img src="https://pic3.zhimg.com/v2-58d652598269710fa67ec8d1c88d8f03_r.jpg?source=1940ef5c" alt="">
                    </div>
                </div>
                <div class="time">
                    <n-icon  size="20">
                        <TimeSharp></TimeSharp>
                    </n-icon>
                    <span>2023-04-13</span>
                    <div>
                        <n-tag type="success" :bordered="false">
                            java
                        </n-tag>
                        <n-tag type="warning" :bordered="false">
                            python
                        </n-tag>
                        <n-tag type="error" :bordered="false">
                            AI
                        </n-tag>
                    </div>
                </div>
            </div>
            <div class="page">
                <n-button secondary size="tiny"  type="info">
                    <n-icon  size="20">
                        <CaretBack></CaretBack>
                    </n-icon>
                    <span>上一页</span>
                  </n-button>
                <n-tag> 1 </n-tag>
                <n-button secondary  size="tiny" type="info">
                    <span>下一页</span>
                    <n-icon  size="20">
                        <CaretForward></CaretForward>
                    </n-icon>
                  </n-button>
               
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .container{
        padding: 0 10%;
        min-height: calc(100vh - 180px);
        background-color: #f5f6f7;
        .content{
            min-height: calc(100vh - 180px);
            background-color: #fff;
            padding: 30px;
            .search{
                display: flex;
                padding-bottom: 10px;
                border-bottom: 1px solid #dcd;
                .n-input{
                    width: 200px;
                }
                .n-button{
                    margin-left: 5px;
                }
            }
            .note{
                display: flex;
                flex-direction: column;
                width: 800px;
                .title{
                    padding-top: 10px;
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                    span{
                        margin-left: 5px;
                    }
                }
                
                .text{
                    display: flex;
                    padding-bottom: 5px;
                    color: gray;
                    p{
                        flex: 1;
                    }
                    div{
                        width: 180px;
                        height: 120px;
                        overflow: hidden;
                        margin-left: 5px;
                        img{
                            width: 180px;
                            height: 120px;
                        }
                        img:hover{
                            transform: scale(1.5);
                        }
                    }
                }
                .time{
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #dcd;
                    padding-bottom: 10px;
                    color: grey;
                    span{
                        margin-left: 5px;
                    }
                    .n-tag{
                        margin-left: 5px;
                    }
                    div{
                        margin-left: auto;
                    }
                }
            }
            .note:first-child{
            }
            .note{
                cursor: pointer;
            }
            .page{
                display: flex;
                align-items: center;
                margin-top: 8px;
                .n-icon{
                    cursor: pointer;
                }
                .n-tag{
                    margin: 0 5px;
                }
            }
        }
    }
</style>