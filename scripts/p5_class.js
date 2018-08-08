var app_p1 = new Vue({
    el:"#practice-5",
    data:{
        isFillColor:false
    },
    methods:{
        SetBgColor:function(){
            this.isFillColor= !this.isFillColor;
        }
    }
});