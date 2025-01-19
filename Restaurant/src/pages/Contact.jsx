// src/pages/Contact.js
function Contact() {
  return (
    <div className="text-center p-10 bg-background h-auto">
      <h1 className="font-inika text-4xl text-mainText mb-6">Contactez-nous</h1>
      <p className="font-karla text-lg text-mainText mb-8">
        Réservez une table, commandez nos spécialités italiennes, ou organisez
        un événement avec nous.
      </p>

      {/* Map Section */}
      <div className="w-full h-[80vh] mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.1807891568186!2d4.241816315747645!3d50.84655697953308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c46dfd8c2e8d%3A0xab10b6b91ad097f9!2sNinoofsesteenweg%20978%2C%201703%20Dilbeek%2C%20Belgium!5e0!3m2!1sen!2sbe!4v1692631176201!5m2!1sen!2sbe"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border rounded-lg"
          title="Restaurant Location"
        ></iframe>
      </div>

      {/* Two Columns Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto">
        {/* Reservations and Commands Section */}
        <div className="bg-[#7B2D26] text-background p-6 rounded-lg text-left shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Réservations & Commandes</h2>
          <p className="mb-4">
            Découvrez nos plats italiens authentiques dans notre restaurant ou à
            emporter.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Réservez une table pour une expérience culinaire mémorable.</li>
            <li>
              Commandez vos plats préférés par téléphone et récupérez-les
              rapidement.
            </li>
          </ul>
          <p>
            <strong>Contactez-nous :</strong> Appelez au{" "}
            <a href="tel:+32475505553" className="underline">
              +32 475 505 553
            </a>{" "}
            <span>/ </span>
            <a
              href="tel:025270007
"
              className="underline"
            >
              02 527 00 07
            </a>{" "}
            ou envoyez un email à{" "}
            <a
              href="mailto:donflorino.commandes@outlook.com"
              className="underline"
            >
              donflorino.commandes@outlook.com
            </a>
            .
          </p>
        </div>

        {/* Events Section */}
        <div className="bg-[#8A9A5B] p-6 rounded-lg text-main-text text-left shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Événements</h2>
          <p className="mb-4">
            Organisez vos événements spéciaux avec nous : baptêmes,
            anniversaires, mariages, ou tout autre moment important.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Dans notre restaurant : Profitez d’un cadre chaleureux et d’un
              menu personnalisé.
            </li>
            <li>
              À domicile : Nous nous déplaçons avec notre équipe pour offrir la
              même qualité de service que dans notre établissement.
            </li>
          </ul>
          <p>
            <strong>Contactez-nous :</strong> Appelez-nous au{" "}
            <a href="tel:+32475505553" className="underline">
            +32 475 505 553
            </a>{" "}
            <span>/ </span>
            <a
              href="tel:025270007
"
              className="underline"
            >
              02 527 00 07
            </a>{" "}
            ou envoyez un email à{" "}
            <a
              href="mailto:donflorino.commandes@outlook.com"
              className="underline"
            >
              donflorino.commandes@outlook.com
            </a>
            . Ensemble, nous organiserons un événement inoubliable adapté à vos
            besoins.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
