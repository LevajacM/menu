import { Button } from './Button';

export const Buttons = ({ buttons, filterCategory }) => {
  return (
    <div className='btn-container'>
      {buttons.map((item) => {
        return (
          <Button key={item} name={item} filterCategory={filterCategory} />
        );
      })}
    </div>
  );
};
