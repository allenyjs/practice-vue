Vue.component(
    "sample-temp",
    {
        props:{
            drinkPrice:{
                type:Number,
                default:199
            }
        },
        template:"#SampleTemplate",
        methods:{
            innerFunc:function(){
                alert("INNER");
                this.$emit("middleconn");
            }
        }
    }
);

var app_26 = new Vue({
    el:"#practice-26",
    data:{

    },
    methods:{
        outsideFunc:function(){
            alert("outsideFunc");
        }
    }

});