
import Footer from './components/Footer';
import Header from './components/Header';
import { Card, CardHeader, CardBody } from "@heroui/card";

const ProjekteEvents = () => {

    return (
        <div className="flex flex-col content-center justify-content min-h-screen pt-12 px-4">
            <Header />
            <div className="flex flex-col items-center justify-center pt-12">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Projekte & Events</h1>
                <p className="max-w-lg text-center text-gray-700 mb-8">Hier findest du Informationen über unsere aktuellen und zukünftigen Projekte und Events.</p>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">Aktuelle Projekte</h2>
            <section className="flex flex-col gap-6 mb-12">
                <Card className="mb-6 w-full max-w-2xl mx-auto border border-gray-300 rounded-lg shadow transition hover:shadow-lg">
                    <CardHeader className="p-4">
                        <h3 className="text-xl">Projekt "WATT A RAMP"</h3>
                    </CardHeader>
                    <CardBody className="p-4">
                        <p>Derzeit arbeiten wir an der Planung und Umsetzung einer neuen Miniramp in Watt. <br />
                            Mit der Miniramp wollen wir das Freizeitangebot in Watt erweitern, einen Begegnungsort für jung und alt schaffen und Skateboarding als Sport in der Region stärken.  </p>
                    </CardBody>
                </Card>
            </section>
            <Footer />
        </div>
    );
};

export default ProjekteEvents;
