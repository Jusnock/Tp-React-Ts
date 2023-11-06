import Card from 'react-bootstrap/Card';
import { Footer } from './Footer';
export function AboutUs() {
    return (
        <>
            <div className="container" style={{ marginTop: '2rem' }}>
                <div className="justify-content-md-center row">
                    <div className="col-sm-12 col-md-9">
                        <h3>Sobre Counter-Strike 2</h3>
                        <p>Counter-Strike 2 es un juego de disparos táctico en primera persona multijugador de 2023 desarrollado y publicado por Valve. Es la quinta entrega principal de la serie Counter-Strike</p>
                    </div>
                    <Cards titulo="Baldu"
                        cuerpo="Fue un militante del FAL que participó en las primeras acciones armadas de esa organización guerrillera y que habría sido detenido por la policía argentina entre los días 18 y 19 de marzo de 1970 sin que desde entonces se tengan noticias de su persona."
                        url='src/assets/Baldu.jpg'
                    />
                    <Cards titulo="Straka"
                        cuerpo=" Hellmuth Straka (Gratzen/Nové Hrady, Checoslovaquia, 31 de marzo de 1922 – Caracas, Venezuela, 17 de marzo de 1987), fue un antropólogo, espeleólogo y arqueólogo austríaco. Hellmuth Straka rodeado de nativos Japrerias, 1960."
                        url='src/assets/straka.jpeg'
                    />
                    <Cards titulo="Goncho"
                        cuerpo=" uno de los streamers más reconocidos de habla hispana, comenzó a dedicarse a las transmisiones desde los 20 años y hoy con 27 es uno de los principales exponentes de la nueva escena de jóvenes influencers."
                        url='src/assets/goncho.jpg'
                    />


                </div>
            </div>
        </>
    )


}
function Cards(props: { titulo: String; cuerpo: String; url: string }) {
    const { titulo, cuerpo, url } = props;
    return (
        <div className="col-sm-12 col-md-auto d-flex justify-content-center align-items-center col-auto">
            <Card style={{ width: '18rem', height: '26rem', margin: '1rem' }}>
                <Card.Img variant="center" src={url} style={{ margin: '0.5rem', maxHeight: '160px' }} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {cuerpo}
                    </Card.Text>
                </Card.Body>
            </Card></div>

    )
}