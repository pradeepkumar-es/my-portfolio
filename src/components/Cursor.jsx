import { usePointerPosition } from "../hooks/usePointerPosition";
import {useDelayedPointerPosition} from "../hooks/useDelayedPointerPosition";
export function Cursor() {
    const pos1 = usePointerPosition();
    const pos2 = useDelayedPointerPosition(pos1, 100);
    const pos3 = useDelayedPointerPosition(pos2, 200);
    const pos4 = useDelayedPointerPosition(pos3, 100);
    const pos5 = useDelayedPointerPosition(pos4, 100);
  return (
    <>
      <Dot position={pos1}  opacity={0.5}/>
      <Dot position={pos2} opacity={0.4}/>
      <Dot position={pos3} opacity={0.3}/>
      <Dot position={pos4} opacity={0.2}/>
      <Dot position={pos5} opacity={0.1}/>
    </>
  );
}
function Dot({position, opacity}) {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        borderRadius: "50%",
        backgroundColor: "white",
        height: 25,
        width: 25,
        opacity,
        zIndex: 9999,
        pointerEvents: "none",
        transform: `translate(calc(${position.x}px - 12.5px), calc(${position.y}px - 12.5px))`,
        willChange: "transform",
      }}
    ></div>
  );
}
