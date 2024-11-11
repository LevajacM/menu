import { useState } from 'react';
import data from './data';
import { Buttons } from './components/Buttons';
import { Cards } from './components/Cards';
import { Title } from './components/Title';

const App = () => {
  const [menuItems, setMenuItems] = useState(data);

  const filterCategory = (c) => {
    if (c === 'all') {
      setMenuItems(data);
    } else {
      const newItems = data.filter((item) => item.category === c);
      setMenuItems(newItems);
    }
  };

  const buttons = ['all', ...new Set(data.map((item) => item.category))];

  return (
    <section className='menu'>
      <Title />
      <Buttons buttons={buttons} filterCategory={filterCategory} />
      <section className='section-center'>
        <Cards menuItems={menuItems} />
      </section>
    </section>
  );
};
export default App;
