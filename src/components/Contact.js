// src/components/Contact.js

import React from "react";
import "../styles/Contact.css"

export default function Contact() {
  return (
    <section id="contact">
      <div>
        <div>
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=East+Greenbush,+NY,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div>
      
            <div>
              <h2>
                EMAIL
              </h2>
              <a>
                redickau@email.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}