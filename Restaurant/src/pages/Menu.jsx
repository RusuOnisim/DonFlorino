import { Link } from 'react-router-dom';
import pizzasData from '../components/pizzasData';

function Menu() {

  return (
    <div className="bg-background min-h-screen p-10">
      <h1 className="text-3xl text-mainText font-inika font-bold mb-16 text-center">Menu des Pizzas</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {pizzasData.map((pizza) => (
          <div key={pizza.id} className="flex flex-col items-center">
            <div className="w-32 h-32 lg:w-48 lg:h-48 text-secondary bg-white rounded-full overflow-hidden shadow-md">
            <Link to={`/menu/${pizza.id}`} className="">
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-full object-cover"
              /> </Link>
            </div>
            <p className="mt-4 text-lg font-karla text-center font-semibold">{pizza.name}</p>
            {/* Correctly pass the pizza id */}
            
              
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
