<template>
    <div>
        <h3>HomeContainer</h3>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,i) in lunbo" :key="i">
                <img :src="item.img" alt="没有获得图片">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return{
            lunbo:[],
        };
    },
    created(){
        this.getlunbo();
    },
    methods:{
        async getlunbo(){
            //获取轮播图的方法
           const{data} = await this.$http.get("/api/getlunbo");
           console.log(data);
           if(data.status ===0) 
           this.lunbo = data.message;
           console.log(this.lunbo);
        }
    },
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height:180px;
    .mint-swipe-item{
        img{
            width: 100%;
            height: 100%;
        }
        &:nth-child(1){
            background-color: red;
        };
        &:nth-child(2){
            background-color: pink;
        };
        &:nth-child(3){
            background-color: orange;
        }
    }
}
</style>