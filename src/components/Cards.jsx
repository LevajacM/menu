import { Card } from './Card';

export const Cards = ({ menuItems }) => {
  return (
    <div className='section-center'>
      {menuItems.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
};
