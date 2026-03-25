
import Footer from './components/Footer';
import Header from './components/Header';

const BASE_URL = 'https://www.skatekollektivfurttal.ch';

const Impressum = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <link rel="canonical" href={`${BASE_URL}${location.pathname}`} />
            <Header />
            <main className="flex-1">
                <h1 className="text-3xl text-center font-bold mt-12">Impressum</h1>
                <div className="px-6 md:px-12 lg:px-24 mt-8 text-foreground max-w-3xl mx-auto">
                    <h3>Skate Kollektiv Furttal</h3>
                    <p>
                        Postadresse:<br/>
                        Unterdorfstrasse 11B<br/>
                        8105 Watt<br/>
                        Schweiz<br/><br/>
                        E-Mail: <a href="mailto:verein@skatekollektivfurttal.ch" className="underline decoration-solid">verein@skatekollektivfurttal.ch</a><br/>
                        Präsident: Yannick Hermann<br/>
                        Rechtsform: gemeinnütziger Verein<br/><br/>
                    </p><br/>
                    <h3>Credits</h3>
                    <p>
                        Inhalt, Konzeption,Design und Programmierung: <a href="https://melaniemenge.ch/" className="underline decoration-solid ">Melanie Menge</a>
                    </p><br/>
                    <h3>Haftungsausschluss</h3>
                    <p>
                        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.
                    </p><br/>
                    <h3>Urheberrecht</h3>
                    <p>
                        Die durch den Verein "Skate Kollektiv Furttal"erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. 
                        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                    
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Impressum;