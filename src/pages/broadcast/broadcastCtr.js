
import scroll from 'better-scroll' //引用滚动插件
export default{
    data(){
        return{
            height: 0,
            broadcastList: []
        }
    },
    methods:{
        //点击查看新闻详情
        details(item){
            this.$router.push({
                name: 'Details',
                params: item
            })
        },
        //获取新闻列表
        getNewsList(){
            this.$get('news/selectMyNews',{
                pageNum: 0
            }).then(res=>{
                console.log(res)
                if(res.code == 0){
                    this.broadcastList = res.data.list
                }
            },err=>{
                this.$toast('网络异常！')
            })
        }
    },
    created() {
		this.height = (window.innerHeight - 161) + 'px';
	},
    mounted(){
        //获取新闻列表
        this.getNewsList()

        // 监听窗口改变重置高度
        window.addEventListener('resize', () => {
            this.height = (window.innerHeight - 161) + 'px';
        })
        //给显示列表添加滚动效果
        this.$nextTick(()=>{
            if(!this.Scroll){
				this.Scroll = new scroll(this.$refs['content'],{
					click: true
				})
			}else{
				this.Scroll.refresh();
			}
        })
    }
}