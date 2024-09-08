import { motion } from "framer-motion";

export default function FormSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ opacity: 2, x: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="max-w-[1600px] mx-auto px-[30px] md:px-[50px] transition-all ease-in-out">
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <section className="flex flex-col justify-center h-fit">
          <h1
            style={{
              fontSize: "clamp(42px, 3vw, 50px)",
              lineHeight: "clamp(48px, 3vw, 58px)",
            }}
            className="font-bold max-w-xl font-primary"
          >
            Tu Santuario de Lujo, <span className="text-blueBroker">Poseidonia</span> Residences <span className="text-blueBroker">Cana Bay</span>
          </h1>
        </section>
        <section className="flex md:justify-center lg:justify-start">
          <section className="flex gap-x-5">
            <section className="flex flex-col gap-y-5">
              <img src="../assets/images/FormImg1.svg" alt="Image1" title="Image1" className="justify-center rounded-[20px]" />
              <img src="../assets/images/FormImg2.svg" alt="Imag2" title="Image2" className="justify-center rounded-[20px]" />
            </section>
            <section className="my-auto">
              <img src="../assets/images/FormImg3.svg" alt="Image3" title="Image3" className="justify-center rounded-[20px]" />
            </section>
          </section>
        </section>
      </section>
    </motion.section>
  )
}