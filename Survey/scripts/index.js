Vue.component('continue-question',{
    data:function(){
        return {
            timerSwitch2:'',
            questions2:[
                {key:1,content:'If you go to Taiwan you have many different type place option and you can choose which do you like',isShow:false},
                {key:2,content:'There are cities, villages, and natural landscapes here. &#x270C;',isShow:false},
                {key:3,content:'What kind of option do you like?',isShow:false},
            ],
            answers2:[
                {key:1,content:'Cities',isShow:false},
                {key:2,content:'Villages',isShow:false},
                {key:3,content:'Natural Landscapes',isShow:false},
                {key:4,content:'Food Paradise',isShow:false},
            ],
            viewTemplate2: 'YetSelected',
            showallen:false
        }
    },
    template:`<div>
        <div v-for="item in questions2" v-bind:class="'swell'" v-show="item.isShow">
        {{item.content}}
        </div>
        <a v-for="item in answers2" class="fadein btn btn2" v-bind:class="{'selected':item.isSelected}" v-on:click="answersAction2(item.key)" v-show="item.isShow" >{{item.content}}</a>
        <section>
            <component :is="viewTemplate2"></component>
        </section>
        <section v-show="showallen" class="showallen">
            <h2>Design by Allen</h2>
            <img src="./images/allen.gif" />
        </section>
    </div>`,
    methods:{
        msgpush2:function(){
            var Idx = this.questions2.findIndex(x => x.isShow==false);
            this.questions2[Idx].isShow = true;

            if(Idx>=this.questions2.length-1){
                clearInterval(this.timerSwitch2)

                this.answers2.forEach(element => {
                    element.isShow = true;
                });
            }
        },
        answersAction2:function(ansCode){
            var Idx;
            switch(ansCode){
                case 0:
                    this.viewTemplate2 = 'YetSelected';
                    Idx = this.answers2.findIndex(x => x.key==0);
                break;
                case 1:
                    this.viewTemplate2 = 'C';
                    Idx = this.answers2.findIndex(x => x.key==1);
                break;
                case 2:
                    this.viewTemplate2 = 'V';
                    Idx = this.answers2.findIndex(x => x.key==2);
                break;
                case 3:
                    this.viewTemplate2 = 'NL';
                    Idx = this.answers2.findIndex(x => x.key==3);
                break;
                case 4:
                    this.viewTemplate2 = 'FP';
                    Idx = this.answers2.findIndex(x => x.key==4);
                break;                 
            }
            this.answers2.forEach((element,index) => {
                if(index != Idx){
                    element.isShow = false;
                }else{
                    element.isSelected = true;
                }
            });
            this.showallen = true;
        }
    },
    mounted:function(){
        this.timerSwitch2 = setInterval(this.msgpush2, 1500);
    },
    computed:{
        btnWidth:function(){
            //return document.querySelector(".selected")[0].style.width;
            console.log('doc',document.querySelector(".selected")[0]);
            return 100;
        }
    },
    components: {
        YetSelected:{
            template: '<span></span>'
        },
        C: {
            template: '<p class="result h74">You can visit Taipei , Taichung or Kaohsiung</p>'
        },
        V:{
            template: '<p class="result h72">You can visit Yunlin or Chiayi</p>'
        },
        NL:{
            template: '<p class="result h74">You can visit Taitung, Sun Moon Lake or Cingjing Farm</p>'
        },
        FP:{
            template: '<p class="result h72">You can visit Yilan, Taichung or Tainan</p>'
        }
    }
});
var app = new Vue({
    el:'#app',
    data:{
        timerSwitch:'',
        questions:[
            {key:1,content:'Hi! Nice to meet you &#x26C5;',isShow:true},
            {key:2,content:'I have some questions',isShow:false},
            {key:3,content:'Do you want to go to Taiwan to Travel??',isShow:false},
        ],
        answers:[
            {key:1,content:'Yes',isShow:false,isSelected:false},
            {key:2,content:'No',isShow:false,isSelected:false},
        ],
        viewTemplate: 'Ans1NotYet'
    },
    methods:{
        msgpush1:function(){
            var Idx = this.questions.findIndex(x => x.isShow==false);
            this.questions[Idx].isShow = true;

            if(Idx>=this.questions.length-1){
                clearInterval(this.timerSwitch)

                this.answers.forEach(element => {
                    element.isShow = true;
                });
            }
        },
        answersAction:function(ansCode){
            var Idx;
            switch(ansCode){
                case 0:
                    this.viewTemplate = 'Ans1NotYet';
                break;
                case 1:
                    this.viewTemplate = 'Ans1Yes';
                    Idx = this.answers.findIndex(x => x.key==1);
                break;
                case 2:
                    this.viewTemplate = 'Ans1No';
                    Idx = this.answers.findIndex(x => x.key==2);
                break;              
            }
            this.answers.forEach((element,index) => {
                console.log(Idx);
                if(index != Idx){
                    element.isShow = false;
                }else{
                    element.isSelected = true;
                }
            });

            
        }
    },
    mounted:function(){
        this.timerSwitch = setInterval(this.msgpush1, 1500);
    },
    components: {
        Ans1NotYet:{
            template: '<span></span>'
        },
        Ans1Yes: {
            template: '<continue-question></continue-question>'
        },
        Ans1No:{
            template: '<p class="result h106"><a href="https://eng.taiwan.net.tw/">Why not? I think you need to go to Taiwan that because Taiwan is amazing beautiful island</a></p>'
        }
    }
});

