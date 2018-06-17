function setCallback(req: XMLHttpRequest, callback: (data: any) => any,
                     errorCallback: (error: number, message: string) => any) {
  req.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText)
        if (response.error === 0) {
          callback(response.data)
        } else {
          if (errorCallback) {
            errorCallback(response.error, response.message)
          }
        }
      } else if (req.status === 404) {
        if (errorCallback) {
          errorCallback(404, 'not found')
        }
      } else {
        if (errorCallback) {
          errorCallback(req.status, '未知错误')
        }
      }
    }
  }
}

function requestStallAPI(apiname: string, data: any, callback: (data: any) => any,
                         errorCallback: (error: number, message: string) => any) {
  let url = 'https://www.getdaze.org/stall/api/' + apiname + '/'
  if (!data) {
    data = {}
  }
  data.pmo = 'pmo2017'
  url += '?' + Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&')
  const req = new XMLHttpRequest()
  req.open('GET', url)
  setCallback(req, callback, errorCallback)
  req.send()
}

export default {
  requestStallAPI
}