import * as C from "./styles";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import banner from "../../assets/banner.jpg";
import Footer from "../../components/Footer";
import useAuth from "../../contexts/auth/useAuth";

function Home() {
  const { user } = useAuth();

  return (
    <C.Container>
      <C.HeadContainerHome>
        <Header />
        <C.UserName>Olá, {user?.username}! Partiu, liberdade?</C.UserName>
        <C.HeaderBotton>
          <p>
            Confira nossas promoções e saia de moto zero. Se precisar de ajuda,
            consulte nossos <a href="#">canais de atendimento</a>.
          </p>
        </C.HeaderBotton>
      </C.HeadContainerHome>
      <C.MainContainerHome>
        <div className="bannerBox">
          <img className="banner" src={banner} />
        </div>

        <div className="bannerBackground">
          <div className="bannerBotton">
            <span>
              <h1>Nova Cilindrada</h1>
            </span>
          </div>
          <div className="cardsContainer">
            <Cards />
          </div>
        </div>
      </C.MainContainerHome>
      <Footer />
    </C.Container>
  );
}

export default Home;
