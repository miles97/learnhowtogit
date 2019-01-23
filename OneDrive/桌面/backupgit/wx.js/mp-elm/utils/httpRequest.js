function request (url, method, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data: params,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if(res.success == false) {
          reject(res.data.msg)
        }else{
          resolve(res.data)
        }
      },
      fail(rejection) {
        showToast('系统开小差了，请稍后再试')
        reject(rejection);
      }
    })
  })
}

function showToast(title) {
  wx.showToast({
    title,
    icon: 'none',
    duration: 2000,
  })
}

module.exports = {
  request
}