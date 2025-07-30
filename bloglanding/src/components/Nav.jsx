import { useState } from "react";
export default function App() {
    return(
 <header className="shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          
         <br></br>

          <h1 className="text-2xl font-bold ">Netsi Blogs</h1>
          <nav>
            <ul className="flex gap-6 text-sm ">
              <li><a href="#about" className="hover:text-gray-600">About</a></li>
              <li><a href="#products" className="hover:text-gray-600">Hobbies</a></li>
              <li><a href="#services" className="hover:text-gray-600">Favourites</a></li>
              <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
}