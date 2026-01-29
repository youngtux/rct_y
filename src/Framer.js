
import { motion, Variants } from "framer-motion"
import PathDrawing from "./Framer_PathDrawing"

export default function Motions() {
    return (
      <dev>
        <h4> Gestures - 클릭해 보세요. </h4>
        <Gestures></Gestures>    
        <h4> Darg Morion - 움직여 보세요. </h4>
        <Drag></Drag> 
        <h4> PathDrawing </h4>
        <PathDrawing>/</PathDrawing>    
      </dev>
    )
}

// Drag
function Drag() {
    return <motion.div drag style={box1} />
}
const box1 = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: 10,
}

// Gestures
function Gestures() {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box2}
        />
    )
}

/**
 * ==============   Styles   ================
 */

const box2 = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
}