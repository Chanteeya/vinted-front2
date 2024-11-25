import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email,
          username,
          password,
          newsletter,
        }
      );
      console.log("Réponse de l'API :", response.data);
    } catch (error) {
      console.error(
        "Erreur lors de l'inscription :",
        error.response?.data || error.message
      );
    }
  };

  return (
    <main>
      <form onSubmit={handleSignup}>
        <h2>S'inscrire</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />
          S'inscrire à la newsletter
        </label>
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </main>
  );
};

export default Signup;
