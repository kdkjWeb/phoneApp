import scroll from 'better-scroll' //引用滚动插件
export default{
    data(){
        return {
            notice: '限70字',
            height: '',
            con: '',
            member: '',
            userIndex: null,
            memberList: [],
            isShow: ''
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
    methods: {
        //选择添加按钮
        add(){
            console.log('你点击了添加按钮')
            this.$router.push('/add')
        },
        //删除人员按钮
        delete1(){
            console.log('你点击了删除人员按钮')
            console.log(this.userIndex)
             if(this.userIndex == null){
                 this.$toast('你还没有选择！')
                 return;
             }
            this.memberList.splice(this.userIndex,1);
            this.userIndex = null
        },
        //发送消息按钮
        send(){
            if(!this.con){
                this.$toast('你还没输入短信内容！')
                return;
            }
            
            //提取选择人员信息中的手机号
             let userPhone = this.memberList.map(({phone})=>{
                 return {phone}
             })
             //将所有人的手机号转换成字符串保存
            let arr = [];
            for(var i=0; i<userPhone.length; i++){
                arr.push(userPhone[i].phone)
            }
            console.log(arr.join())
        },
        //输入框的内容
        content(){
             let nMaxLen = this.$refs.con.getAttribute ? parseInt(this.$refs.con.getAttribute("maxlength")) : ""; 
     　　　　if(this.$refs.con.getAttribute && this.content.length > nMaxLen) { 
                this.content= this.content.substring(0, nMaxLen); 
     　　    }
            let num = this.con.length;
            this.notice = `还能输入${70-num}字`
        },
        //手动添加renyuan
        addMember(){
            if(!this.member || this.member.length!=11){
                this.$toast('电话号码输入错误！');
                return;
            }
            if(this.member && this.member.length == 11){
                this.memberList.unshift({
                    section: '暂无',
                    job: '暂无',
                    name: '暂无',
                    phone: this.member
                })
                this.member = '';
                this.$toast('操作成功！ ')
            }
        },
        //点击选择每一个人
        check(index,item){
            this.userIndex = index;
        }
    },
    created() {
		this.height = (window.innerHeight - 430) + 'px';
	},
    mounted(){
        //获取需要发送短信的人员
        
        this.memberList = this.$route.params

        // 监听窗口改变重置高度
        window.addEventListener('resize', () => {
            this.height = (window.innerHeight - 430) + 'px';
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