import service from "src/utils/request.js";

/**
 * 登录接口
 */
export function Login(data){
    service.request({
        url:"/login/",
        method:"post",
        data
        // params:data
    })
}