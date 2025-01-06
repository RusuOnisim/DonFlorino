import { useParams, Link } from "react-router-dom";
import pizzasData from "../components/pizzasData";

function PizzaDetails() {
  const { id } = useParams(); // This grabs the id from the URL
  const pizza = pizzasData.find((p) => p.id === parseInt(id)); // Make sure the pizza data is matched by ID

  // Select four random pizzas to display as suggestions (excluding the current pizza)
  const suggestedPizzas = pizzasData
    .filter((p) => p.id !== parseInt(id)) // Exclude the current pizza
    .slice(0, 4);

  return (
    <div className="h-[80vh] bg-background mx-4 mt-4">
      {pizza ? (
        <div className="flex flex-col h-full lg:flex-row-reverse items-center lg:items-start ">
          {/* Main Pizza Info */}
          <div className="w-full h-3/4 lg:w-3/4 lg:h-[80vh] flex flex-col items-center justify-center lg:justify-evenly">
            <div className="w-auto h-auto lg:w-auto lg:h-auto bg-white rounded-full overflow-hidden shadow-md mx-auto">
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
            <p className="my-4 text-lg font-karla text-center">{pizza.description}</p>
            <p className="mt-2 text-xl font-karla font-semibold text-center bg-secondary/70 shadow-md text-mainText rounded-xl w-1/2 py-1 items-cente justify-self-center">
              {pizza.price}
            </p>
            </div>
          </div>

          {/* Suggested Pizzas */}
          <div className="h:1/4 lg:h-[80vh] w-auto pb-4 flex flex-col ml-5 lg:mt-0 mt-5">
            <h2 className="lg:text-2xl font-bold mb-5">Suggestions</h2>
            <div className="flex flex-row lg:flex-col justify-between h-full lg:w-1/4 w-full gap-5 ">
              {suggestedPizzas.map((suggestedPizza) => (
                <Link
                  to={`/menu/${suggestedPizza.id}`}
                  key={suggestedPizza.id}
                  className="flex flex-col items-center"
                >
                  <div className="lg:w-auto lg:h-auto bg-white rounded-full overflow-hidden shadow-md hover:scale-105 transition-transform">
                    <img
                      src={suggestedPizza.image}
                      alt={suggestedPizza.name}
                      className="w-full h-full object-cover"
                    />
                    
                  </div>
                  <p className="text-center font-karla font-extralight text-md pt-2 ">
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
