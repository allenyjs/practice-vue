var app_18 = new Vue({
    el:"#practice-18",
    data:{
        demo:"AAA",
        myResult:"Hello"
    },
    methods:{
        EffectOfWatch:function(){
            this.demo = "BBB";
        }
    },
    watch:{
        demo:function(){
            this.myResult = "等3秒";
            setTimeout(() => {
                this.myResult = "Hey"
            }, 3000);
        }
    }
});