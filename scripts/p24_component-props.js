var drinkObj = {
    props:{
        drinkPrice:{
            type:Number,
            default:199
        }
    },
    template:"#DrinksTemplate",
    data: function () {
        return {
            newValue: this.drinkPrice
        }
    }
};
var app_24 = new Vue({
    el:"#practice-24",
    data:{
        dp:299
    },
    components:{
        "drinks-temp":drinkObj
    }
});