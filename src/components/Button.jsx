export const Button = ({ name, filterCategory }) => {
  return (
    <button className='btn' onClick={() => filterCategory(name)}>
      {name}
    </button>
  );
};
