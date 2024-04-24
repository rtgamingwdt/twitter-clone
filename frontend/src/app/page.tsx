import { FaCog } from "react-icons/fa";
import "../styles/home.scss";

export default function Home() {
  return (
    <div className="home-header">
      <button className="full">For You</button>
      <button className="full">Following</button>
      <button><FaCog /></button>
    </div>
  );
}
