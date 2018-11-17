import * as Cookies from 'es-cookie'

import Cache from './Cache'

class API {

  public static getItem(itemId: string, force: boolean,
                        callback: (sellers: any) => any, errorCallback: (error: number, message: string) => any) {
    if (!force && itemId in Cache.items) {
      callback(Cache.items[itemId])
      return
    }
    API.requestStallAPI('get_item', {item_id: itemId}, item => {
      Cache.items[itemId] = item
      callback(item)
    }, errorCallback)
  }

  public static getItems(sellerId: string | null, force: boolean,
                         callback: (sellers: any) => any, errorCallback: (error: number, message: string) => any) {
    if (!force) {
      if (sellerId === null && Cache.itemsFetched) {
        callback(Cache.items)
        return
      } else if (sellerId !== null && sellerId in Cache.itemSellers) {
        const itemIds = Cache.itemSellers[sellerId]
        const items = {}
        itemIds.forEach((itemId: string) => items[itemId] = Cache.items[itemId])
        callback(items)
        return
      }
    }
    const data = sellerId === null ? null : {seller_id: sellerId}
    API.requestStallAPI('get_item', data, items => {
      for (const each in items) {
        if (isNaN(Number(each))) {
          continue
        }
        Cache.items[each] = items[each]
      }
      if (data === null) {
        Cache.itemsFetched = true
      } else {
        Cache.itemSellers[data.seller_id] = Object.keys(items)
      }
      callback(items)
    }, errorCallback)
  }

  public static getSeller(sellerId: string, force: boolean,
                          callback: (sellers: any) => any, errorCallback: (error: number, message: string) => any) {
    if (!force && sellerId in Cache.sellers) {
      callback(Cache.sellers[sellerId])
      return
    }
    API.requestStallAPI('get_seller', {seller_id: sellerId}, seller => {
      Cache.sellers[sellerId] = seller
      callback(seller)
    }, errorCallback)
  }

  public static getSellers(force: boolean,
                           callback: (sellers: any) => any, errorCallback: (error: number, message: string) => any) {
    if (!force && Cache.sellersFetched){
      callback(Cache.sellers)
      return
    }
    API.requestStallAPI('get_seller', null, sellers => {
      Cache.sellers = sellers
      Cache.sellersFetched = true;
      callback(sellers)
    }, errorCallback)
  }

  public static register(name: string, email: string, password: string,
                         callback: (message: string) => any) {
    // tslint:disable-next-line:no-console
    const req = new XMLHttpRequest()
    req.open('GET', 'https://www.getdaze.org/stall/api/test/?pmo=pmo2018')
    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          const csrfToken = Cookies.get('csrftoken')
          if (!csrfToken) {
            callback('注册失败')
            return
          }
          const req2 = new XMLHttpRequest()
          req2.open('POST', 'https://www.getdaze.org/stall/signup/')
          const formdata = new FormData()
          formdata.set('circle_name', name)
          formdata.set('csrfmiddlewaretoken', csrfToken)
          formdata.set('email', email)
          formdata.set('password', password)
          formdata.set('pmo', 'pmo2018')
          formdata.set('repassword', password)
          formdata.set('type', 'stall')
          req2.setRequestHeader('X-CSRFToken', csrfToken)
          req2.onreadystatechange = () => {
            if (req2.readyState === XMLHttpRequest.DONE) {
              if (req2.status === 200) {
                const res = JSON.parse(req2.responseText)
                if (res.error !== 0) {
                  callback('注册失败！' + (
                    res.error !== 1 ? res.message :
                      'email' in res.message ? '请输入正确的 Email' :
                        'password' in res.message ? '请输入至少 6 位的密码' : ''
                  ))
                } else {
                  callback('注册成功！请查收邮件。')
                }
              } else {
                callback('注册失败！')
              }
            }
          }
          req2.send(formdata)
        } else {
          callback('注册失败')
        }
      }
    }
    req.send()
  }

  public static requestStallAPI(apiname: string, data: any, callback: (data: any) => any,
                                errorCallback: (error: number, message: string) => any) {
    let url = 'https://www.getdaze.org/stall/api/' + apiname + '/'
    if (!data) {
      data = {}
    }
    data.pmo = 'pmo2018'
    url += '?' + Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&')
    const req = new XMLHttpRequest()
    req.open('GET', url)
    API.setCallback(req, callback, errorCallback)
    req.send()
  }

  public static setCallback(req: XMLHttpRequest, callback: (data: any) => any,
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
}

export default API
