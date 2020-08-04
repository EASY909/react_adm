import service from "src/utils/request.js";

/**
 * 登录接口
 */
export function Login(data) {
    return service.request({
        url: "/login/",
        method: "post",
        data
        // params:data
    })
}

/**
 * 获取验证码
 */
export function GetCode(data) {
    return service.request({
        url: "/getSms/",
        method: "post",
        data
        // params:data
    })
}

/***
 * 注册
 */
export function Register(data) {
    return service.request({
        url: "/register/",
        method: "post",
        data
        // params:data
    })
}