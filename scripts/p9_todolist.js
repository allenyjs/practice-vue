var app_p9 = new Vue({
    el:'#practice-9',
    data:{
        newTodoText:'',
        todoList:[{
            tId:'1',
            tContent:'default item',
            isChecked:false
        }]
    },
    methods:{
        addTodoItem:function(){
            var newId = this.getMaxId + 1;

            if(!this.newTodoText.trim()){
                //空字串不要push直接return
                return;
            }
            this.todoList.push(
                {
                    tId:newId,
                    tContent:this.newTodoText,
                    isChecked:false
                }
            );
            
            this.newTodoText = '';
        },
        removeTodoItem:function(xId){
            var Idx = this.todoList.findIndex(x => x.tId==xId);
            this.todoList.splice(Idx,1);
        }
    },
    computed:{
        getMaxId:function(){
            var tIdArr = [];
            var maxId = 0;
            if(this.todoList.length>0){
                this.todoList.forEach(element => {
                    tIdArr.push(element.tId);
                });
                maxId = Math.max.apply(null,tIdArr);
            }
           return maxId;
        }
    }
});