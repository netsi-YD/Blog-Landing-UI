import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   return (
    <div className="  bg-gray-50 font-sans text-gray-800">
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

      <section
  className="relative h-[60vh] md:h-[70vh] bg-cover bg-center transition-transform duration-300 transform hover:scale-105"
style={{ backgroundImage: "url('/images/hiking.jpg')" }}
>
  <div className="absolute inset-0 "></div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <h2 className="text-5xl md:text-6xl text-white font-light"> Hello World,Welcome to my blogs!</h2><br></br><br></br>
    <p>We will dive in about<ul>
      <li>Tech</li>
            <li>Conspiracy Theories</li>
      <li>Movie and Book Recs</li>
      <li>controversial topics</li>
      <li>and so so much more!</li>

    </ul>
    </p>
  </div>
</section>


      <section id="about" className="max-w-3xl mx-auto text-center py-12 px-6">
        <h2 className="text-3xl font-medium mb-4">About Me</h2>
        <p className="text-lg ">
I'm netsi.I am interested in  a bunch of things which I am gonna share about here just in a sec. So get your snacks and buckle up as I rant ! </p>
      </section>

<section id="products" className="py-12">
  <div className="max-w-6xl mx-auto px-6">
    <h3 className="text-3xl font-medium mb-8">My interests/hobbies</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="space-y-4  transition-transform duration-300 transform hover:scale-105">
    <img src="/images/boooks.jpg" className="w-full h-60 object-cover rounded-lg"/>
    </div>
    <div className="space-y-4  transition-transform duration-300 transform hover:scale-105">
    <img src="/images/friends.jpg" className="w-full h-60 object-cover rounded-lg"/>
    </div>
    <div className="space-y-4  transition-transform duration-300 transform hover:scale-105" >
  <img src="/images/hiking.jpg" className="w-full h-60 object-cover rounded-lg"/>
  </div>

</div>

  </div>
</section>
<section id="services" className="max-w-3xl mx-auto py-12 px-6">
        <h3 className="text-3xl font-medium mb-4">Favourites</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>TV Shows</li>
          <li> Audiobooks</li>
          <li>Hiking </li>

        </ul>
      </section>

      <section id="contact" className=" py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-medium mb-4">You can find me here 👇</h3>
          <p>📍 Addis Ababa • 📞 +251909090909 • ✉️ netsanetyiblet12@gmail.com</p><br></br>
                    <h4 className="text-3xl font-medium mb-4"> Check my socials 👇</h4>
                    <ul>
                      <li><a href="">Telegram</a></li>
                      <li><a href="">Tiktok</a></li>
                      <li><a href="">Instagram</a></li>
                    </ul>

        </div>
      </section>

      <footer className="bg-white py-6 text-center">
        <p className="text-sm text-gray-600">&copy; 2025 netsi blogs</p>
      </footer>
    </div>
  );
}


export default App
