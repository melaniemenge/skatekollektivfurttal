
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Skate Kollektiv Furttal. <br/>Alle Rechte vorbehalten.
        <br/><a href="/impressum">Impressum</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
