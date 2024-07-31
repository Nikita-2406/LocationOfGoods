import { ShopCard } from "./ShopCard"

export const CardsView = ({cards}) => {
  
  return (<div className="module">{ShopCard(cards)}</div>
  )
}
