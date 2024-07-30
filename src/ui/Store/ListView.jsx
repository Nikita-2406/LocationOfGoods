export const ListView = (props) => {
  const items = props.items
  let view = []
  for (const item of items) {
    view.push(<>
      <article className="shop_item">
        <img src={item.img} alt="" className="pictr_list"/>
        <span className="name">{item.name}</span>
        <span className="color">{item.color}</span>
        <span className="price">{item.price}</span>
        <button className="button_list_cart"> ADD TO CART</button>
      </article>
    </>)
  }
  return (<>{view}</>
  )
}
