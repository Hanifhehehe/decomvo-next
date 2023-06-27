import MenuItem from "../navbar/MenuItem";
import Logo from "../Logo";

function Footer() {
  return (
    <div className="border-t-2 py-10 md:px-[20vw] flex flex-col">
      <div className="flex flex-row flex-wrap justify-between">
        <div className="w-full md:w-auto md:flex-1 md:pr-4 text-center md:text-start">
          <h4 className="my-4 md:my-0 px-4 font-bold">Über</h4>
          <div className="my-10 md:my-0 text-xs">
            <MenuItem path="/kooperation" label="Kooperation" />
            <MenuItem path="/datenschutz" label="Datenschutzerklärung" />
            <MenuItem path="/impressum" label="Impressum" />
            <MenuItem path="/kontakt" label="Kontakt" />
            <MenuItem path="/veranstaltungen" label="Veranstaltungen" />
          </div>
        </div>
        <div className="my-10 md:my-0 w-full md:w-auto md:flex-1 md:pl-4 md:h-[180px] flex justify-center items-center">
          <Logo />
        </div>
      </div>
      <hr className="mt-4" />
      <div className="my-10 md:my-0 flex py-5 justify-center opacity-30">
        <span>© 2023 · Urheberrecht. Alle Rechte vorbehalten.</span>
      </div>
    </div>
  );
}

export default Footer;
