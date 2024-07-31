export const ShopItem = (items) => {
    return items.map(item => <>
        <article className="shop_item">
          <img src={item.img} alt="" className="pictr_list"/>
          <span className="name">{item.name}</span>
          <span className="color">{item.color}</span>
          <span className="price">{item.price}</span>
          <button className="button_list_cart"> ADD TO CART</button>
        </article>
      </>)
}