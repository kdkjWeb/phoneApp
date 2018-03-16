
import scroll from 'better-scroll' //引用滚动插件
export default{
    data(){
        return{
            height: 0,
            broadcastList: []
            /*broadcastList: [
                {
                   id: '01',
                   title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                   time: '2018-12-20'
                },
                {
                    id: '02',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-21'
                 },
                 {
                    id: '03',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-22'
                 },
                 {
                    id: '04',
                    title: 'Vue所遇到的若干问题',
                    time: '2018-3-23'
                 },
                 {
                    id: '05',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-24'
                 },
                 {
                    id: '06',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-25'
                 },
                 {
                    id: '07',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-26'
                 },
                 {
                    id: '08',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-27'
                 },
                 {
                    id: '09',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-28'
                 },
                 {
                    id: '10',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-26'
                 },
                 {
                    id: '11',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-27'
                 },
                 {
                    id: '12',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-28'
                 },
                 {
                    id: '13',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-26'
                 },
                 {
                    id: '14',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-27'
                 },
                 {
                    id: '15',
                    title: 'Vue中使用better-scroll所遇到的若干问题Vue中使用better-scroll所遇到的若干问题',
                    time: '2018-3-28'
                 }
            ]*/
        }
    },
    methods:{
        //点击查看新闻详情
        details(){
            this.$router.push('/details')
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