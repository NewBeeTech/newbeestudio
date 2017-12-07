import 'whatwg-fetch'

class TMNetEngine {
    constructor(){
        this.API_HOST = process.env.NODE_ENV === 'development' ? 'api2.baichebao.cn' : 'api.qcds.com';
        this.API_VERSION = 'api5.3';
        this.API_PREFIX = process.env.NODE_ENV === 'development' ?  'http://' :  'http://';
    }

    signPromise(param = {}){
        return new Promise((resolve, reject) => {
         window.TMAPP.mCallFunction('native_sign',param,cbData => {
             resolve(cbData);
         });
        });
    }

    async doSign(param = {}){
        let signParam = await this.signPromise(param);
        console.log('signParam',signParam);

        return signParam;
    }

    fetch(){
      console.log('fetch')
        let promi = new Promise((resolve,reject)=>{
         if(arguments.length > 1){
            arguments[0] = this.API_PREFIX + this.API_HOST + '/' + this.API_VERSION + '/' + arguments[0];
            let options = arguments[1];

            let paramObjs = JSON.parse(options.body);
            //let signObjs = this.doSign(paramObjs);
            
            this.signPromise(paramObjs).then((signObjs)=>{
            options.method = options.method !== undefined ? options.method : 'get';
            if(options.method.toLowerCase() === 'get'){
                //let json = JSON.parse(options.body);
                var getArgs = [];
                for (var key in signObjs) {
                    if (signObjs.hasOwnProperty(key)) {
                        var value = signObjs[key];
                        getArgs.push(key+"="+value);
                    }
                }
                //console.log('getArgs',getArgs);
                let argStr = getArgs.join("&");
                delete(options.body);
                arguments[0] = arguments[0] + "?&" + argStr;
            }

            let fetchProm = fetch.apply(null,arguments);
              console.log('url',arguments[0])
            fetchProm.then((response)=>{
                console.log('response',response);
                if(response.ok){
                    resolve(response.json());
                }else{
                    reject(new Error('error'));
                }
            },(err)=>{
                reject(err);
            });

            },(err)=>{});
         }

        });
        return promi;
    }    
}

export default TMNetEngine;