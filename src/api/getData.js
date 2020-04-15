import Axios from 'axios'

//健康百科 get 
export const getHealth = function (yenum, tiaonum) {
  return Axios({
    url: 'http://tools.yufenghen.cn/mock/vueserver/getHealthList.php?page=' + yenum + '&pagesize=' + tiaonum
  })
}
//登录 post
export const getLogin = function (mobile, password) {
  let data = new URLSearchParams();
  data.append('mobile', mobile)
  data.append('password', password)
  return Axios({
    url: "http://tools.yufenghen.cn/mock/vueserver/login.php",
    method: 'post',
    data: data
  })
}
//获取验证码 get
export const getNoteCode = function (mobile) {
  return Axios({
    url: 'http://tools.yufenghen.cn/mock/vueserver/numcode.php?mobile=' + mobile
  })
}
//检查手机号是否存在 get
export const isMobile = function (mobile) {
  return Axios({
    url: 'http://tools.yufenghen.cn/mock/vueserver/checkphone.php?mobile=' + mobile
  })
}
// 注册接口:  post mobile=手机号 & password=密码
export const reg = function (mobile, password) {
  let data = new URLSearchParams();
  data.append('mobile', mobile)
  data.append('password', password)
  return Axios({
    url: 'http://tools.yufenghen.cn/mock/vueserver/reg.php',
    method: 'post',
    data: data
  })
}
// 根据登录的用户名手机号 获取挂号列表
export const getGuaHaoOrder = function (mobile) {
  return Axios({
    url: 'http://tools.yufenghen.cn/mock/vueserver/getGuaHaoListByLoginMobile.php?mobile=' + mobile
  })
}
//查询报告  get方式 name  patientid
export const getReport = function (name, patientid) {
  return Axios({
    url: 'http://tools.yufenghen.cn/mock/vueserver/getReport.php?name=' + name + '&patientid=' + patientid
  })
}
// 获取预约挂号里面科室的列表 get方式
export const getKeshi = function () {
  return Axios({
    url: 'http://tools.yufenghen.cn/mock/vueserver/getKeShiList.php'
  })
}
// get方式 请求医生列表   提交 page 和 pagesize 参数
export const getDoctorList = function (page, pagesize) {
  return Axios({
    url: 'http://tools.yufenghen.cn/mock/vueserver/getDoctorList.php?page=' + page + '&pagesize=' + pagesize
  })
}
// 根据医生获取挂号费  get方法 提交 doctorid 参数
export const getfee = function (id) {
  return Axios({
    url: 'http://tools.yufenghen.cn/mock/vueserver/getGuaHaoPrice.php?doctorid=' + id
  })
}
//预约挂号提交挂号人信息接口 get方式  
//参数格式: guahao={"name":"御风痕","gender":"男","cardID":"210503199610250362","mobile":"13812345678","des":"111111","time":"2019-07-07","keshi":"心胸外科","doctorId":"3","fee":120,"guaHaoMobile":"13812345678","doctorName":"陈医生"}
export const saveGuaHaoInfo = function (json) {
  /*  let data = new URLSearchParams();
   for (let key in json) {
     data.append(key, json[key])
   } */
  return Axios({
    url: 'http://tools.yufenghen.cn/mock/vueserver/saveGuaHaoInfo.php?guahao=' + json,
    // method: "post",
    // data: 'guahao=' + json
  })
}
