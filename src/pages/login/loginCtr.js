import {has, getItem , setItem, removeItem} from '@/utils/localStorage'
export default{
    data(){
        return{
            user: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        //点击登录
        login(){
            //console.log(this.user.name,this.user.password)
            if(!this.user.name || !this.user.password){
				this.$toast('请输入用户名以及密码')
				return;
            }	
            
            this.$post('login',{
                username: this.user.name,
                password: this.user.password
            }).then(res=>{
                if(res.code == 0){
                  
                    //存入localStorage
					setItem({
						key: 'type',
						value: res.data.type
					})
                    this.$router.push('/index')

                }
                if(res.code == 500){
                    this.$toast(res.msg)
                }
            },err=>{
                this.$toast('网络异常！')
            })
        }
    }
}