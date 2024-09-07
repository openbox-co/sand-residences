import { motion } from 'framer-motion'

interface Props {
  children?: React.ReactNode
}

export default function ContentMotion({ children }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeOut', duration: 0.8 }}>
      {children}
    </motion.section>
  )
}