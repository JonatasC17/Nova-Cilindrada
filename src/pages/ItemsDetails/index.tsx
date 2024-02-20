import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as C from "./styles";
import { api } from "../../server/api";
import { ButtonsHeader } from "../../components/Buttons/ButtonsHeader";
import { MotorDetailsApi } from "../../types/Motors";

function ItemsDetails() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [motors, setMotors] = useState<MotorDetailsApi>();

  useEffect(() => {
    api.get(`/${id}`).then((response) => {
      setMotors(response.data);
    });
  }, [id]);

  return (
    <C.Container>
      <C.HeadContainerDetails>
        <Header />
        <C.HeaderBotton>
          <p>
            Falta pouco! Confirme sua compra e experimente uma nova cilindrada.{" "}
            <a href="#">The power of the cylinder</a>.
          </p>
        </C.HeaderBotton>
      </C.HeadContainerDetails>
      <C.MainContainerDetails>
        <div className="motorName">
          <h1>
            {motors?.marca} {motors?.modelo} {motors?.anoModelo} em até 48x*
          </h1>
          <ButtonsHeader onClick={() => [navigate(`/purchase/${motors?.id}`)]}>
            <span>COMPRE ONLINE</span>
          </ButtonsHeader>
        </div>
        <C.PromotionalBanner>
          <C.ImageBox>
            <img src={motors?.image} />
          </C.ImageBox>
          <C.Conditions>
            <h1>CONDIÇÕES ESPECIAIS</h1>
            <div className="infoConditions">
              <span>
                {motors?.valor} ou ENTRADA + 48 x de{" "}
                {(motors?.valorUnidadeReais! / 48).toFixed(2).replace(".", ",")}{" "}
              </span>
              <span>FRETE INCLUSO - 4 ANOS DE GARANTIA</span>
            </div>
          </C.Conditions>
        </C.PromotionalBanner>
        <C.Details>
          <div className="detailsTitle">
            <h1>Informações técnicas</h1>
          </div>
          <div className="detailsBox">
            <ul>
              <li>Marca: {motors?.marca}</li>
              <li>Modelo: {motors?.modelo}</li>
              <li>Ano: {motors?.anoModelo}</li>
              <li>Tipo de combustível: {motors?.combustivel}</li>
              <li>Cilindrada: {motors?.cilidrada}</li>
            </ul>
          </div>
          <div className="additionalnformation">
            <p>
              *Condição válida por tempo indeterminado, para pagamentos com
              cartão de crédito
            </p>
          </div>
        </C.Details>
        <ButtonsHeader onClick={() => [navigate(`/purchase/${motors?.id}`)]}>
          <span>COMPRE ONLINE</span>
        </ButtonsHeader>
      </C.MainContainerDetails>
      <Footer />
    </C.Container>
  );
}

export default ItemsDetails;
