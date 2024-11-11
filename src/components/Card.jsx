export const Card = ({ title, price, img, desc, category }) => {
  return (
    <article className='menu-item'>
      <div>
        <img src={img} alt={title} className='img' />
      </div>
      <div className='item-info'>
        <header>
          <h5>{title}</h5>
          <span className='item-price'>${price}</span>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  );
};
