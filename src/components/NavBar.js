import imgreact from "../reactjs-icon.png";
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="react_and_img">
        <img src={imgreact} />
        <h1>React</h1>
      </div>

      <ul className="nav-items">
        <li>
          <a href="#">Doc</a>
        </li>
        <li>
          <a href="#">Learn</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
}
