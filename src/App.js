import React from "react";
import "./styles/styles.css";
import Ceviche from "./images/ceviche.jpg";
import LomoSaltado from "./images/lomosaltado.jpeg";
import AjideGallina from "./images/Ajidegallina.jpg";
import Receta from "./images/receta.jpg";
import CenaMaridaje from "./images/Almuerzo.png";
import MusicaCriolla from "./images/musica.jpg";
import Buffet from "./images/Crowneplaza.jpg";

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
          Te invitamos a disfrutar de la mejor gastronomía peruana con
          ingredientes frescos y amor en cada preparación.
        </p>
      </section>

      <section id="menu">
        <h2>Nuestro Menú</h2>

        <div className="menu-item">
          <h3>Ceviche Clásico</h3>
          <img src={Ceviche} alt="Ceviche" />
          <p>
            Pescado fresco marinado en limón con cebolla roja, ají limo y
            cilantro. Acompañado de camote y choclo.
          </p>
        </div>

        <div className="menu-item">
          <h3>Lomo Saltado</h3>
          <img src={LomoSaltado} alt="Lomo Saltado" />
          <p>
            Jugosos trozos de carne salteados con cebolla, tomate y papas
            fritas. Servido con arroz blanco.
          </p>
        </div>
      </section>

      <section id="reservas">
        <h2>Reserva tu mesa</h2>
        <Reservas />
      </section>

      <section id="blog">
        <h2>Blog Gastronómico</h2>
        <article>
          <h3>5 secretos de nuestro Ají de Gallina</h3>
          <img src={AjideGallina} alt="Ají de Gallina" />
          <p>
            Descubre por qué nuestro ají de gallina es tan cremoso y lleno de
            sabor. Utilizamos pan remojado en leche, ají amarillo fresco y una
            base de caldo de gallina cocinado a fuego lento.
          </p>
        </article>

        <article>
          <h3>Receta: Anticuchos al estilo El Buen Sabor</h3>
          <img src={Receta} alt="Anticuchos" />
          <p>
            Aprende a preparar anticuchos como los que servimos en el
            restaurante. Nuestra receta incluye corazón de res marinado por 24
            horas en ají panca, vinagre rojo, ajo, comino y otras especias
            secretas.
          </p>
        </article>
      </section>

      <section id="eventos">
        <h2>Próximos Eventos</h2>
        <ul>
          <li>
            <strong>15 de Abril:</strong> Cena maridaje con vino peruano
            <br />
            <img src={CenaMaridaje} alt="Cena maridaje" />
          </li>
          <li>
            <strong>25 de Abril:</strong> Noche criolla con música en vivo
            <br />
            <img src={MusicaCriolla} alt="Noche criolla" />
          </li>
          <li>
            <strong>1 de Mayo:</strong> Buffet por el Día del Trabajo
            <br />
            <img src={Buffet} alt="Buffet Día del Trabajo" />
          </li>
        </ul>
      </section>
    </div>
  );
}

function Reservas() {
  const [formData, setFormData] = React.useState({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    hora: "",
    personas: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Reserva realizada con éxito!");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      fecha: "",
      hora: "",
      personas: "",
      mensaje: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="fecha"
        value={formData.fecha}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="hora"
        value={formData.hora}
        onChange={handleChange}
        required
      />
      <select
        name="personas"
        value={formData.personas}
        onChange={handleChange}
        required
      >
        <option value="">Número de personas</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5+">5+</option>
      </select>
      <textarea
        name="mensaje"
        placeholder="Mensaje adicional (opcional)"
        value={formData.mensaje}
        onChange={handleChange}
      />
      <button type="submit">Reservar</button>
    </form>
  );
}

export default App;
