import { motion } from "framer-motion";
import SwitchLang from "./SwitchLang";

interface Props {
  url: URL;
}

export default function Navbar({ url }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeOut', duration: 0.8 }}
      className="w-full sticky top-0 z-40 h-full bg-white">
      <section className="flex justify-between items-center w-full max-w-[1600px] px-[30px] md:px-[50px] mx-auto py-5 transition-all ease-in-out">
        {/* encontrarme */}
        <div aria-label="Logo" className="flex items-center">
          <img
            width={319}
            height={30}
            src="../assets/Logo.svg"
            alt="Logo Poseidonia"
            title=" Logo Poseidonia"
            className="justify-center w-[200px] sm:w-[319px]">
          </img>
        </div>
        <SwitchLang url={url} />
      </section>
    </motion.header>
  );
}