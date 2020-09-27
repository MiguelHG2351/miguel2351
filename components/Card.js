import Link from 'next/link'
import { styles } from '../styles/card'


export default function Card({ proyect, technologies, image, alt, url, color = null }) {
    return <> 
    <Link href={url}>
        <a className="card blue-filter">
            <div className="principal relative">
                <div className="info">
                    <div className="project-name">
                        <b>Proyecto:</b>
                        <p>{proyect}</p>
                    </div>
                    <div className="tech">
                        <b>Tecnologías:</b>
                        <p>{technologies}</p>
                    </div>
                </div>
                <div className={`background ${color}`}>
                    <img src={image} className="responsive-img" alt={alt}/>
                </div>
            </div>
        </a>
    </Link>
    <style jsx>
        { styles }
    </style>
</> 
}