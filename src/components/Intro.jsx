import { useState } from "react";
export default function App(){
    return(
<section
  className="w-full overflow-hidden relative h-[60vh] md:h-[70vh] bg-cover bg-center transition-transform duration-300 transform hover:scale-105"
  style={{ backgroundImage: "url('/images/hiking.jpg')" }}
>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/images/bg.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 "></div>
  <div className="relative z-10 flex flex-col items-center justify-center h-full">
    <h2 className="text-5xl md:text-6xl text-black font-light"> Hello World,Welcome to my blogs!</h2>
   
 <p className="text-black-400 font-bold text-2xl">We will dive in about<ul>
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