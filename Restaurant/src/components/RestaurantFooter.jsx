
const RestaurantFooter = () => {
  return (
    <footer className="bg-[#6A7B5F] text-background  py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Schedule Section */}
          <div>
            <h2 className="text-lg font-bold text-background mb-4">Horaire</h2>
            <ul>
            <li>Lundi: Fermé</li>
              <li>Mardi - Jeudi: 17:00 - 22:00</li>
              <li>Venderdi - Dimanche: 17:00 - 24:00</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-bold text-background  mb-4">Contact</h2>
            <ul>
              <li>Phone:  +32 475 505 553</li>
              <li>Phone: 02 527 00 07</li>
              <li>Email: donflorino.commandes@outlook.com</li>
              <li>Website: www.DonFlorino.be</li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h2 className="text-lg font-bold text-background  mb-4">Addresse</h2>
            <p>Ninoofsesteenweg 978</p>
            <p>1703 Dilbeek</p>
            <p>Belgium</p>
          </div>
        </div>

        <div className="text-center mt-8 text-background ">
          <p>&copy; {new Date().getFullYear()} Don Florino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default RestaurantFooter;
