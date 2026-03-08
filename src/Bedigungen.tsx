
import Footer from './components/Footer';
import Header from './components/Header';

const Bedingungen = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-12">
        <Header />
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-left">Mitgliedschaftsbestimmungen</h1>
            <p className="max-w-lg text-center text-gray-700 mb-8">
                Hier findest du die Rechte und Pflichten als Mitglied des Skate Kollektiv Furttal. Bitte lese die Bestimmungen sorgfältig durch, bevor du dich für eine Mitgliedschaft entscheidest.
            </p>
            <div className="max-w-2xl bg-white text-left " >
                <h2 className="text-xl font-bold mb-4">1. Geltungsbereich</h2>
                <p className="mb-4">
                    Diese Mitgliedschaftsbestimmungen regeln die Rechte und Pflichten aller Mitglieder des gemeinnützigen Vereins Skate Kollektiv Furttal mit Sitz in 8105 Watt, Regensdorf. Grundlage bilden die vom Verein verabschiedeten Statuten.
                </p>   
                <h2 className="text-xl font-bold mb-4">2. Vereinszweck</h2>
                <p className="mb-4">Der Verein verfolgt nicht gewinnorientierte Ziele. Zu den zentralen Zwecken gehören:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Förderung des Skateboard‑Freestyle‑Sports</li>
                    <li>Aufbau eines allgemein zugänglichen Bewegungsangebots in der Wohngemeinde</li>
                    <li>Förderung von Bewegung, Gesundheit und sportlicher Gemeinschaft</li>
                    <li>Unterstützung von Nachwuchssportlerinnen und -sportlern</li>
                    <li>Organisation von Trainings, Workshops, Events und Wettkämpfen</li>
                </ul>
                <p>Der Verein kann mit Schulen, Gemeinden und Institutionen zusammenarbeiten.</p>
                <h2 className="text-xl font-bold mb-4">3. Mitgliedschaft</h2>
                <p className="mb-4">
                    Mitglied kann jede natürliche oder juristische Person werden, die den Vereinszweck unterstützt und die Bestimmungen einhält. Die Aufnahme erfolgt durch den Vorstand.<br />
                    Es bestehen folgende Kategorien und Mitgliederbeiträge:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Aktivmitglieder 200 CHF</li>
                    <li>Passivmitglieder 100 CHF</li>   
                    <li>Ehrenmitglieder 50 CHF</li>   
                </ul>
                <p className='mb-4'>Die Mitgliedschaft endet durch Austritt, Ausschluss oder Tod bzw. Auflösung juristischer Personen.</p>
                <h2 className="text-xl font-bold mb-4">4. Rechte der Mitglieder</h2>
                <p className="mb-4">Mitglieder haben Anspruch auf:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Teilnahme an Trainings, Workshops, Events und Wettkämpfen</li>
                    <li>Teilnahme und Stimmrecht an der Mitgliederversammlung</li>   
                    <li>Einsicht in relevante Vereinsunterlagen</li>   
                    <li>Gleichbehandlung und Zugang zu allen Vereinsangeboten</li>   
                </ul>
                <h2 className="text-xl font-bold mb-4">5. Pflichten der Mitglieder</h2>
                <p className="mb-4">Mitglieder haben folgende Pflichten:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Mitwirkung bei der Verfolgung des Vereinszwecks</li>
                    <li>Bezahlung des jährlichen Mitgliederbeitrags (Höhe gemäss Beschluss der Mitgliederversammlung)</li>
                    <li>Einhaltung der Statuten und allfälliger Reglemente</li>
                    <li>Respektvoller Umgang mit anderen Mitgliedern, Partnern und dem Vereinseigentum</li>
                    <li>Eigenverantwortung bezüglich Sicherheit und Gesundheit beim Skateboarden</li>
                </ul>
                <p className="mb-4">Verstösse gegen Statuten oder vereinsschädigendes Verhalten können zum Ausschluss führen.</p>
                <h2 className="text-xl font-bold mb-4">6. Haftung und Versicherung</h2>
                <p className="mb-4">
                    Der Verein haftet nicht für Schäden, die Mitglieder bei der Ausübung von Vereinsaktivitäten erleiden, es sei denn, diese sind auf grobe Fahrlässigkeit oder Vorsatz zurückzuführen. <br />
                    Mitglieder sind selbst für ihre Sicherheit verantwortlich und sollten eine geeignete Unfallversicherung abschliessen.
                </p>
                <h2 className="text-xl font-bold mb-4">7. Foto- und Videoeinverständnis</h2>
                <p className="mb-4">
                    Im Rahmen von Vereinsaktivitäten können Fotos und Videos entstehen. Diese dürfen für Vereinszwecke (Website, Social Media, Flyer) verwendet werden, sofern das Mitglied zugestimmt hat.
Bei Minderjährigen ist die Zustimmung der Erziehungsberechtigten erforderlich.
                </p>
                <h2 className="text-xl font-bold mb-4">8. Datenschutz</h2>
                <p className="mb-4">Personenbezogene Daten werden ausschliesslich für Vereinszwecke verwendet:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Mitgliederverwaltung</li>
                    <li>Kommunikation zu Trainings, Events und Vereinsinformationen</li>
                    <li>Interne Organisation</li>
                </ul>
                <p className="mb-4">Es erfolgt keine Weitergabe an Dritte.</p>
                <h2 className="text-xl font-bold mb-4">9. Beendigung der Mitgliedschaft</h2>
                <p className="mb-4">
                    Die Mitgliedschaft kann jederzeit schriftlich beendet werden. <br />
                    Bereits bezahlte Beiträge werden nicht zurückerstattet. <br />
                    Ein Ausschluss kann erfolgen, wenn Mitglieder gegen Statuten oder Vereinsinteressen verstossen.
                </p>
                <h2 className="text-xl font-bold mb-4">10. Änderung der Bestimmungen</h2>
                <p className="mb-4">
                    Änderungen der Statuten oder Mitgliedschaftsbestimmungen werden durch die Mitgliederversammlung beschlossen und treten nach Veröffentlichung in Kraft.
                </p>
                <h2 className="text-xl font-bold mb-4">11. Anerkennung</h2>
                <p className="mb-4">
                    Mit dem Absenden des Mitgliedschaftsformulars bestätigt das Mitglied:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>die Richtigkeit der Angaben</li>
                    <li>die Anerkennung der <a href="./public/data/Statuten.pdf" download='Statuten_SKF.pdf' className="text-black underline">Statuten</a></li>
                    <li>die Zustimmung zu diesen Mitgliedschaftsbestimmungen</li>
                </ul>
        <Footer />
            </div>
        </div>
    );
};

export default Bedingungen;