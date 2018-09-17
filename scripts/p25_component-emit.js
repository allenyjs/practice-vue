var drinkObj = {
    props:{
        drinkPrice:{
            type:Number,
            default:3
        }
    },
    template:"#DrinksTemplate",
    data: function () {
        return {
            newValue: this.drinkPrice
        }
    },
    methods:{
        PlusPriceInCnpon:function(num){
            var addPrice = this.newValue * num;
            console.log(addPrice);
            this.$emit('plusfunc', Number(addPrice));
        }
    }
};
var app_25 = new Vue({
    el:"#practice-25",
    data:{
        dp:299
    },
    components:{
        "drinks-temp":drinkObj
    },
    methods:{
        PlusPrice:function(num){
            console.log("outside",num);
            this.dp = this.dp + num;
        }
    }
});