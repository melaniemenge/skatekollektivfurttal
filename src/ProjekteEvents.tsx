
import Footer from './components/Footer';
import Header from './components/Header';

const ProjekteEvents = () => {

    return (
        <div className="flex flex-col content-center justify-content min-h-screen pt-12 px-4 pb-30">
        <Header />
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Projekte & Events</h1>
            <p className="max-w-lg text-center text-gray-700 mb-8">Hier findest du Informationen über unsere aktuellen und zukünftigenProjekte und Events.</p>
            <h2 className="text-2xl font-bold mb-4 text-center">Aktuelle Projekte</h2>
            <p className="max-w-lg text-center text-gray-700 mb-8">Derzeit arbeiten wir an der Planung einer neuen Miniramp in Regensdorf. Bleib dran für weitere Updates!</p>
        <Footer />
        </div>
    );
};

export default ProjekteEvents;