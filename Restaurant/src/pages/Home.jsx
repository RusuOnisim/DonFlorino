// src/pages/Home.js
import pizza1 from "../assets/images/pizza1.svg";

function Home() {
  return (
    <div className="flex flex-col h-[100%]">
      {/* Background Section */}
      <div className="bg-background h-[100dvh] relative flex flex-col lg:flex-row items-center justify-center z-1 overflow-hidden">
        {/* Left Circle Container */}
        <div className="relative flex justify-center items-center w-full lg:w-1/3 h-1/3 lg:h-full ">
          {/* Left Circle */}
          <div className="absolute flex items-center justify-center border-[3px] border-black/10 rounded-full w-96 h-96 top-[-70px] left-[-50px] lg:w-[600px] lg:h-[600px] lg:top-[-10px] lg:left-[-150px] z-0">
            <img src={pizza1} alt="Pizza" className="w-[90%] lg:h-[90%]" />
          </div>
        </div>

        {/* Text Content */}
        <div className="relative flex justify-center items-center w-full lg:w-1/3 h-1/3 lg:h-full overflow-hidden">
          <div className="text-center lg:text-left z-10 relative p-2 flex flex-col items-center space-y-2 lg:space-y-5">
            <h1 className="text-mainText font-inika text-3xl lg:text-5xl">
              Pizzeria Napoletana
            </h1>
            <h1 className="text-mainText font-inika text-3xl lg:text-5xl">
              Don Florino
            </h1>
            <p className="text-secondary/80 text-sm lg:text-lg">
              Pizzas Authentiques, Saveurs Napoletaines.
            </p>
          </div>
        </div>

        {/* Right Circle Container */}
        <div className="relative flex justify-center items-center w-full lg:w-1/3 h-1/3 lg:h-full ">
          {/* Right Circle */}
          <div className="absolute flex items-center justify-center border-[3px] border-black/10 rounded-full w-80 h-80 bottom-[-50px] right-[-90px] lg:w-[700px] lg:h-[700px] lg:bottom-50 lg:right-[-300px] z-0">
            <img src={pizza1} alt="Pizza" className="w-[90%] lg:h-[90%]" />
          </div>
        </div>
      </div>

      <div className="bg-[#000]/[0.05] h-auto lg:h-[100dvh] grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 relative z-10 overflow-hidden">
        {/* Top Left Section */}
        <div className="flex py-5 flex-col  items-center justify-center border-b lg:border-b-1 lg:border-r border-[#000]/[0.1] overflow-hidden">
        <h1 className="p-4 lg:pb-10 text-3xl text-mainText">Livraison</h1>
          <p className="text-secondary/80 text-md lg:text-lg px-10">
            Profitez de notre service de livraison rapide et fiable pour
            déguster nos délicieuses pizzas chez vous, en famille ou entre amis.
            Nous assurons la fraîcheur et la saveur de chaque pizza, directement
            à votre porte, pour une expérience gastronomique pratique et
            savoureuse.
          </p>
        </div>

        {/* Top Right Section */}
        <div className="flex py-5 flex-col  items-center justify-center border-b lg:border-b-1 lg:border-r border-[#000]/[0.1] overflow-hidden">
          <h1 className="p-4 lg:pb-10 text-3xl text-mainText">Événements</h1>
          <p className="text-secondary/80 text-md lg:text-lg px-10">
            Organisez vos événements spéciaux avec la Pizzeria Napoletana - Don
            Florino et laissez-nous prendre en charge la gastronomie. Que ce
            soit pour un anniversaire, une réunion de famille ou une fête
            d'entreprise, nos pizzas artisanales et nos plats italiens sauront
            ravir vos invités et rendre chaque occasion mémorable.
          </p>
        </div>

        {/* Bottom Left Section */}
        <div className="flex py-5 flex-col  items-center justify-center border-b lg:border-b-1 lg:border-r border-[#000]/[0.1] overflow-hidden">
        <h1 className="p-4 lg:pb-10 text-3xl text-mainText">Catering</h1>
          <p className="text-secondary/80 text-md lg:text-lg px-10">
            Optez pour notre service de traiteur pour des événements sur mesure.
            Nous vous proposons une sélection de plats italiens authentiques,
            adaptés à vos besoins et à vos préférences. Faites de votre prochain
            événement un festin inoubliable avec la touche gourmande de la
            Pizzeria Napoletana - Don Florino.{" "}
          </p>
        </div>

        {/* Bottom Right Section */}
        <div className="flex py-5 flex-col  items-center justify-center border-b lg:border-b-1 lg:border-r border-[#000]/[0.1] overflow-hidden">
        <h1 className="p-4 lg:pb-10 text-3xl text-mainText">Réservez Votre Table</h1>
          <p className="text-secondary/80 text-md lg:text-lg px-10">
            Pour une expérience culinaire exceptionnelle, réservez votre table
            dès maintenant et laissez-vous transporter dans l'atmosphère
            chaleureuse et conviviale de notre pizzeria. Profitez de chaque
            instant en savourant nos délices italiens, préparés avec passion et
            dévouement. Nous vous attendons avec impatience.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
