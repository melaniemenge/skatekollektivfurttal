import Footer from './components/Footer';
import Header from './components/Header';
import qrcode from './assets/qr-code.png';


const BASE_URL = 'https://www.skatekollektivfurttal.ch';

const Sponsoring = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-12">
            <link rel="canonical" href={`${BASE_URL}${location.pathname}`} />
            <Header />
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Sponsoring</h1>
            <p className="max-w-lg text-center text-gray-700 mb-8">
                Du möchtest das Skate Kollektiv Furttal unterstützen und Teil unserer Mission sein, die Skateboarding-Kultur in der Region zu fördern? Wir freuen uns über jedes Sponsoring, sei es finanziell oder durch Sachspenden! 
            </p>
            
            <p className="font-bold">Skate Kollektiv Furttal</p>
            <p>Zürcher Kantonalbank</p>
            <p>IBAN: CH94 0070 0114 9053 1278 1</p>
            <p className="mt-4">QR-Code für Spenden:</p>
            <img src={qrcode} alt="QR-Code für Spenden" className="w-48 h-48 mt-4" /> 
            
            <p className="mt-4">Oder via TWINT:</p>
            <button
                type="button"
                onClick={() => window.open('https://go.twint.ch/1/e/tw?tw=acq.qsQj94THTC-E-5A_0KADyBPdoyOf5SDniVCBB8_vtZ50q2U2j3Iyf2r7VkjlJDpy.', '_blank')}
                style={{
                    width: 'auto',
                    height: 58,
                    borderRadius: 6,
                    display: 'flex',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: 'none',
                    alignItems: 'center',
                    padding: 0
                }}
                aria-label="Mit TWINT spenden"
            >
                <img
                    style={{ width: 'auto', height: 58 }}
                    alt="Embedded TWINT button"
                    src="https://go.twint.ch/static/img/button_dark_en.svg"
                />
            </button>
            <Footer />

        </div>
    );
};

export default Sponsoring;