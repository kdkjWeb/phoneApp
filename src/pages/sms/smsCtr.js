import {has, getItem , setItem, removeItem} from '@/utils/localStorage'
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
            isShow: '',
            height1: '',
            isShow: false,
            checkedNames: [],
            height2: '',
            memberList1: [],
            checkId: []
        }
    },
    methods: {
        //选择添加按钮
        add(){
            this.isShow = true
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
            if(getItem('type') == 0){
                this.$toast('你没有权限！')
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
            //调用发短信接口
            this.$post('message/sendMessage',{
                message: this.con,
                receiveList: arr.join()
            })
            .then(res=>{
                console.log(res)
                if(res.code == 0){
                    this.$toast('发送成功')
                    this.con = ''
                }
                if(res.code == 500){
                    this.$toast(res.msg)
                }
            }).catch(err=>{
                console.log(err)
            } 
            )
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
        //手动添加人员
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
        },

        //点击选择每一个人
        check1(item,index){
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

            this.memberList = this.checkedNames
            this.isShow = false
           
        },
        //取消按钮
        cancel(){
            console.log('取消')
            this.isShow = false
        },
        //获取人员列表
        getUserList(){
            if(getItem('type') == 0){
                return;
            }else{
                this.$post('user/selectMyUser',{
                    pageNum: 0
                })
                .then(res=>{
                    console.log(res)
                    if(res.code == 0){
                        this.memberList1 = res.data.list;
                    }
                    if(res.code == 500){
                        this.$toast(res.msg)
                    }
                },err=>{
                    console.log(err)
                })
            }
        }
    },
    created() {
        this.height = (window.innerHeight - 430) + 'px';
        this.height1 = window.innerHeight + 'px';
        this.height2 = (window.innerHeight - 260) + 'px';
	},
    mounted(){
      
        //获取所有人员列表
        this.getUserList()

        // 监听窗口改变重置高度
        window.addEventListener('resize', () => {
            this.height = (window.innerHeight - 430) + 'px';
            this.height1 = window.innerHeight + 'px';
            this.height2 = (window.innerHeight - 260) + 'px';
        })
        //给显示列表添加滚动效果
        this.$nextTick(()=>{
            if(!this.Scroll){
				this.Scroll = new scroll(this.$refs['content','contentList'],{
                    click: true,
                    bounce: false
				})
			}else{
				this.Scroll.refresh();
			}
        })
    }
}