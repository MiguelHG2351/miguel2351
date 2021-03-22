import Link from "next/link";
import { styles } from "components/styles/card";

export default function Card(props) {
    return (
        <>
            <Link href={props.url}>
                <a className="card">
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
                        }
                    `}</style>
                </a>
            </Link>
        </>
    );
}
