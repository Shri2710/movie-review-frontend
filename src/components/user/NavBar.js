import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks";
function NavBar() {

  const {toggleTheme} = useTheme();

const handleToggleTheme  = ()=>{
   toggleTheme();
}
  return (
    <div className="bg-red-200 shadow shadow-gray-500">
      <div className="bg-secondary text-white py-5 flex justify-around">
        <div>Moview Review App</div>
        <ul className="flex items-center space-x-6">
          <li>
            <button onClick={handleToggleTheme}>
              <BsFillSunFill size={24} />
            </button>
          </li>
          <li>
            <input
              type="text"
              className="border-2 border-dark-subtle p-1 rounded bg-transparent outline-none focus:border-white"
              placeholder="Seach here"
            />
          </li>
          <li>
            <Link to="/">
              <div>Login</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
