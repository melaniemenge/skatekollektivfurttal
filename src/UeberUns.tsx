
import Footer from './components/Footer';
import Header from './components/Header';

const UeberUns = () => {
    return (
        <div className="min-h-screen flex flex-col">
            < Header/>
            <main className="flex-1">
                <h1 className="text-3xl text-center font-bold mt-12">Über uns</h1>
                <div className="px-6 md:px-12 lg:px-24 mt-8 text-foreground text-left max-w-3xl mx-auto">
                    <h2 className='text-xl font-bold mt-8'>Der Verein </h2>
                    <p>Das Skate Kollektiv Furttal ist ein gemeinnütziger Verein, der den Freestyle‑Skateboardsport in der Region fördert und allen Menschen – unabhängig von Alter, Erfahrung oder Hintergrund – den Zugang zu Bewegung ermöglicht. Wir schaffen sichere, offene Räume, in denen Kinder, Jugendliche und Erwachsene gemeinsam lernen, wachsen und Freude an Kreativität und Bewegung erleben können. Unser Ziel ist es, Skateboarding als gesundheitsfördernde, inklusive und gemeinschaftsstärkende Sportart in der Region zu verankern.</p>
                    <h2 className='text-xl font-bold mt-8'>Was wir erreichen wollen</h2>
                    <p>Wir setzen uns dafür ein, dass Skateboarding für alle zugänglich wird – vom ersten Rollversuch bis zu anspruchsvollen Freestyle‑Tricks. Dazu bieten wir Trainings, Workshops, Events und Kooperationen mit Schulen, Gemeinden und lokalen Institutionen an. Wir fördern Nachwuchstalente, stärken motorische und soziale Kompetenzen und möchten die Begeisterung für den Skatesport wieder stärker in die Öffentlichkeit bringen. Ein besonderes Anliegen ist uns der Ausbau von Möglichkeiten für Vert‑Skating in der Region, damit auch diese Disziplin wieder mehr Raum erhält.</p>
                    <h2 className='text-xl font-bold mt-8'>Vorstand</h2>
                    <h3 className='text-lg font-bold mt-6'>Yannick Hermann (Präsident)</h3>
                    <p>Yannick ist ehemaliger Profi‑Halfpipe‑Snowboarder und seit seiner Kindheit leidenschaftlicher Skater. Mit seiner Erfahrung aus dem Leistungssport und seiner Begeisterung für Freestyle‑Bewegung möchte er den Skatesport im Furttal neu beleben und insbesondere das Vert‑Skaten stärken. Er setzt sich dafür ein, dass Skateboarding als kreative, gesunde und gemeinschaftliche Sportart für alle zugänglich bleibt.</p>
                    <h3 className='text-lg font-bold mt-6'>Melanie Menge (Aktuariat, Finanzen, Social Media)</h3>
                    <p>Als Anfängerskaterin kennt Melanie die Hürden, die es zu überwinden gilt, um mit dem Skaten zu beginnen. Sie engagiert sich dafür, dass der Einstieg in den Skatesport so einfach und einladend wie möglich gestaltet wird. Sie möchte vor allem Kindern und Jugendlichen die Freude am Skaten vermitteln und setzt sich dafür ein, dass Skateboarding als gesunde, kreative und inklusive Sportart in der Region Furttal weiter wächst.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default UeberUns;