class QCLog{
    //构造函数
    constructor(env){
        this.env = env;
    }
    static getInstance(env){
        //判断时候已经new过一个实例
        if(!QCLog.instance){
            this.env = env;
            //若是这个唯一的实例不存在，就创建它
            QCLog.instance = new QCLog(env);
        }
        return QCLog.instance;
    }
    //对外方法
    log(data){
        console.log("this.env",this.env);
        if(this.env == "development"){
            console.log(data);
        }else{
            console.log("...");
        }
    }

}
export default QCLog;



/* let log = QCLog.getInstance("development");
log.log("1234556"); */