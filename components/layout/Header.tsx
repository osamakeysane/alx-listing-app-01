import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">
            ALX<span className="text-indigo-600">Listings</span>
          </div>
          <nav className="hidden md:flex gap-3 text-sm text-gray-600">
            <a className="hover:text-indigo-600" href="#">
              Rooms
            </a>
            <a className="hover:text-indigo-600" href="#">
              Villas
            </a>
            <a className="hover:text-indigo-600" href="#">
              Mansions
            </a>
            <a className="hover:text-indigo-600" href="#">
              Countryside
            </a>
          </nav>
        </div>

        <div className="flex-1 mx-6 hidden lg:block">
          <div className="bg-gray-100 rounded-md p-1 flex items-center">
            <input
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
              placeholder="Search city, state or property..."
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm">
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm px-3 py-2">Sign in</button>
          <button className="text-sm px-3 py-2 bg-indigo-600 text-white rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
