import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bannerImage from "/Users/chanteeyasuparat/Desktop/vinted-frontend-chanteeya/src/assets/vinted-banner.jpg";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="hero">
            <div className="sub-hero">
              <h1>Prêts à faire du tri dans vos placards ?</h1>
              <button className="button-hero">Commencer à vendre</button>
            </div>
          </div>
          <div className="container">
            <h2>Home</h2>

            <div className="articles-grid">
              {data.offers.map((offer) => {
                return (
                  <Link to={`/offers/${offer._id}`} key={offer._id}>
                    <article>
                      {/* 1: Avatar + Username */}
                      <div className="user-info">
                        {offer.owner.account.avatar && (
                          <img
                            className="avatar"
                            src={offer.owner.account.avatar.secure_url}
                            alt={offer.owner.account.username}
                          />
                        )}
                        <span className="username">
                          {offer.owner.account.username}
                        </span>
                      </div>
                      {/* 2: Image de l'article */}
                      <img
                        className="article-image"
                        src={offer.product_image.secure_url}
                        alt={offer.product_name}
                      />
                      {/* 3: Prix */}
                      <p className="offer-price">
                        {offer.product_price.toFixed(2)} €
                      </p>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
