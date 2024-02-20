import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Buttons/Button";
import { ButtonsHeader } from "../../components/Buttons/ButtonsHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { api } from "../../server/api";
import { MotorDetailsApi } from "../../types/Motors";
import * as C from "./styles";

function Purchase() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [item, setItem] = useState<MotorDetailsApi>();

  useEffect(() => {
    api.get(`/${id}`).then((response) => {
      setItem(response.data);
    });
  }, [id]);

  return (
    <C.Container>
      <C.HeadContainerPurchase>
        <Header />
        <C.HeaderBotton>
          <p>
            Falta pouco! Confirme sua compra e experimente uma nova cilindrada.{" "}
            <a href="#">The power of the cylinder</a>.
          </p>
        </C.HeaderBotton>
      </C.HeadContainerPurchase>
      <C.MainContainerPurchase>
        <C.Confirmation>
          <C.ImageConfirmation>
            <div className="imageBox">
              <img src={item?.image} />
            </div>
          </C.ImageConfirmation>
          <C.OrderSummary>
            <h1> {item?.valor} </h1>
            <span>
              <p>
                OU {(item?.valorUnidadeReais! * 0.2).toFixed(2)} + 48 x de{" "}
                {(item?.valorUnidadeReais! / 48).toFixed(2)}
              </p>
            </span>
            <span>
              <p>
                {item?.marca} {item?.modelo} {item?.anoModelo}{" "}
                {item?.combustivel}
              </p>
            </span>
            <C.PaymentMethods>
              <ButtonsHeader
                onClick={() => [
                  alert("Compra realizada com sucesso"),
                  navigate("/home"),
                ]}
              >
                <span>CRÉDITO</span>
              </ButtonsHeader>
              <ButtonsHeader
                onClick={() => [
                  alert("Compra realizada com sucesso"),
                  navigate("/home"),
                ]}
              >
                <span>DÉBITO</span>
              </ButtonsHeader>

              <ButtonsHeader
                onClick={() => [
                  alert("Compra realizada com sucesso"),
                  navigate("/home"),
                ]}
              >
                <span>PIX</span>
              </ButtonsHeader>
            </C.PaymentMethods>

            <Button
              onClick={() => [
                alert("Compra realizada com sucesso"),
                navigate("/home"),
              ]}
            >
              <span>CONFIRMAR A COMPRA</span>
            </Button>
          </C.OrderSummary>
        </C.Confirmation>
      </C.MainContainerPurchase>
      <Footer />
    </C.Container>
  );
}

export default Purchase;
