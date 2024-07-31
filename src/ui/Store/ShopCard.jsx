export const ShopCard = (items) => {
    return items.map(item => <>
        <article className="shop_card">
          <div className="name">{item.name}</div>
          <div className="color">{item.color}</div>
          <img src={item.img} alt="" className="pictr_card"/>
          <div className="price">{item.price}</div>
          <button className="button_card_cart"> ADD TO CART</button>
        </article>
      </>)
}