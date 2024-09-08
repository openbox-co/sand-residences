import { motion } from 'framer-motion'

interface Props {
  children?: React.ReactNode
  sx?: string
}

export default function ContentMotion({ children, sx }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ opacity: 2, x: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={sx}
    >
      {children}
    </motion.section>
  )
}