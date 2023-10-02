import React from "react";
import { BsFillSunFill } from "react-icons/bs";
function NavBar() {
  return (
    <div className="bg-red-200">
      <div className="bg-secondary text-white py-5 flex justify-around">
        <div>Moview Review App</div>
        <ul className="flex items-center space-x-6">
          <li>
            <button>
              <BsFillSunFill size={24} />
            </button>
          </li>
          <li>
            <input
              type="text"
              className="border-2 border-dark-subtle p-1 rounded bg-transparent outline-none focus:border-white "
              placeholder="Seach here"
            />
          </li>
          <li>
             <div>
                 Login
             </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
