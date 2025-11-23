import useWindowStore from "#store/window.js";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const windowState = windows[windowKey];

    if (!windowState) return null;

    const { isOpen, zIndex, isMinimized, isMaximized } = windowState;
    const ref = useRef(null);

    // Handle Open/Close Animation
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized) return;

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen, isMinimized]);

    // Handle Draggable
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      // Kill previous instance if exists to prevent duplicates
      const existingDraggable = Draggable.get(el);
      if (existingDraggable) existingDraggable.kill();

      if (isMaximized) return; // Disable drag when maximized

      const [instance] = Draggable.create(el, {
        type: "x,y",
        bounds: "main", // Constrain to main container
        inertia: true,
        trigger: ".drag-handle", // Only drag when clicking the header
        onPress: () => focusWindow(windowKey),
        allowContextMenu: true,
        dragClickables: true, // Allow clicking buttons inside
      });

      return () => {
        if (instance) instance.kill();
      };
    }, [isMaximized, isOpen]); // Re-create when maximized state changes

    // Handle Minimized State
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (isMinimized) {
        gsap.to(el, { scale: 0, opacity: 0, y: 100, duration: 0.3, ease: "power2.in" });
      } else {
        gsap.to(el, { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
      }
    }, [isMinimized]);

    // Handle Maximized State
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (isMaximized) {
        gsap.to(el, {
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          x: 0,
          y: 0,
          borderRadius: 0,
          duration: 0.3,
          ease: "power2.inOut"
        });
      } else {
        // Reset to initial size/position (simplified for now, ideally should revert to previous rect)
        gsap.to(el, {
          width: "auto",
          height: "auto",
          borderRadius: "0.75rem", // rounded-xl
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
    }, [isMaximized]);


    if (!isOpen) return null;

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex, position: 'absolute' }}
        // Initial position: slightly left, not centered. 
        // top-20 left-20 is a good starting point for "professional" look
        className={`absolute top-24 left-24 shadow-2xl rounded-xl overflow-hidden bg-[#1c1c1e] border border-[#3a3a3c] ${isMinimized ? 'pointer-events-none' : ''}`}
        onMouseDown={() => focusWindow(windowKey)}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
