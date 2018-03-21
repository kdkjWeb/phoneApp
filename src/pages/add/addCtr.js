import scroll from 'better-scroll' //引用滚动插件
export default{
    data(){
        return {
            checkedNames: [],
            height: '',
            memberList: [],
            checkId: []
        }
    },
    methods:{
        //返回上级页面
        goBack(){
           this.$router.push({
               name: 'Sms'
           })
        },
        //点击选择每一个人
        check(item,index){
            //console.log(id)
            //this.checkedNames.push(item)
            let idIndex = this.checkId.indexOf(index)
            // console.log(idIndex)
             if (idIndex >= 0) {
                this.checkId.splice(index, 1,undefined);
                let userId = item.id;
                for(item in this.checkedNames){
                    if(this.checkedNames[item].id == userId){
                        this.checkedNames.splice(item,1)
                    }
                }
             } else {
                 var d = this.checkId;
                 d[index] = index;
                 this.checkId = JSON.parse(JSON.stringify(d));
                this.checkedNames.push(item)
             }
            
            //console.log(this.checkId)
            console.log(this.checkedNames)

        },
        //添加人员
        confirm(){
            console.log('添加人员')
            if(!this.checkedNames.length){
                this.$toast('你还没有选择人员！')
                return;
            }
            this.$router.push({
                name: 'Sms',
                params: this.checkedNames
            })
        },
        //取消按钮
        cancel(){
            console.log('取消')
            this.$router.push({
                name: 'Sms'
            })
        },
        //获取人员列表
        getUserList(){
            this.$post('user/selectMyUser',{
                pageNum: 0
            })
            .then(res=>{
                if(res.code == 0){
                    this.memberList = res.data.list;
                }
            },err=>{
                console.log(err)
            })
        }
    },
    created() {
		this.height = (window.innerHeight - 260) + 'px';
	},
    mounted(){
        //获取人员列表
        this.getUserList()

        // 监听窗口改变重置高度
        window.addEventListener('resize', () => {
            this.height = (window.innerHeight - 260) + 'px';
        })

        //给显示列表添加滚动效果
        this.$nextTick(()=>{
            if(!this.Scroll){
				this.Scroll = new scroll(this.$refs['content'],{
                    click: true,
                    bounce: false
				})
			}else{
				this.Scroll.refresh();
			}
        })
    }
}