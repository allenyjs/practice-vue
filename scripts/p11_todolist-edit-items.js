var app_p10 = new Vue({
    el:'#practice-10',
    data:{
        newTodoText:'',
        todoList:[{
            tId:'1',
            tContent:'default item',
            isChecked:false
        }],
        displayStatus:'allItems',
        tempTodo:{},
        tempContent:''
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
        },
        editStart:function(obj){
            this.tempTodo = obj;
            this.tempContent = obj.tContent;
        },
        editFinish:function(obj){
            obj.tContent = this.tempContent;
            this.tempTodo = {};
            this.tempContent = '';
        },
        editCancel:function(){
            this.tempTodo = {};
            this.tempContent = '';
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
        },
        filteredList:function(){
            switch(this.displayStatus) {
                case 'allItems':
                    return this.todoList;
                    break;
                case 'selectedItems':
                    return this.todoList.filter(x=>x.isChecked == true);
                    break;
                case 'unselectedItems':
                    return this.todoList.filter(x=>x.isChecked == false);
                    break;
            }
        
            
        }
    }
});