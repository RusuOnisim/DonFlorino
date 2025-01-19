import { useParams, Link } from "react-router-dom";
import pizzasData from "../components/pizzasData";

function PizzaDetails() {
  const { id } = useParams(); 
  const pizza = pizzasData.find((p) => p.id === parseInt(id)); 

  
  const suggestedPizzas = pizzasData
    .filter((p) => p.id !== parseInt(id)) 
    .slice(0, 4);

  return (
    <div className="lg:h-[85vh] bg-background mx-4 mt-4 mb-8">
      {pizza ? (
        <div className="flex flex-col h-full lg:flex-row items-center lg:items-start ">
          {/* Main Pizza Info */}
          <div className="w-full h-3/4 lg:w-3/4 lg:h-full flex flex-col items-center justify-center lg:justify-evenly">
            <div className="w-auto h-auto lg:w-auto lg:h-auto bg-white rounded-full overflow-hidden shadow-md mx-auto mt-5">
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
            <h1 className="text-4xl font-bold font-inika pt-4 text-center">
              {pizza.name}
            </h1>
            <p className="mt-5 text-2xl font-karla text-left font-bold text-[#7B2D26]">Ingrédients:</p>
            <p className=" text-lg font-karla text-left">{pizza.description}</p>
            <p className="mb-2 text-lg font-karla text-left">{pizza.descriptionNL}</p>
            <p className="mt-5 text-xl font-karla font-semibold text-center bg-[#9B2D20] shadow-md text-background rounded-xl ml-auto mr-auto lg:w-[150px] w-[100px] py-1 items-center">
              {pizza.price}
            </p>
            </div>
          </div>

          {/* Suggested Pizzas */}
          <div className="h-auto lg:h-full lg:w-2/6 pb-4 lg:pb-0 flex flex-col lg:mt-3 mt-5 overflow-hidden">
            
            <div className="flex flex-row lg:flex-col justify-between h-full w-full gap-1">
              {suggestedPizzas.map((suggestedPizza) => (
                <Link
                  to={`/menu/${suggestedPizza.id}`}
                  key={suggestedPizza.id}
                  className="flex flex-col lg:flex-row lg:gap-5 items-center"
                >
                  <div className="lg:w-1/4 lg:h-auto bg-white rounded-full overflow-hidden shadow-md hover:scale-105 transition-transform">
                    <img
                      src={suggestedPizza.image}
                      alt={suggestedPizza.name}
                      className="w-full h-full object-cover"
                    />
                    
                  </div>
                  <p className="text-center font-karla font-extralight lg:font-semibold text-md lg:text-xl pt-2 ">
                    {suggestedPizza.name}
                  </p>
                </Link>
                
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Pizza non trouvée</p>
      )}
    </div>
  );
}

export default PizzaDetails;
