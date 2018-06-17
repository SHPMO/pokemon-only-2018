class Cache {
  public sellers: any
  public items: any
  public itemFetched: boolean
  public itemSellers: any

  constructor() {
    this.sellers = {
      // 99: {
      //   circle_description: '新社团！请多指教\r\n主要贩售PM相关角色的同人',
      //   circle_image: '/media/circle/2017/06/17/PMOlogo.jpg',
      //   circle_name: '杂货堆',
      //   id: 99,
      //   items: [567, 568, 569, 570, 715, 716, 717, 773],
      //   seller_id: '12'
      // },
      // '108': {
      //   'circle_description': '这是个自娱自乐的岩狗狗家痴汉',
      //   'circle_image': '/media/circle/2017/06/26/%E8%B4%B4%E7%BA%B8%E5%B2%A9%E7%8B%97.jpg',
      //   'circle_name': '岩狗狗窝',
      //   'id': 108,
      //   'items': [572, 589, 590, 591, 714],
      //   'seller_id': '24'
      // },
      // '109': {
      //   'circle_description': '依旧尽心尽力地提供力所能及的最好的沙奈朵——今年还有不少其他的宝可梦？',
      //   'circle_image': '/media/circle/2017/06/24/LOGO.jpg',
      //   'circle_name': '沙奈朵培育屋',
      //   'id': 109,
      //   'items': [665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686],
      //   'seller_id': '15'
      // },
      // '110': {
      //   'circle_description': '主要以卡洛斯为主的全题材创作同人摊位，以出售同人志为主',
      //   'circle_image': '/media/circle/2017/06/25/LOGO_NQVl9t3.jpg',
      //   'circle_name': '卡洛斯来客',
      //   'id': 110,
      //   'items': [585, 586, 587, 588],
      //   'seller_id': '20'
      // },
      // '111': {
      //   'circle_description': '旁友，队伍要伐拉？\r\n嘘，我这里有好东西哦，只要乃泥块\r\n\r\n我就是zlz',
      //   'circle_image': '/media/circle/2017/06/26/%E5%A4%A7%E5%93%A5%E9%83%BD%E4%BE%9D%E4%BD%A0.png',
      //   'circle_name': '很好干的八总临时买的摊',
      //   'id': 111,
      //   'items': [596, 597, 598, 599, 600, 601, 765, 766, 767, 768, 769, 770, 789],
      //   'seller_id': '22'
      // },
      // '112': {
      //   'circle_description': '去年的兔子布丁带了一窝毛绒来晒的就是我……这届改个比较痴汉（划掉）一目了然的名称。',
      //   'circle_image': '/media/circle/2017/06/28/%E5%88%86%E8%A3%85%E7%89%87.jpg',
      //   'circle_name': '冰布怎么能那么可爱',
      //   'id': 112,
      //   'items': [611, 621, 622, 623, 625, 626, 627, 628, 629],
      //   'seller_id': '19'
      // },
      // '113': {
      //   'circle_description': '去年的兔子布丁带了一窝毛绒来晒的就是我……这届改个比较痴汉（划掉）一目了然的名称。',
      //   'circle_image': '/media/circle/2017/06/28/%E5%88%86%E8%A3%85%E7%89%87.jpg',
      //   'circle_name': '冰布怎么能那么可爱',
      //   'id': 112,
      //   'items': [611, 621, 622, 623, 625, 626, 627, 628, 629],
      //   'seller_id': '19'
      // },
      // '114': {
      //   'circle_description': '去年的兔子布丁带了一窝毛绒来晒的就是我……这届改个比较痴汉（划掉）一目了然的名称。',
      //   'circle_image': '/media/circle/2017/06/28/%E5%88%86%E8%A3%85%E7%89%87.jpg',
      //   'circle_name': '冰布怎么能那么可爱',
      //   'id': 112,
      //   'items': [611, 621, 622, 623, 625, 626, 627, 628, 629],
      //   'seller_id': '19'
      // },
      // '115': {
      //   'circle_description': '去年的兔子布丁带了一窝毛绒来晒的就是我……这届改个比较痴汉（划掉）一目了然的名称。',
      //   'circle_image': '/media/circle/2017/06/28/%E5%88%86%E8%A3%85%E7%89%87.jpg',
      //   'circle_name': '冰布怎么能那么可爱',
      //   'id': 112,
      //   'items': [611, 621, 622, 623, 625, 626, 627, 628, 629],
      //   'seller_id': '19'
      // },
      // '116': {
      //   'circle_description': '去年的兔子布丁带了一窝毛绒来晒的就是我……这届改个比较痴汉（划掉）一目了然的名称。',
      //   'circle_image': '/media/circle/2017/06/28/%E5%88%86%E8%A3%85%E7%89%87.jpg',
      //   'circle_name': '冰布怎么能那么可爱',
      //   'id': 112,
      //   'items': [611, 621, 622, 623, 625, 626, 627, 628, 629],
      //   'seller_id': '19'
      // },
      // '117': {
      //   'circle_description': '去年的兔子布丁带了一窝毛绒来晒的就是我……这届改个比较痴汉（划掉）一目了然的名称。',
      //   'circle_image': '/media/circle/2017/06/28/%E5%88%86%E8%A3%85%E7%89%87.jpg',
      //   'circle_name': '冰布怎么能那么可爱',
      //   'id': 112,
      //   'items': [611, 621, 622, 623, 625, 626, 627, 628, 629],
      //   'seller_id': '19'
      // }
    }
    this.items = {}
    this.itemFetched = false
    this.itemSellers = {}
  }
}

export default new Cache()
