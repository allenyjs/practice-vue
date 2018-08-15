    var app = new Vue({
        el:"#app",
        data:{
            startX:0,
            endX:0,
            subjectsIndex:0,
            subjects:[
                {subjectName:"喜歡淡水嗎?", subType:"N"},
                {subjectName:"喜歡101嗎?", subType:"N"},
                {subjectName:"喜歡逢甲夜市嗎?", subType:"C"},
                {subjectName:"喜歡武陵農場嗎?", subType:"C"},
                {subjectName:"喜歡安平古堡嗎?", subType:"S"},
                {subjectName:"喜歡奇美博物館嗎?", subType:"S"},
                {subjectName:"喜歡伯朗大道嗎?", subType:"E"},
                {subjectName:"喜歡鐵花村嗎?", subType:"E"},
            ],
            Answers:{
                North:0,
                Central:0,
                South:0,
                East:0
            },
            
        },
        methods:{
            touchstartFunc:function(event){
                this.startX = event.changedTouches.item(0).clientX; 
            },
            touchendFunc:function(event){
                var offset = 100;//at least 100px are a swipe
        
                if(this.startX){
                //the only finger that hit the screen left it
                this.endX = event.changedTouches.item(0).clientX;
                    if(this.endX > this.startX + offset){
                    //a left -> right swipe
                        alert("Right-喜歡");
                        if((this.subjects.length-1) >= this.subjectsIndex ){
                            this.countAns(this.subjects[this.subjectsIndex].subType);
                            this.subjectsIndex = this.subjectsIndex+1;
                        }else{
                            alert(Math.max(this.Answers.North,this.Answers.Central,this.Answers.South,this.Answers.East));
                        }
                    }
                    if(this.endX < this.startX - offset ){
                    //a right -> left swipe
                        alert("Left-不喜歡");
                        if((this.subjects.length-1) >= this.subjectsIndex ){
                            this.countAns(this.subjects[this.subjectsIndex].subType);
                            this.subjectsIndex = this.subjectsIndex+1;
                        }else{
                            alert(Math.max(this.Answers.North,this.Answers.Central,this.Answers.South,this.Answers.East));
                        }
                        
                    }
                } 
            },
            countAns:function(xType){
                switch (xType) {
                    case "N":
                        this.Answers.North = this.Answers.North + 1;
                        break;
                    case "C":
                        this.Answers.Central = this.Answers.Central + 1;
                        break;
                    case "S":
                        this.Answers.South = this.Answers.South + 1;
                        break;
                    case "E":
                        this.Answers.East = this.Answers.East + 1;
                        break;
                }  
            }
        },
        computed:{
            currentSubject:function(){
                if((this.subjects.length-1) >= this.subjectsIndex ){
                    return this.subjects[this.subjectsIndex].subjectName ;
                }
                return "Finished ! 最高分" + Math.max(this.Answers.North,this.Answers.Central,this.Answers.South,this.Answers.East) ;
            }
        }

    });