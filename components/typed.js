import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function AutoType() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Welcome, to WGU Advice...",
        "For BSSD and BSCS students...",
      ],
    
      typeSpeed: 75,
      backSpeed: 50,
      backDelay: 3000,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el}></span>
    </div>
  );
}