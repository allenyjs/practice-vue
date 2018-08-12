Vue.component('hello-sample',{
    data:function(){
        return {
            myMsg : "Hello!",
            userName:"Allen"
        }
    },
    template:`<div>
    <input type='text' v-model='userName'>
    {{ myMsg + userName }}
    <div>`
});
var app_p8 = new Vue({
    el:"#practice-8",
    data:{
        myMsg:"",
        userName:""
    },
});

