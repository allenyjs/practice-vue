var app_p4 = new Vue({
    el:"#practice-4",
    data:{
        doeventtext:"未觸發Enter，在此輸入任何值後按Enter"
    },
    methods:{
        FuncPressEnter:function(){
            alert("已按下Enter");
            this.doeventtext = "已按下Enter";
        }
    }
});