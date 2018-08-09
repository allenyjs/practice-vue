var app_p6 = new Vue({
    el:"#practice-6",
    data:{
        defaultNum1:3,
        defaultNum2:9
    },
    //不同於methods，computed比須回傳值且不須綁v-bind事件，當data被異動時自動觸發
    computed:{
        totalNum:function(){
            return this.defaultNum1*this.defaultNum2 ;
        }
    }
});