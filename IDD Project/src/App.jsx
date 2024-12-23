import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import VideoSection from "./components/VideoSection";
import ServiceSection from "./components/ServiceSection";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Section
        id="inicio"
        title="Somos Familia, Somos Monte de Sion"
        subtitle="Nuestro lema: Abdías 1:17, una promesa de libertad y restauración para quienes buscan a Dios"
        backgroundClass="hero-section"
      />
      <Section
        id="vision"
        title="Nuestra Visión"
        content={[
          "Ser una luz en Paso de los Libres: Nuestra visión es ser un faro de esperanza en nuestra ciudad, iluminando vidas a través de la verdad del Evangelio y reflejando el amor incondicional de Cristo.",
          "Transformar vidas para la gloria de Dios: Convertirnos en una iglesia que impacte positivamente a la ciudad, inspirando a las personas a vivir con fe, amor y propósito.",
          "Edificar una comunidad fundamentada en Cristo: Proveer un lugar donde cada persona encuentre dirección, restauración y el poder transformador de la Palabra de Dios."
        ]}
      />
      <Section
        id="mision"
        title="Nuestra Misión"
        content={[
          "Alcanzar a los perdidos y restaurar a los heridos: Como iglesia local, buscamos ser un refugio para quienes necesitan esperanza y una guía en su caminar con Cristo.",
          "Vivir y compartir el Evangelio de Cristo: Nuestro propósito es reflejar el amor de Dios a través de nuestras acciones, enseñanzas y servicio a los demás.",
          "Ser una iglesia activa en la comunidad: Nos dedicamos a llevar el mensaje de Cristo a Paso de los Libres, ofreciendo apoyo espiritual y social a quienes lo necesitan."
        ]}
      />
      <VideoSection />
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default App;
