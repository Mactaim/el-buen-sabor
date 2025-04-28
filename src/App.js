import React from "react";
import "./styles/styles.css";
import Ceviche from "./images/ceviche.jpg";
import LomoSaltado from "./images/lomosaltado.jpeg";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Restaurante El Buen Sabor</h1>
        <p>¡Donde cada plato es una experiencia!</p>
      </header>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#menu">Menú</a></li>
          <li><a href="#reservas">Reservas</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#eventos">Eventos</a></li>
        </ul>
      </nav>
      <section id="inicio">
        <h2>Bienvenidos a El Buen Sabor</h2>
        <p>
          Te invitamos a disfrutar de la mejor gastronomía peruana con ingredientes frescos y amor en cada preparación.
        </p>
      </section>
      <section id="menu">
        <h2>Nuestro Menú</h2>
        <div className="menu-item">
          <h3>Ceviche Clásico</h3>
          <img src={Ceviche} alt="Ceviche" />
          <p>
            Pescado fresco marinado en limón con cebolla roja, ají limo y cilantro. Acompañado de camote y choclo.
          </p>
        </div>
        <div className="menu-item">
          <h3>Lomo Saltado</h3>
          <img src={LomoSaltado} alt="Lomo Saltado" />
          <p>
            Jugosos trozos de carne salteados con cebolla, tomate y papas fritas. Servido con arroz blanco.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
