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
    log(){
        if(this.env == "development"){
            console.log(...arguments);
        }else{
            console.log("...");
        }
    }
}
export default QCLog; 



/* let log = QCLog.getInstance("development");
log.log("----",[1,2,3]);  */