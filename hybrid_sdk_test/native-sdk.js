(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Hybrid Interaction Interface Params
 * @param {Object} param - Interface param
 * @param {("Web"|"Native")} param.origin - 標示呼叫 interface 的來源方
 * @param {String} param.uuid - 執行時產生的隨機 ID 
 * @param {String} param.name - 欲被呼叫執行的 Function Name
 * @param {Object} param.args - 欲被呼叫執行的 Function Name 需要傳入的參數資料
 * @param {String} [param.returnCode] - 被呼叫執行功能的執行結果代碼
 * @param {String} [param.returnMsg] - 被呼叫執行功能的執行結果訊息
*/

const VerifyCertificate = function(){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "verifyCertificate",
        "args": {}
    }
}

const GetAES256Key = function(){
    this.param = {
        "origin": "Web", 
        "name": "getAES256Key",
        "args": {
            "keySource": ""
        }
    }
}

const GetAES256Data = function(data, key, mode, padding){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "getAES256Data",
        "args": {
            "data": data,
            "key": key,
            "mode": mode,
            "padding": padding
        }
    }
}

const GetAES256DecryptData = function(data, key, mode, padding, iv) {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "getAES256DecryptData",
        "args": {
            "key": key,
            "mode": mode,
            "padding": padding,
            "iv": iv,
            "data": data
        }
    }
}

const GetRSAData = function(data, publicKey, padding) {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "getRSAData",
        "args": {
            data: data, publicKey: publicKey, padding: padding
        }
    }
}

const GetSHA256Data = function(data){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "getSHA256Data",
        "args": {
            "data": data
        }
    }
}

const Sha256Decrypt = function(encryptData){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "sha256Decrypt",
        "args": {
            "encryptData": encryptData
        }
    }
}

const SetStorageData = function(key, value){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "setStorageData",
        "args": {
            key: key,
            value: value
        }
    }
}

const GetStorageData = function(key){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "getStorageData",
        "args": {
            key: key
        }
    }
}

const SaveAlbumPhoto = function(photoBase64){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "saveAlbumPhoto",
        "args": {
            photo: photoBase64
        }
    }
}

const OpenPdfReader = function(documentType, fileSource, fileTitle){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "openPdfReader",
        "args": {
            "type": documentType,
            "data": fileSource,
            "title": fileTitle
        }
    }
}

const OpenWeb = function(url, type, data){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "openWeb",
        "args": {
            "url": url,
            "data": data,
            "type": type
        }
    }
}


const StartBarcodeScanner = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "startBarcodeScanner",
        "args": {
            "x": "",
            "y": "",
            "h": "",
            "W": "",
            "codeType":[]
        }
    }
}

const StopBarcodeScanner = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "stopBarcodeScanner"
    }
}

const CheckLocationSettingState = function(result) {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "checkLocationSettingState",
        "args": {
            "result": result
        }
    };
}

const PositionCoords = function(){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "getGeoLocation"
    }
}

const onAndroidBackPress = function(){
    this.param = {
        "origin": "Native",
        "uuid": "",
        "name": "onAndroidBackPress"
    }
}

const WebviewForeground = function(){
    this.param = {
        "origin": "Native",
        "uuid": "",
        "name": "webviewForeground"
    }
}

const WebviewBackground = function(){
    this.param = {
        "origin": "Native",
        "uuid": "",
        "name": "webviewBackground"
    }
}

const TerminateWebview = function(){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "terminateWebview"
    };
}

const TerminateApp = function(){
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "terminateApp"
    }
}

const CallPhone = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "callPhone",
        "args": {
            "phone":""
        }
    }
}

const ShareContent = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "shareContent"
    }
}

const DeviceInfo = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "deviceInfo"
    }
}

const NotificationInfo = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "notificationInfo"
    }
}

const DecodeBarcodePhoto = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "decodeBarcodePhoto",
        "args": {
            "data": "",
            "codeType": ["QRCode","Code128","Code39"]
        }
    }
}

const GetAlbumPhoto = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "getAlbumPhoto"
    }
}

const GetContactsInfo = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "getContactsInfo"
    }
}

const SetBrightness = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "setBrightness",
        "args": {
            "isAdjust": ""
        }
    }
}

const SetFlashlight = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "setFlashlight",
        "args": {
            "isEnable": ""
        }
    }
}

const GetAppValue = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "getAppValue",
        "args": {
            "key": ""
        }
    }
}

const SetAppValue = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "setAppValue",
        "args": {
            "key": "",
            "value": ""
        }
    }
}

const RequestPermission = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "requestPermission",
        "args": {
            "permission": [""]
        }
    }
}

const CheckPermission = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "checkPermission",
        "args": {
            "permission": [""]
        }
    }
}

const CheckNetworkStatus = function() {
    this.param = {
        "origin": "Web", 
        "uuid": "", 
        "name": "checkNetworkStatus"
    }
}

const Security = function(){}

Security.prototype = {
    verifyCertificate: new VerifyCertificate(),
    getAES256Key: new GetAES256Key(),
    getAES256Data: new GetAES256Data(),
    getAES256DecryptData: new GetAES256DecryptData(),
    getSHA256Data: new GetSHA256Data(),
    getRSAData: new GetRSAData()
}

const Storage = function(){}

Storage.prototype = {
    setStorageData: new SetStorageData(),
    getStorageData: new GetStorageData(),
    saveAlbumPhoto: new SaveAlbumPhoto(),
    getAlbumPhoto: new GetAlbumPhoto(),
    getContactsInfo: new GetContactsInfo(),
    getAppValue: new GetAppValue(),
    setAppValue: new SetAppValue()
}

const Reader = function(){}

Reader.prototype = {
    openPdfReader: new OpenPdfReader(),
    openWeb: new OpenWeb(),
    startBarcodeScanner: new StartBarcodeScanner(),
    stopBarcodeScanner: new StopBarcodeScanner(),
    decodeBarcodePhoto: new DecodeBarcodePhoto()
}

const GeoLocation = function(){}

GeoLocation.prototype = {
    getGeoLocation: new PositionCoords(),
    checkLocationSettingState: new CheckLocationSettingState()
}

const WebviewLifeCycle = function(){}

WebviewLifeCycle.prototype = {
    foreground: new WebviewForeground(),
    background: new WebviewBackground(),
    terminate: new TerminateWebview()
}

const AndroidDevice = function(){}

AndroidDevice.prototype = {
    onBackPress: new onAndroidBackPress()
}

const APPLifeCycle = function(){}

APPLifeCycle.prototype = {
    terminate: new TerminateApp()
}

const MessageSender = function(){}

MessageSender.prototype = {
    callPhone: new CallPhone(),
    shareContent: new ShareContent()
}

const APPSystem = function() {}

APPSystem.prototype = {
    deviceInfo: new DeviceInfo(),
    notificationInfo: new NotificationInfo(),
    setBrightness: new SetBrightness(),
    setFlashlight: new SetFlashlight(),
    requestPermission: new RequestPermission(),
    checkPermission: new CheckPermission(),
    checkNetworkStatus: new CheckNetworkStatus()
}

module.exports.Security = Security;
module.exports.Storage = Storage;
module.exports.Reader = Reader;
module.exports.GeoLocation = GeoLocation;
module.exports.WebviewLifeCycle = WebviewLifeCycle;
module.exports.AndroidDevice = AndroidDevice;
module.exports.APPLifeCycle = APPLifeCycle;
module.exports.MessageSender = MessageSender;
module.exports.APPSystem = APPSystem;
},{}],2:[function(require,module,exports){
(function (global){
const facade = require('./SDK-func-facade');
const Security = facade.Security;
const Storage = facade.Storage;
const Reader = facade.Reader;
const GeoLocation = facade.GeoLocation;
const WebviewLifeCycle = facade.WebviewLifeCycle;
const AndroidDevice = facade.AndroidDevice;
const APPLifeCycle = facade.APPLifeCycle;
const MessageSender = facade.MessageSender;
const APPSystem = facade.APPSystem;
const detectDevice = require('./device').detectDevice;
const uuid = require('./uuid').uuid;

/**
 * @typedef successCallback
 * @type {object}
 * @property {"Web"|"Native"} orign
 * @property {string} uuid
 * @property {string} name
 * @property {object} args
 * @property {string} returnCode
 * @property {string} returnMsg
 */
/**
 * @typedef errorCallback
 * @type {object}
 * @property {"Web"|"Native"} orign
 * @property {string} uuid
 * @property {string} name
 * @property {object} args
 * @property {string} returnCode
 * @property {string} returnMsg
 */
/**
 * 
 * @param {Object} [options]
 * @param {Object} options.execution
 */
var NativeSDK = function (options){
    this.callbackHandler = {};
    this.clientDevice = detectDevice();
    this.OS = this.clientDevice.OS;
    this.inHybridAPP = this.clientDevice.inHybridAPP;
    this.platform = this.clientDevice.platform;
}

NativeSDK.prototype = {
    execute: function(param, successCallback, errorCallback){
        return this.clientDevice.execute(this.setExecuteSetting(param, successCallback, errorCallback));
    },
    setoriginNativeHandler: function(handler){
        this.originNativeHandler = handler
    },
    getCallbackHandler: function(){
        return this.callbackHandler;
    },
    /**
     * Default Web Callback Handler
     * @param {Object} options - Interface param
     * @param {("Web")} options.origin - 標示呼叫 interface 的來源方
     * @param {String} options.uuid - 執行時產生的隨機 ID 
     * @param {String} options.name - 欲被呼叫執行的 Function Name
     * @param {Object} options.args - 欲被呼叫執行的 Function Name 需要傳入的參數資料 
     * @param {String} [options.returnCode] - 被呼叫執行功能的執行結果代碼
     * @param {String} [options.returnMsg] - 被呼叫執行功能的執行結果訊息
     */
    originWebCallback: function(options){
        const callbackSetting = this.callbackHandler[options.uuid];
        delete this.callbackHandler[options.uuid];
        switch(options.returnCode){
            case "0000":
                return callbackSetting.successCallback(options);
            default:
                return callbackSetting.errorCallback(options);
        }
    },
    /**
     * Default Native Execute Handler
     * @param {Object} options - Interface param
     * @param {("Native")} options.origin - 標示呼叫 interface 的來源方
     * @param {String} options.uuid - 執行時產生的隨機 ID 
     * @param {String} options.name - 欲被呼叫執行的 Function Name
     * @param {Object} options.args - 欲被呼叫執行的 Function Name 需要傳入的參數資料
     */
    originNativeHandler: function(options){
        switch(options.name){
            default:
                window[options.name](options);
        }
    },
     /**
     * 儲存使用者設定的 success, error Callback, 以便 native 執行完畢之後使用
     * @param {Object} executeParam 
     * @param {("Web"|"Native")} executeParam.origin - 標示呼叫 interface 的來源方
     * @param {String} executeParam.name - 欲被呼叫執行的 Function Name
     * @param {Object} executeParam.args - 欲被呼叫執行的 Function Name 需要傳入的參數資料
     * @callback successCallback 
     * @callback errorCallback
     * @returns {{origin: String, name: String, args:Object, uuid: String}} 將 executeParam 加上 uuid 後回傳   
     */
    setExecuteSetting: function(executeParam, successCallback, errorCallback){
        try{
            executeParam.uuid = executeParam.origin === "Web" ? uuid() : executeParam.uuid || uuid();
            this.callbackHandler[executeParam.uuid] = {
                uuid: executeParam.uuid,
                successCallback: successCallback,
                errorCallback: errorCallback
            };
        }catch(e){
            console.log("[exceptoion]", e);
        }
        return executeParam;
    },
    /**
     * Hybrid Interaction Interface for Native to Web
     * @param {Object} options - Interface param
     * @param {("Web"|"Native")} options.origin - 標示呼叫 interface 的來源方
     * @param {String} options.uuid - 執行時產生的隨機 ID 
     * @param {String} options.name - 欲被呼叫執行的 Function Name
     * @param {Object} options.args - 欲被呼叫執行的 Function Name 需要傳入的參數資料
     * @param {String} [options.returnCode] - 被呼叫執行功能的執行結果代碼
     * @param {String} [options.returnMsg] - 被呼叫執行功能的執行結果訊息
     */
    native2Web: function(options){
        switch(options.origin){
            case "Web":
                return this.originWebCallback(options)
            case "Native":
                return this.originNativeHandler(options);
        }
    },
    /**
     * @callback successCallback 
     * @callback errorCallback 
     */
     terminateApp: function(successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new APPLifeCycle().terminate.param), 
            successCallback, 
            errorCallback);
    },
    /**
     * 取得地理位置
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback 
     */
     getGeoLocation: function(successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new GeoLocation().getGeoLocation.param), 
            successCallback, 
            errorCallback);
    },
    /**
     * 開啟原生 PDF 瀏覽器
     * @param {Object} param
     * @param {String} param.type Document Type
     * @param {String} param.data File Source
     * @param {string} param.title File title
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     */
    openPdfReader: function(param, successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new Reader().openPdfReader.param, 
            {args:{ type: param.type, data: param.data, title: param.title}}), 
            successCallback, 
            errorCallback);
    },
    /**
     * 開啟外部瀏覽器
     * @param {Object} param 
     * @param {String} param.url URL Destonation
     * @param {String} param.type web view type
     * @param {String} param.data web query string 
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     */
    openWeb: function(param, successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new Reader().openWeb.param, 
            {args:{ url: param.url, type: param.type, data: param.data}}), 
            successCallback, 
            errorCallback);
    },
    /**
     * AES 加密
     * @param {Object} param 
     * @param {string} param.data 欲解密的字串
     * @param {string} param.key AES Key  
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback 
     */
    getAES256Data: function(param, successCallback, errorCallback){
        return this.execute(Object.assign({}, 
                new Security().getAES256Data.param, 
                {args:{ data: param.data, key: param.key, mode: param.mode, padding: param.padding}}
            ), 
            successCallback, 
            errorCallback);
    },
    /**
     * AES 解密
     * @param {Object} param 
     * @param {string} param.data 被加密的字串
     * @param {string} param.key AES Key  
     * @param {string} param.iv AES iv
     * @param {string} param.padding AES padding
     * @param {string} param.mode AES mode
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback 
     */
    getAES256DecryptData: function(param, successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new Security().getAES256DecryptData.param, 
            {args:{ data: param.data, key: param.key, iv: param.iv, padding: param.padding, mode: param.mode}}
        ), 
        successCallback, 
        errorCallback);
    },
    /**
     * AES256 Key 生成
     * @param {Object} param 
     * @param {string} param.keySource 生成 Key 的 passphrase
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback
     */
    getAES256Key: function(param, successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new Security().getAES256Key.param, 
                {args:{ keySource: param.keySource }}), 
            successCallback, 
            errorCallback);
    },
    /**
     * 憑證驗證
     * @param {Object} param 
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback 
     */
     verifyCertificate: function(successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new Security().verifyCertificate.param), 
            successCallback, 
            errorCallback);
    },
    /**
     * SHA256 加密
     * @param {Object} param 
     * @param {string} param.data 欲加密的字串
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback 
     */
    getSHA256Data: function(param, successCallback, errorCallback){
        return this.execute(
            Object.assign({}, new Security().getSHA256Data.param,  {args:{ data: param.data }}), 
            successCallback, 
            errorCallback);
    },
    /**
     * SHA256 解密
     * @param {Object} param 
     * @param {string} param.encryptData 被加密的字串
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback 
     */
    sha256Decrypt: function(param, successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new Security().sha256Decrypt.param, 
            {args:{ encryptData: param.encryptData }}), 
        successCallback, 
        errorCallback);
    },
    /**
     * webview 返回前景（Native觸發）
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback 
     */
    webviewForeground: function(successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new WebviewLifeCycle().foreground.param), 
            successCallback, 
            errorCallback);
    },
    /**
     * webview 退至背景（Native 觸發）
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback 
     */
    webviewBackground: function(successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new WebviewLifeCycle().background.param), 
            successCallback, 
            errorCallback);
    },
    /**
     * 暫停 Webview
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback 
     */
    terminateWebview: function(successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new WebviewLifeCycle().terminate.param), 
            successCallback, 
            errorCallback);
    },
    /**
     * Android back 鍵觸發事件
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback 
     */
    onBackPress: function(successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new AndroidDevice().onBackPress.param), 
            successCallback, 
            errorCallback);
    },
    /** save data to storage
     * @param {Object} param 
     * @param {String} param.key Storage Key
     * @param {*} param.value Storage Value
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     * @callback successCallback 
     * @callback errorCallback 
     */
     setStorageData: function(param, successCallback, errorCallback){
        return this.execute(Object.assign({}, 
                new Storage().setStorageData.param, 
                    {args:{ key: param.key, value: param.value}}), 
                successCallback, 
                errorCallback);
    },
    /** retrieve data from storage
    * @param {Object} param 
    * @param {String} param.key Key of Storage Data
    * @param {successCallback} successCallback 
    * @param {errorCallback} errorCallback 
    * @callback successCallback 
    * @callback errorCallback 
    */
    getStorageData:function(param, successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new Storage().getStorageData.param, 
            {args:{ key: param.key}}), 
            successCallback, 
            errorCallback);
    },
    /** retrieve data from storage
    * @param {Object} param 
    * @param {String} param.key Key of Storage Data
    * @param {successCallback} successCallback 
    * @param {errorCallback} errorCallback 
    * @callback successCallback 
    * @callback errorCallback 
    */
     saveAlbumPhoto:function(param, successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new Storage().saveAlbumPhoto.param, 
            {args:{ photo: param.photo}}), 
            successCallback, 
            errorCallback);
    },
    /** startBarcodeScanner 開始掃描 
     * @param {Object} param 
     * @param {string} param.x 掃描方框的起始 X 點
     * @param {string} param.y 掃描方框的起始 Y 點
     * @param {string} param.w 掃描方框的寬度
     * @param {string} param.h 掃描方框的高度
     * @param {Array<string>} param.codeType 掃描格式(注意：會有順序優先權)
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
    */
    startBarcodeScanner: function(param, successCallback, errorCallback){
        const reader = new Reader();
        return this.execute(Object.assign({}, 
            reader.startBarcodeScanner.param,{
                args: { 
                    x: param.x,
                    y: param.y,
                    w: param.w,
                    h: param.h,
                    codeType: param.codeType
                }
            }), successCallback, errorCallback);
    },
    /** stopBarcodeScanner 停止掃描 
     * @param {Object} param 
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
    */
     stopBarcodeScanner: function(successCallback, errorCallback){
        const reader = new Reader();
        return this.execute(Object.assign({}, 
            reader.stopBarcodeScanner.param), successCallback, errorCallback);
    },
    /**
     * 撥打電話
     * @param {object} param 
     * @param {string} param.phoneNumber 欲撥打的電話號碼
     * @param {successCallback} successCallback 
     * @param {errorCallback} errorCallback 
     */
    callPhone: function(param, successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new MessageSender().callPhone.param, 
            {args:{ phoneNumber: param.phoneNumber}}), 
            successCallback, 
            errorCallback);
    },
    /**
     * 分享內容
     * @param {*} param 
     * @param {*} successCallback 
     * @param {*} errorCallback 
     * @returns 
     */
    shareContent: function(param, successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new MessageSender().shareContent.param, 
            {args:{ type: param.type, content: param.content}}), 
            successCallback, 
            errorCallback);
    },
    /**
     * @deprecated 改由各專案實作
     */
    deviceInfo: function(successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new APPSystem().deviceInfo.param), 
            successCallback, 
            errorCallback);
    },
    /**
     * @deprecated 改由各專案實作
     */
    notificationInfo: function(successCallback, errorCallback){
        return this.execute(Object.assign({}, 
            new APPSystem().notificationInfo.param), 
            successCallback, 
            errorCallback);
    },
    /**
     * 將Barcode的圖片解析
     * @param {*} param 
     * @param {*} param.data 圖片	base64字串
     * @param {*} param.codeType 掃描格式 類型：QRCode、Code39、Code93、Code128
     * @param {*} successCallback 
     * @param {*} errorCallback 
     * @returns 
     */
    decodeBarcodePhoto: function(param, successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new Reader().decodeBarcodePhoto.param,
            {args: { data: param.data }}), 
            successCallback, 
            errorCallback);
    },
    /**
     * 取得相簿的圖片
     * @param {*} successCallback 
     * @param {*} errorCallback 
     * @returns 
     */
    getAlbumPhoto: function(successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new Storage().getAlbumPhoto.param), 
            successCallback, 
            errorCallback);
    },
    /**
     * 取得使用者聯絡人的資料
     * @param {*} successCallback 
     * @param {*} errorCallback 
     * @returns 
     */
    getContactsInfo: function(successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new Storage().getContactsInfo.param), 
            successCallback, 
            errorCallback);
    },
    /**
     * 將裝置螢幕亮度
     * @param {*} param 
     * @param {*} param.isAdjust  調整亮度	true：將亮度調整至Max, false：恢復原本螢幕亮度
     * @param {*} successCallback 
     * @param {*} errorCallback 
     * @returns 
     */
    setBrightness: function(param, successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new APPSystem().setBrightness.param,
            { args: { isAdjust: param.isAdjust}}), 
            successCallback, 
            errorCallback);
    },
    /**
     * 將裝置手電筒開啟
     * @param {*} param 
     * @param {*} param.isEnable 開啟/關閉手電筒	true：開啟, false：關閉
     * @param {*} successCallback 
     * @param {*} errorCallback 
     * @returns 
     */
    setFlashlight: function(param, successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new APPSystem().setFlashlight.param,
            { args: { isEnable: param.isEnable}}), 
            successCallback, 
            errorCallback);
    },
    /**
     * 詢問使用者是否同意權限
     * @param {*} param 
     * @param {*} param.permission  需詢問的權限 Location：地理位置, Contacts：聯絡人, Camera：相機, ReadSMS：讀取訊息(iOS無法讀取), SendSMS：發送訊息, Calendar：行事曆, Storage：Android的存取, Photo：iOS的存取相片, Notification：通知, CallPhone：撥打電話
     * @param {*} successCallback 
     * @param {*} errorCallback 
     * @returns 
     */
    requestPermission: function(param, successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new APPSystem().requestPermission.param,
            { args: { permission: param.permission}}), 
            successCallback, 
            errorCallback);
    },
    /**
     * 讀取APP參數
     * @param {*} param 
     * @param {*} param.key 由各專案自行判斷key, 例：DESkey
     * @param {*} successCallback 
     * @param {*} errorCallback 
     * @returns 
     */
    getAppValue: function(param, successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new Storage().getAppValue.param,
            { args: { key: param.key}}), 
            successCallback, 
            errorCallback);
    },
    /**
     * 設定APP之參數
     * @param {*} param 
     * @param {*} param.key 各專案自行判斷key,	例：DESkey
     * @param {*} param.value 需設定的資料	
     * @param {*} successCallback 
     * @param {*} errorCallback 
     * @returns 
     */
    setAppValue: function(param, successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new Storage().setAppValue.param,
            { args: { key: param.key, value: param.value}}), 
            successCallback, 
            errorCallback);
    },
    /**
     * 檢查使用者是否同意權限
     * @param {*} param 
     * @param {*} param.permission  需詢問的權限, Location：地理位置, Contacts：聯絡人, Camera：相機, ReadSMS：讀取訊息(iOS無法讀取), SendSMS：發送訊息, Calendar：行事曆, Storage：Android的存取, Photo：iOS的存取相片, Notification：通知, CallPhone：撥打電話
     * @param {*} successCallback 
     * @param {*} errorCallback 
     * @returns 
     */
    checkPermission: function(param, successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new APPSystem().checkPermission.param,
            { args: { permission: param.permission}}), 
            successCallback, 
            errorCallback);
    },
    /**
     * @deprecated 已棄用
     */
    checkLocationSettingState: function(successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new GeoLocation().checkLocationSettingState.param), 
            successCallback, 
            errorCallback);
    },
    /**
     * 取得RSA加密資料
     * @param {*} param 
     * @param {*} param.publicKey RSA加密的publicKey
     * @param {*} param.padding 解密的填充格式
     * @param {*} param.data 解密的資料
     * @param {*} successCallback 
     * @param {*} errorCallback 
     * @returns 
     */
    getRSAData: function(param, successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new Security().getRSAData.param,
            { args: { publicKey: param.publicKey, padding: param.padding, data: param.data}}), 
            successCallback, 
            errorCallback);
    },
    checkNetworkStatus: function(successCallback, errorCallback) {
        return this.execute(Object.assign({}, 
            new APPSystem().checkNetworkStatus.param), 
            successCallback, 
            errorCallback);
    }
}
global.NativeSDK = NativeSDK;
module.exports.NativeSDK = NativeSDK;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./SDK-func-facade":1,"./device":3,"./uuid":4}],3:[function(require,module,exports){
/** iOS */        
function iOSBrowser(){
    this.OS = "iOS";
    this.platform = "browser";
    this.inHybridAPP = isInHybridApp();
    this.execute = function(params){
        if(window[params.name]) {
            window[params.name](params);
        } else { 
			document.getElementById('openWeb-result').innerText = `[Hybrid-SDK] 執行錯誤：${params.name} 未定義`;
            console.error(`[Hybrid-SDK] 執行錯誤：${params.name} 未定義`); 
        }
        return params;
    }
}
/** iOS App */
function iOSApp(){
    this.OS = "iOS";
    this.platform = "app";
    this.inHybridAPP = isInHybridApp();
    this.execute = function(params){
        try{
            window.webkit.messageHandlers.mobile.postMessage(params);
        }catch(exception) {
			document.getElementById('openWeb-result').innerText = '[Hybrid-SDK: execute] 執行錯誤：';
            console.error('[Hybrid-SDK: execute] 執行錯誤：');
        }
        return params;
    }
}

/** Android */
function AndroidBrowser(){
    this.OS = "Android";
    this.platform = "browser";
    this.inHybridAPP = isInHybridApp();
    this.execute = function(params){
        try{
            window[params.name](params);
        }catch(exception){
			document.getElementById('openWeb-result').innerText = `[Hybrid-SDK: execute] 執行錯誤：window.${params.name}`;
            console.error(`[Hybrid-SDK: execute] 執行錯誤：window.${params.name}`, exception);
        }
        return params;
    }
}

/** Android App*/
function AndroidApp(){
    this.OS = "Android";
    this.platform = "app";
    this.inHybridAPP = isInHybridApp();
    this.execute = function(params){
        try {
            window.mobile.postMessage(JSON.stringify(params));
        } catch(exception) {
			document.getElementById('openWeb-result').innerText = '[Hybrid-SDK] 執行錯誤app：'+exception+","+JSON.stringify(params);
            console.error('[Hybrid-SDK] 執行錯誤：', exception);
        }
        return params;
    }
}

/** Web Browser */
function WebBrowser(){
    this.OS = "WebBrowser";
    this.platform = "browser";
    this.inHybridAPP = false;
    this.execute = function(params){
        try{
            window[params.name](params);
        }catch(exception) {
			document.getElementById('openWeb-result').innerText = `[Hybrid-SDK: execute] 執行錯誤：${params.name}`;
            console.error(`[Hybrid-SDK: execute] 執行錯誤：${params.name}`, exception);
        }
        return params;
    }
}

function MacWebBrowser(){
    this.OS = "OSX";
    this.platform = "browser";
    this.inHybridAPP = false;
    this.execute = function(params){
        try{
            window[params.name](params);
        }catch(exception) {
			document.getElementById('openWeb-result').innerText = `[Hybrid-SDK: execute] 執行錯誤：${params.name}`;
            console.error(`[Hybrid-SDK: execute] 執行錯誤：${params.name}`, exception);
        }
        return params;
    }
}

function WinWebBrowser(){
    this.OS = "Windows";
    this.platform = "browser";
    this.inHybridAPP = isInHybridApp();
    this.execute = function(params){
        try{
            window[params.name](params);
        }catch(exception) {
			document.getElementById('openWeb-result').innerText = `[Hybrid-SDK: execute] 執行錯誤：${params.name}`;
            console.error(`[Hybrid-SDK: execute] 執行錯誤：${params.name}`, exception);
        }
        return params;
    }
}

function detectDevice(){
    if(isiOS() && isInHybridApp()){
        return new iOSApp();
    }
    
    if(isiOS() && !isInHybridApp()){
        return new iOSBrowser();
    }

    if(isAndroid() && isInHybridApp()){
        return new AndroidApp();
    }

    if(isAndroid() && !isInHybridApp()){
        return new AndroidBrowser();
    }

    if(isWindows()){
        return new WinWebBrowser();
    }

    if(isMac()){
        return new MacWebBrowser();
    }

    if(!isMac() && !isWindows()){
        console.log("not in front device");
    }
}

function isiOS(){
    return isiPhone() || isiPad()
}

function isWindows(){
    const userAgent = window.navigator.userAgent.toLowerCase();
    return userAgent.indexOf('windows') !== -1;
}

function isiPhone(){
    const userAgent = window.navigator.userAgent.toLowerCase();
    return !isWindows() && userAgent.indexOf('iphone') !== -1;
}

function isiPad(){
    const userAgent = window.navigator.userAgent.toLowerCase();
    return userAgent.indexOf('ipad') !== -1 || 
    (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)
}

function isMac(){
    const userAgent = window.navigator.userAgent.toLowerCase();
    return userAgent.indexOf('mac') ||userAgent.indexOf('Mac');
}

function isAndroid(){
    const userAgent = window.navigator.userAgent.toLowerCase();
    return !isWindows() && userAgent.indexOf('android') !== -1;
}

function isInHybridApp(){
    const userAgent = window.navigator.userAgent.toLowerCase();
    return userAgent.indexOf("in_hybrid_app") !== -1;
}

module.exports.detectDevice = detectDevice;
},{}],4:[function(require,module,exports){
/** 產生 UUID */
function uuid() {
    var d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
module.exports.uuid = uuid;

},{}]},{},[2]);
