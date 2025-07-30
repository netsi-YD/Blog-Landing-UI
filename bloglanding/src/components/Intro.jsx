import { useState } from "react";
export default function App(){
    return(
<section
  className="relative h-[60vh] md:h-[70vh] bg-cover bg-center transition-transform duration-300 transform hover:scale-105"
style={{ backgroundImage: "url('/images/hiking.jpg')" }}
>
  <div className="absolute inset-0 "></div>
  <div className="relative z-10 flex flex-col items-center justify-center h-full">
    <h2 className="text-5xl md:text-6xl text-white font-light"> Hello World,Welcome to my blogs!</h2>
   
 <p className="text-gray-400">We will dive in about<ul>
      <li>Tech</li>
            <li>Conspiracy Theories</li>
      <li>Movie and Book Recs</li>
      <li>controversial topics</li>
      <li>and so so much more!</li>

    </ul>
    </p>
    </div>
</section>

    );
}