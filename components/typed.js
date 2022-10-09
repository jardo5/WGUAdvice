import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function AutoType() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Welcome, to WGU Advice...",
        "For <span style='color: purple'>BSSD</span> and <span style='color: purple'>BSCS</span> students...",
      ],
    
      typeSpeed: 75,
      backSpeed: 50,
      backDelay: 3000,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      {/* Element to display typing strings */}
      <span ref={el}></span>
    </div>
  );
}