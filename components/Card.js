import Link from "next/link";
import { styles } from "styles/card";

export default function Card(props) {
    return (
        <>
            <Link href={props.url}>
                <a className="card blue-filter">
                    <div className="principal relative">
                        <div className="info">
                            <div className="project-name">
                                <b>Proyecto:</b>
                                <p>{props.proyect}</p>
                            </div>
                            <div className="tech">
                                <b>Tecnologías:</b>
                                <p>{props.technologies}</p>
                            </div>
                        </div>
                        <div className={`background ${props.color}`}>
                            {/* <img src={image} className="responsive-img" alt={alt}/> */}
                        </div>
                    </div>
                    <style jsx>{styles}</style>
                    <style jsx>{`
                        .background {
                            background-image: url(${props.image});
                            background-repeat: no-repeat;
                            background-size: cover;
                        }
                    `}</style>
                </a>
            </Link>
        </>
    );
}
