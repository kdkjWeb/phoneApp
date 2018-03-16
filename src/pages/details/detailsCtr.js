export default{
    data(){
        return {

        }
    },
    methods:{
        //点击返回上一页
        goBack(){
            this.$router.go(-1)
        }
    }
}