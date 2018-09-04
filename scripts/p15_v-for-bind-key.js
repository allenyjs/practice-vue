//https://cn.vuejs.org/v2/guide/list.html#%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E7%9A%84-v-for

//https://cythilya.github.io/2017/04/27/vue-list-rendering/

/*
參考上方兩篇
當使用v-for 時會遇到一些問題
例如陣列資料異動但只有部分資料被更新
有部分HTML沒有被更新到
*/

var app_15 = new Vue({
    el:"#practice-15",
    data:{
        Drinks:[
            {
                Id:1,
                DrinksName:'BlackTea',
                Price:25
            },
            {
                Id:2,
                DrinksName:'GreenTea',
                Price:30
            },
            {
                Id:3,
                DrinksName:'MilkTea',
                Price:40
            },
        ]
    },
    methods:{
        ReverseArr:function(){
            this.Drinks.reverse();
        }
    }
});