import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  const headerTitle = "Adopta un perrito";
  return (
    <>
      <Container fluid className="g-3">
        <Row>
          <Header title={headerTitle} />
        </Row>

        <Row xs={1} md={4} className="g-3 m-4">
          <Col>
            <MyCard
              srcImg={"https://i.postimg.cc/1XzPxSD2/Sam.webp"}
              dogName={"Sam"}
              dogDescription={
                "Fue rescatada de tras ser abandonada por sus dueños. Le gusta jugar, entrenar y volver a jugar. Si hay una pelota, aún mejor. Ahora, también le gusta regalonear. Con un poco de ayuda se suele adaptar bien a casa, departamento y distintas rutinas. Puede convivir con perros y gatos siempre que sean sociables y sepan gestionar sus emociones."
              }
              bgTag={"info"}
              textTag={"Labrador | 3 meses | hembra"}
            />
          </Col>

          <Col>
            <MyCard
              srcImg={"https://i.postimg.cc/LX22TL5H/Cesar.webp"}
              dogName={"Cesar"}
              dogDescription={
                "Fue rescatado con una pata rota y mucho dolor. Hoy es tranquilo y regalón. Le gusta mucho el cariño, pasar tiempo con los humanos, salir a pasear y tomar siestas. Su personalidad cariñosa y amigable ha causado que sus ya dos hogares temporales le amen, pero ninguno ha podido adoptarle. ¿Le darías tú la oportunidad?"
              }
              bgTag={"success"}
              textTag={"Mestizo | 6 meses | macho"}
            />
          </Col>
          <Col>
            <MyCard
              srcImg={"https://i.postimg.cc/zB75PvHT/Docker.jpg"}
              dogName={"Docker"}
              dogDescription={
                "Le cuesta entrar en confianza con los humanos, pero cuando lo hace le gusta la tranquilidad. Vivió mucho tiempo en el centro de la ciudad, y le teme a los ruidos fuertes y a la manipulación, aunque esto último se ha trabajado con su etóloga. Es selectivo y reacciona con algunos perros, pero si no son invasivos y saben socializar, se lleva bien."
              }
              bgTag={"danger"}
              textTag={"Mestizo | 7 años | macho"}
            />
          </Col>
          <Col>
            <MyCard
              srcImg={"https://i.postimg.cc/FznvN6ZR/Raiza.webp"}
              dogName={"Raiza"}
              dogDescription={
                "Fue rescatada de un centro de crianza clandestino. Hoy busca estar cerca de los humanos, recibir su cariño y llamar su atención. Al principio es tímida, pero una vez ganas su confianza y conocerás su dulce personalidad y su energía media. Le motiva mucho la comida. Se lleva bien con gatos, perros y niños de más de 8 años que entiendan instrucciones sobre cómo relacionarse con perros"
              }
              bgTag={"warning"}
              textTag={"Husky | 4 meses | hembra"}
            />
          </Col>
        </Row>

        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default App;
