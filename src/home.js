import { Link } from "react-router-dom";


const Home = () => {

  return (
    <div>

      <p>Home</p>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about">About Us</Link>
    </div>
  );

};
export default Home;