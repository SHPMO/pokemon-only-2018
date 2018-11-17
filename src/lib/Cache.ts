/* tslint:disable */
class Cache {
  public sellers: any
  public sellersFetched: boolean
  public items: any
  public itemsFetched: boolean
  public itemSellers: any

  constructor() {
    this.sellers = {}
    this.sellersFetched = false
    this.items = {}
    this.itemsFetched = false
    this.itemSellers = {}
  }
}

export default new Cache()
