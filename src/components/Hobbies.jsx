import { useState } from "react";
export default function App() {
    return (
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
    );
}