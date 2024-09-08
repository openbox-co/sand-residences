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
        <a href='/' className="flex items-center">
          <img
            width={319}
            height={30}
            src="../assets/Logo.svg"
            alt="Poseidonia"
            title="Poseidonia"
            className="justify-center">
          </img>
        </a>
        <SwitchLang url={url} />
      </section>
    </motion.header>
  );
}