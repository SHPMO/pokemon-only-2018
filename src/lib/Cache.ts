/* tslint:disable */
class Cache {
  public sellers: any
  public items: any
  public itemFetched: boolean
  public itemSellers: any

  constructor() {
    this.sellers = {}
    this.items = {}
    this.itemFetched = false
    this.itemSellers = {}
  }
}

export default new Cache()
