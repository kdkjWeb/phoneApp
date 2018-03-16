import scroll from 'better-scroll' //引用滚动插件
export default{
    data(){
        return {
            value: '',
            height: '',
            memberList: []
            /*memberList: [{
                section: '传媒部部',
                job: '门管理员',
                name: '张三部门',
                phone: '15095982630'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982631'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982632'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982633'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            },{
                section: '传媒部',
                job: '员工',
                name: '张三',
                phone: '15095982634'
            }]*/
        }
    },
    methods:{
        //返回上级页面
        goBack(){
           // this.$router.go(-1)
           this.$router.push({
               name: 'Sms',
               query: '1'
           })
        },
        //点击选择每一个人
        check(index,item){
            this.value = index;
            console.log(item)
        },
        //添加人员
        confirm(){
            console.log('添加人员')
        },
        //取消按钮
        cancel(){
            console.log('取消')
        },
        //获取人员列表
        getUserList(){
            this.$get('user/selectMyUser',{
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