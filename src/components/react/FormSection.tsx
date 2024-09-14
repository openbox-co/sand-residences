import Image1 from "@/assets/Image1.webp";
import Image2 from "@/assets/Image2.webp";
import Image3 from "@/assets/Image3.webp";
import { getLangFromUrl, useTranslations } from "@/utils/i18n";

interface FormSectionProps {
  url: URL
}

export default function FormSection({ url }: FormSectionProps) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  return (
    <section
      className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] mt-10 transition-all ease-in-out">
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <section className="flex flex-col justify-center h-fit">
          <h1
            style={{
              fontSize: "clamp(32px, 3vw, 48px)",
              lineHeight: "clamp(32px, 3vw, 48px)",
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
            className="min-w-[280px] w-full md:w-[420px] xl:w-[550px] border rounded-[22px] border-[#0000000F] transition-all ease-in-out mt-5"
          ></iframe>
        </section>
        <section className="flex md:justify-center lg:justify-start">
          <section className="flex gap-x-5">
            <section className="flex flex-col gap-y-5">
              <img src={Image1.src} width='auto' height='auto' alt="Poseidonia residenciales" title="Poseidonia residenciales" className="rounded-[20px]" />
              <img src={Image2.src} width='auto' height='auto' alt="Poseidonia precios" title="Poseidonia precios" className="rounded-[20px]" />
            </section>
            <section className="my-auto">
              <img src={Image3.src} width='auto' height='auto' alt="Poseidonia cana bay" title="Poseidonia cana bay" className="rounded-[20px]" />
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}