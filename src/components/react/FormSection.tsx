import { motion } from "framer-motion";
import Image1 from "@/assets/Image1.webp"
import Image2 from "@/assets/Image2.webp"
import Image3 from "@/assets/Image3.webp"
import { getLangFromUrl, useTranslations } from "@/utils/i18n";

interface FormSectionProps {
  url: URL
}

export default function FormSection({ url }: FormSectionProps) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ opacity: 2, x: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] mt-10 transition-all ease-in-out">
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <section className="flex flex-col justify-center h-fit">
          <h1
            style={{
              fontSize: "clamp(42px, 3vw, 50px)",
              lineHeight: "clamp(48px, 3vw, 58px)",
            }}
            className="font-bold max-w-xl font-primary"
          >
            {t('title')} <span className="text-blueBroker">Poseidonia</span> Residences <span className="text-blueBroker">Cana Bay</span>
          </h1>
          <iframe
            loading="lazy"
            id="myIframe"
            src="https://realbroker.alterestate.com/formulario-residencia-poseidonia"
            width="550px"
            height="480px"
            title="Poseidonia Form"
            className="min-w-[280px] w-fit md:w-[420px] xl:w-[550px] border rounded-[22px] border-[#0000000F] transition-all ease-in-out mt-5"
          ></iframe>
        </section>
        <section className="flex md:justify-center lg:justify-start">
          <section className="flex gap-x-5">
            <section className="flex flex-col gap-y-5">
              <img src={Image1.src} alt="Image1" title="Image1" className="rounded-[20px]" />
              <img src={Image2.src} alt="Imag2" title="Image2" className="rounded-[20px]" />
            </section>
            <section className="my-auto">
              <img src={Image3.src} alt="Image3" title="Image3" className="rounded-[20px]" />
            </section>
          </section>
        </section>
      </section>
    </motion.section>
  )
}