
import { motion } from "framer-motion";

// framer-motion
function Drag() {
    return <motion.div drag style={box} />
}
const box = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: 10,
}

export default function Motions() {
    return (
      <Drag></Drag> 
    )
}