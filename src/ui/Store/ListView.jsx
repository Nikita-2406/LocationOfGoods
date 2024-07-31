import { ShopItem } from "./ShopItem"

export const ListView = ({items}) => {
  // const items = props.items
  
  return (<>{ShopItem(items)}</>
  )
}
