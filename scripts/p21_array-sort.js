var app_21 = new Vue({
    el:"#practice-21",
    data:{
        Drinks:[
            {
                Id:1,
                DrinksName:'BlackTea',
                Price:25
            },
            {
                Id:3,
                DrinksName:'MilkTea',
                Price:40
            },
            {
                Id:2,
                DrinksName:'GreenTea',
                Price:30
            },
            {
                Id:4,
                DrinksName:'OolongTea',
                Price:35
            },
            {
                Id:5,
                DrinksName:'FruitTea',
                Price:60
            },
        ],
        isDesc:false,
        currentSortItem:''
    },
    computed:{
        displayData:function(){
            var vm = this;
            if(!vm.isDesc){
                return vm.Drinks.sort(function(a,b){
                    //文字排序ASC
                    if(vm.currentSortItem=='DrinksName'){
                        return a[vm.currentSortItem].localeCompare(b[vm.currentSortItem]);
                    }
                    //數字排序ASC
                    return a[vm.currentSortItem] - b[vm.currentSortItem];
                });
            }

            return vm.Drinks.sort(function(a,b){
                //文字排序DESC
                if(vm.currentSortItem=='DrinksName'){
                    return b[vm.currentSortItem].localeCompare(a[vm.currentSortItem]);
                }
                //數字排序DESC
                return b[vm.currentSortItem] - a[vm.currentSortItem];
            });
        }
    }
});