import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Motor, MotorList } from "./styles";
import { api } from "../../server/api";
import { MotorDetailsApi } from "../../types/Motors";

function Cards() {
  const [motors, setMotors] = useState<MotorDetailsApi[]>([]);

  useEffect(() => {
    api.get("/motors").then((response) => {
      console.log(response);
      setMotors(response.data);
    });
  }, []);

  return (
    <Container>
      <div className="title">
        <h1>Modelos</h1>
      </div>
      <MotorList>
        {motors?.map((motor) => {
          return (
            <Motor key={motor.id}>
              <Link to={`/itemsdetails/${motor.id}`}>
                <img src={motor.image} alt={motor.marca} />
                <div className="infoCard">
                  <span>{motor.modelo}</span>
                  <span>{motor.valor}</span>
                </div>
              </Link>
            </Motor>
          );
        })}
      </MotorList>
    </Container>
  );
}

export default Cards;
