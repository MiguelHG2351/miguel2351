import Link from "next/link";

import { styles } from "./styles/card_project";

export default function Card_project() {
  return (
    <>
      <Link className="card-link" href="/">
        <div className="card">
          <div className="header-card">
            <div className="img">
              <img
                src="/images/card.png"
                className="responsive-img"
                alt="Imagen de la carta"
              />
            </div>
          </div>
          <div className="description-card">
            <p>
              Nombre: <b>firebase-app-search-device</b>
            </p>
            <p>
              Tecnologías: <b>Firebase</b>
            </p>
          </div>
        </div>
      </Link>
      <style jsx>{styles}</style>
    </>
  );
}

/* usar un before para el reverso de la carta */
