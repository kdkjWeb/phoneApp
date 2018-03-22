
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
            if(!this.user.oldPas || !this.user.newPas || !this.user.confirmPas){
                this.$toast('密码填写不完整！')
                return;
            }
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
        //点击清空按钮
        cancel(){
            this.user.oldPas = ''
            this.user.newPas = ''
            this.user.confirmPas = ''
        }
    }
}