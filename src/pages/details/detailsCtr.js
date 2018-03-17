export default{
    data(){
        return {
            artice: {}
        }
    },
    methods:{
        //点击返回上一页
        goBack(){
            this.$router.go(-1)
        }
    },
    mounted(){
        this.artice = this.$route.params
    }
}