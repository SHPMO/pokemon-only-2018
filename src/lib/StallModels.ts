type Seller = {
  circle_description: string,
  circle_image: string,
  circle_name: string,
  id: number,
  items: number[],
  seller_id: string,
}

type Item = {
  authors: string,
  circle: string,
  content: string,
  cover_image: string,
  forto: string,
  introduction: string,
  is_restricted: string,
  is_started_with: string,
  item_id: string,
  item_pictures: string[],
  item_type: string,
  name: string,
  price: number,
  seller_id: number,
  url: string
}
