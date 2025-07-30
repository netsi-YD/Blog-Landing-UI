import { useState } from "react";
export default function App(){
    return(
<section id="services" className="max-w-3xl mx-auto py-12 px-6">
        <h3 className="text-3xl font-medium mb-4">Favourites</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>TV Shows</li>
          <li> Audiobooks</li>
          <li>Hiking </li>

        </ul>
      </section>

    );
}