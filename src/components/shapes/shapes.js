import './shapes.css';
import React from 'react';
import { useSpring, animated } from '@react-spring/web'
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans2 = (x, y) => `translate3d(${x / 10}px,${y / 8}px,0)`
const trans3 = (x, y) => `translate3d(${x / 14}px,${y / 8}px,0)`
const trans4 = (x, y) => `translate3d(${x / 16}px,${y / 10}px,0)`
const trans5 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`
const trans6 = (x, y) => `translate3d(${x / 10}px,${y / 12}px,0)`
const trans7 = (x, y) => `translate3d(${x / 7}px,${y / 10}px,0)`
function Shapes() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 30, tension: 550, friction: 140 } }))
  return (
    <div className="shape_container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <div className="shape_big_item shape_item"></div>
        <div className="shape_small_item shape_item"><animated.div className="obj1 obj" style={{ transform: props.xy.interpolate(trans2) }}></animated.div></div>
        <div className="shape_small_item shape_item"><animated.div className="obj2 obj" style={{ transform: props.xy.interpolate(trans3) }}></animated.div></div>
        <div className="shape_small_item shape_item"><animated.div className="obj3 obj" style={{ transform: props.xy.interpolate(trans4) }}></animated.div></div>
        <div className="shape_small_item shape_item"><animated.div className="obj4 obj" style={{ transform: props.xy.interpolate(trans5) }}></animated.div></div>
        <div className="shape_small_item shape_item"><animated.div className="obj5 obj" style={{ transform: props.xy.interpolate(trans6) }}></animated.div></div>
        <div className="shape_small_item shape_item"><animated.div className="obj6 obj" style={{ transform: props.xy.interpolate(trans7) }}></animated.div></div>
    </div>
  );
}

export default Shapes;
