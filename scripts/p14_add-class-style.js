var app_p2 = new Vue({
    el:"#practice-14",
    data:{
        ClassObject:{'bg-color':false,'border-bold':false},
        ClassArray:[],
        StyleObject:{'border-color':'#f16624','color':'#5920ff'},
        StyleObject2:{'font-weight': 'bold','border-radius': '6px'},
        StyleArray:[]
    },
    methods:{
        SwitchOfClass:function(){
            if(this.ClassArray.indexOf('border-bold')>-1){
                var Idx = this.ClassArray.findIndex(x => x=='border-bold');
                this.ClassArray.splice(Idx,1);
            }
            else{
                this.ClassArray.push('border-bold');
            }
        },
        SwitchOfStyle:function(){
            if(this.StyleArray.length<=0){
                this.StyleArray.push(this.StyleObject);
                this.StyleArray.push(this.StyleObject2);
            }
            else{
                this.StyleArray=[];
            }
        },

    }
});