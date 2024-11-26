import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Signup() {
  // Étape 2 : États pour gérer les champs du formulaire

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  // Étape 3 : Navigation après inscription réussie
  const navigate = useNavigate();

  return (
    <div>
      <h1>Créer un compte</h1>
      <form>
        <label>
          Pseudo :
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Mets à jour l'état
          />
        </label>
        <br />
        <label>
          Email :
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Mets à jour l'état
          />
        </label>
        <br />
        <label>
          Mot de passe :
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Mets à jour l'état
          />
        </label>
        <br />
        <label>
          S'abonner à la newsletter :
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)} // Mets à jour l'état
          />
        </label>
        <br />
        <button type="submit">S'inscrire</button>
      </form>
      <p>
        Déjà un compte ? <Link to="/login">Se connecter</Link>
      </p>
    </div>
  );
}

export default Signup;
