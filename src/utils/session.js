
export function getToken() {
    return sessionStorage.getItem("admin_toKen")
}

export function setToken(token) {
    sessionStorage.setItem("admin_toKen", token)
}
// export function removeToken(){
//     return Cookie.remove("admin_toKen")
// }

// export function setUserName(value){
//     return  Cookie.set("username",value)
// }

// export function getUserName(){
//     return  Cookie.get("username")
// }

// export function removeUserName(){
//     return  Cookie.remove("username")
// }
