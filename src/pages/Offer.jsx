import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  //   console.log("test", test);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <main class="offer">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="container">
            <div className="column1">
              <p>Pour afficher l'image</p>
            </div>
            <div className="column2">
              <h2>Offer</h2>
              <p>{data.product_name}</p>
              {/* <p>MARQUE : {data.product_details[0].MARQUE}</p>
          <p>TAILLE : {data.product_details[1].TAILLE}</p>
          <p>ÉTAT : {data.product_details[2].ÉTAT}</p>
          <p>COULEUR : {data.product_details[3].COULEUR}</p> */}
              {/* <p>EMPLACEMENT : {data.product_details[4].EMPLACEMENT}</p> */}
              {/* <p>
            MODES DE PAIEMENT : {data.product_details[5]["MODES DE PAIEMENT"]}
          </p> */}
              {data.product_details.map((detail, index) => {
                // console.log("l'objet du tour de boucle ", detail);
                const keysInObj = Object.keys(detail);
                // console.log("les clefs dans cet objet ", keysInObj);
                const keyInObj = keysInObj[0];
                // console.log("la clef sortie du tableau ", keyInObj);
                return (
                  <p key={index}>
                    {keyInObj} : {detail[keyInObj]}
                  </p>
                );
              })}
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Offer;
