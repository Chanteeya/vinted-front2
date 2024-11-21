import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="home">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Offers</h2>
          <img className="img1" src="src/assets/vinted-banner.jpg" />
          <section className="offers-grid">
            {data.offers.map((offer) => (
              <Link
                to={`/offers/${offer._id}`}
                key={offer._id}
                className="offer-card"
              >
                <article>
                  <div className="offer-owner">
                    {offer.owner.account.avatar && (
                      <img
                        src={offer.owner.account.avatar.secure_url}
                        alt={offer.owner.account.username}
                      />
                    )}
                    <span>{offer.owner.account.username}</span>
                  </div>
                  <img
                    className="offer-image"
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                  />
                  <p className="offer-price">
                    {offer.product_price.toFixed(2)} €
                  </p>
                </article>
              </Link>
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
