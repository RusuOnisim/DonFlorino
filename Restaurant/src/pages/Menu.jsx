import  { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pizzasData from '../components/pizzasData';

// PizzaCard component for each pizza item
const PizzaCard = memo(({ pizza }) => {
  return (
    <div id={`pizza-${pizza.id}`} className="flex flex-col items-center">
      <div className="relative w-32 h-32 lg:w-48 lg:h-48 text-secondary bg-white rounded-full overflow-hidden shadow-md">
        <Link to={`/menu/${pizza.id}`}>
        <img
  src={pizza.image}
  alt={pizza.name}
  className="absolute inset-0 w-full h-full object-cover"
  loading="lazy"
  srcSet={`${pizza.image}?w=200 200w, ${pizza.image}?w=400 400w`}
  sizes="(max-width: 600px) 200px, 400px"
/>

        </Link>
      </div>
      <p className="mt-4 text-lg font-karla text-center font-semibold">{pizza.name}</p>
      <p>{pizza.price}</p>
    </div>
  );
});

// Set the displayName for debugging purposes
PizzaCard.displayName = 'PizzaCard';

// PropTypes validation
PizzaCard.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

function Menu() {
  return (
    <div className="bg-background min-h-screen p-10">
      <h1 className="text-3xl text-mainText font-inika font-bold mb-16 text-center">
        Menu des Pizzas
      </h1>

      {/* Grid layout for responsive display */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {pizzasData.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
