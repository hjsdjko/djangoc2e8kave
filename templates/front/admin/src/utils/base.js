const base = {
    get() {
        return {
            url : "http://localhost:8080/djangoc2e8kave/",
            name: "djangoc2e8kave",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宠物服务管理系统"
        } 
    }
}
export default base
