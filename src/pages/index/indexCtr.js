export default{
    data(){
        return {
            index: '0'
        }
    },
    methods: {
        //点击最新播报
        news(){
            //console.log(44)
            this.$router.push('/broadcast');
            this.index = 0;
        },
        //点击发送消息
        send(){
            // console.log(55)
            this.$router.push('/sms');
            this.index = 1;
        },
        //点击修改密码
        change(){
            this.$router.push('/password');
            this.index = 2;
        }
    }
}