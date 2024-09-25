import Logo from '@/assets/Logo.png'
import SwitchLang from "./SwitchLang";

interface Props {
  url: URL;
}

export default function Navbar({ url }: Props) {
  return (
    <header
      className="w-full sticky top-0 z-40 h-full bg-white">
      <section className="flex justify-between items-center w-full max-w-[1600px] px-[30px] md:px-[50px] mx-auto py-5 transition-all ease-in-out">
        <div aria-label="Logo" className="flex items-center">
          <img
            width={319}
            height={30}
            src={Logo.src}
            alt="Logo Poseidonia"
            title=" Logo Poseidonia"
            className="justify-center w-[200px] sm:w-[319px]">
          </img>
        </div>
        <SwitchLang url={url} />
      </section>
    </header>
  );
}