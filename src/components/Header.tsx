import skflogo from '../assets/SKF-logo.png';

const Header = () => {
    return (

        <div className="flex flex-col items-center justify-center pt-12 pb-8 px-4">
            <a href="/">
                <img
                    src={skflogo}
                    alt="SKF logo"
                    className="mb-6 w-64 h-64 object-contain sm:w-40 sm:h-40"
                />
            </a>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Skate Kollektiv Furttal</h1>
        </div>
    );
};

export default Header;
