import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
}

const NavAnimation = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("noscroll")
    } else {
      document.body.classList.remove("noscroll")
    }
  }, [isOpen])

  return (
    <>
      <div className="dma-mobile-menu-bars ml-auto" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <FontAwesomeIcon icon={icon({ name: "bars" })} />
      </div>
      <motion.div className="dma-mobile-menu-container" animate={isOpen ? "open" : "closed"} variants={variants}>
        <div className="dma-mobile-menu-container__close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
          <FontAwesomeIcon icon={icon({ name: "times" })} />
        </div>
        {children}
        {/* {isOpen} */}
      </motion.div>
    </>
  )
}

export default NavAnimation
