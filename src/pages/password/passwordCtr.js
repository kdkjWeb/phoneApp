
export default{
    data(){
        return{
            user:{
                oldPas: '',
                newPas: '',
                confirmPas: ''
            }
        }
    },
    methods:{

        //点击确认按钮
        confirm(){
            //console.log(this.user.oldPas,this.user.newPas,this.user.confirmPas)
            this.$get('user/updatePwd',{
                newpwd: this.user.newPas,
                pwd: this.user.oldPas
            }).then(res=>{
                this.user.oldPas = '';
                this.user.newPas = '';
                this.user.confirmPas = '';
                if(res.code == 0){
                    this.$toast(res.msg)
                }
                if(res.code == 500){
                    this.$toast(res.msg)
                }
            },err=>{
                this.$toast('网络异常！')
            })
        },
        //点击取消按钮
        cancel(){
            console.log('点击了取消按钮')
        }
    }
}