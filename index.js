class QCLog{
    constructor(env){
        this.env = env;
    }
    static getInstance(env){
        if(!QCLog.instance){
            this.env = env;
            QCLog.instance = new QCLog(env);
        }
        return QCLog.instance;
    }
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