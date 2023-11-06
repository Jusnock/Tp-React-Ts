import { Carousel } from "react-bootstrap";
export function CarrouselHome() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="container mt-4">
                <Carousel fade data-bs-theme="dark">
                    <Carousel.Item className="d-flex justify-content-center align-items-center">
                        <img
                            style={{ display: 'flex', height: '500px', width: '60rem', objectFit: 'cover' }}
                            src="src/assets/Cs2.jpg" alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'white' }}>Counter Strike 2</h1>

                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item className="d-flex justify-content-center align-items-center">
                        <img
                            style={{ display: 'flex', height: '500px', width: '950px', objectFit: 'cover' }}
                            src="src/assets/terror.jpg" alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'white' }}>Terroristas</h1>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="d-flex justify-content-center align-items-center">
                        <img
                            style={{ display: 'flex', height: '500px', width: '950px', objectFit: 'cover' }}
                            src="src/assets/cts.jpg" alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'white' }}>Contra Terroristas</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>);

}