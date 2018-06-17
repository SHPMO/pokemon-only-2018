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
      if (sellerId === null && Cache.itemFetched) {
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
        Cache.itemFetched = true
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
    if (!force && Object.keys(Cache.sellers).length > 0) {
      callback(Cache.sellers)
      return
    }
    API.requestStallAPI('get_seller', null, sellers => {
      Cache.sellers = sellers
      callback(sellers)
    }, errorCallback)
  }

  public static requestStallAPI(apiname: string, data: any, callback: (data: any) => any,
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
