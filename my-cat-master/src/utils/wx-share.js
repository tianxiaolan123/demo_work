import Vue from 'vue'
import wx from 'weixin-js-sdk'
import axios from 'axios'

let url = encodeURIComponent(window.location.href.split('#')[0])
axios({
  url: 'http://zhulichou.helloshi.com/index.php/api/index/getsdk',
  method: 'get',
  params: {
    url
  }
}).then(response => {
  let data = response.data
  if (data.code === 100) {
    wx.config({
      debug: false,
      appId: data.data.appid,
      timestamp: data.data.timestamp,
      nonceStr: data.data.noncestr,
      signature: data.data.signature,
      jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareQZone', 'onMenuShareWeibo']
    })
  } else {

  }
}).catch(error => {
  console.log(error)
})

export default function wxShare ({
  title,
  desc,
  timelineTitle,
  link,
  imgUrl,
  success,
  cancel
} = {}) {
  wx.ready(() => {
    wx.onMenuShareAppMessage({
      title: title || '默认title', // 分享标题
      desc: desc || window.location.href.split('#')[1], // 分享描述
      link: link ? link + '&from_=1' : window.location.origin + '/zlc/#/succor', // 分享链接
      imgUrl: imgUrl || '图标地址（必须是有效的Link）',
      success: success,
      cancel: cancel
    })
    wx.onMenuShareTimeline({
      title: timelineTitle || '默认分享文案', // 分享标题，由于分享到朋友圈没有desc，所以这里采用的策略是，指定的朋友圈分享标题优先，其次采用发送给朋友的描述，最后采用默认文案。
      link: link ? link + '&from_=2' : window.location.origin + '/zlc/#/succor', // 分享链接
      imgUrl: imgUrl || '图标地址（必须是有效的Link）',
      success: success,
      cancel: cancel
    })
    wx.onMenuShareQQ({
      title: title || '默认title', // 分享标题
      desc: desc || window.location.href.split('?')[1], // 分享描述
      link: link ? link + '&from_=3' : window.location.origin + '/zlc/#/succor', // 分享链接
      imgUrl: imgUrl || '图标地址（必须是有效的Link）', // 分享图标
      success: success,
      cancel: cancel
    })
    wx.onMenuShareQZone({
      title: title || '默认title', // 分享标题
      desc: desc || window.location.href.split('?')[1], // 分享描述
      link: link ? link + '&from_=4' : window.location.origin + '/zlc/#/succor', // 分享链接
      imgUrl: imgUrl || '图标地址（必须是有效的Link）', // 分享图标
      success: success,
      cancel: cancel
    })
    wx.onMenuShareWeibo({
      title: timelineTitle || desc || '默认分享文案', // 分享标题，由于分享到朋友圈没有desc，所以这里采用的策略是，指定的朋友圈分享标题优先，其次采用发送给朋友的描述，最后采用默认文案。
      link: link ? link + '&from_=5' : window.location.origin + '/zlc/#/succor', // 分享链接
      imgUrl: imgUrl || '图标地址（必须是有效的Link）', // 分享图标
      success: success,
      cancel: cancel
    })
  })
  wx.error((res) => {})
}
// 为Vue的原型对象添加该方法，则所有vue实例都能继承该方法
Vue.prototype.$wxShare = wxShare
