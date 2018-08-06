var app_p1 = new Vue({
    el:"#practice-3",
    data:{
        userForm:{
            numberA:0,
            numberB:0,
            sumNumber:0
        }
    },
    methods:{
        FuncSumNumbers:function(){
            this.userForm.sumNumber = Number(this.userForm.numberA) + Number(this.userForm.numberB);
        }
    }
});