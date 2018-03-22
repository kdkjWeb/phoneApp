export default{
    data(){
        return {
            artice: {},
            content: '',
            wid: 0
        }
    },
    methods:{
        //点击返回上一页
        goBack(){
            this.$router.go(-1)
        },
        //获取新闻详情
        getNewsList(){
            this.$get('news/getNewsById',{
                id: this.$route.params.id
            }).then(res=>{
                console.log(res.data.content)
                this.content = res.data.content
            },err=>{
                this.$toast('网络异常！')
            })
        }
    },
    mounted(){
        this.artice = this.$route.params
        this.getNewsList();
        this.wid = window.innerHeight;
    },
    updated(){
        var img = new Image();
        var len = this.$refs.contentBox.querySelectorAll("img");
        len.forEach((e)=>{
        img.src = e.src;
        // if(img.width >= this.wid) {
        //     e.style.width = "100%";
        // }
        var k = setInterval(()=>{
            if(img.width != 0 ) {
              if(img.width >= this.wid) {
                e.style.width = "100%";
              }else {
                e.style.width = img.width +"px";
              }
              clearInterval(k);
            }
          },0);
        });
    }
}