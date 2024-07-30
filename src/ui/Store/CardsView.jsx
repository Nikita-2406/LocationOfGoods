export const CardsView = (props) => {
  const items = props.cards
  let view = []
  for (const item of items) {
    view.push(<>
      <article className="shop_card">
        <div className="name">{item.name}</div>
        <div className="color">{item.color}</div>
        <img src={item.img} alt="" className="pictr_card"/>
        <div className="price">{item.price}</div>
        <button className="button_card_cart"> ADD TO CART</button>
      </article>
    </>)
  }
  return (<div className="module">{view}</div>
  )
}
