// src/components/About.js

import React from "react";
import "../styles/About.css"

export default function About() {
   return (
      <section id="about">
         <div class="outer-container">
            <div>
               <h1>
                  About page.
               </h1>
               <p>
                  I discovered coding in my freshman year of college by taking a random class and instantly
                  fell in love with the logical skills needed to engineer a solution. Throughout my years
                  in college, I had the pleasure of working on various software engineering projects and
                  even developed a decision support system in my free time. </p>
               <p>
                  These days, I thrive on creating solutions that not only work well but also stand the
                  test of time. I am eager to contribute to the advancement of technology, believing in
                  its potential to shape a better future for humanity.</p>
               <p>
                  When I'm not immersed in coding, I’ll likely be found cooking up new recipes, diving 
                  playing some video games, or spending some time with my friends and family.
               </p>
            </div>
         </div>
      </section>
   );
}