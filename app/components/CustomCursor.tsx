"use client";
import React, { useEffect, useState } from "react";

const shapes = ["star", "circle", "triangle", "square"]; // Cycle through these shapes

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hovering, setHovering] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [shapeIndex, setShapeIndex] = useState<number>(0);
  const [isHeld, setIsHeld] = useState<boolean>(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const handleHover = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && (e.target.tagName === "A" || e.target.tagName === "BUTTON")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mouseover", handleHover);
    return () => window.removeEventListener("mouseover", handleHover);
  }, []);

  useEffect(() => {
    const rotate = () => {
      setRotation((prev) => (prev + 2) % 360); // Continuous spin
      requestAnimationFrame(rotate);
    };
    rotate();
  }, []);

  useEffect(() => {
    const handleClick = () => {
      setShapeIndex((prev) => (prev + 1) % shapes.length); // Cycle through shapes
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsHeld(true);
    };

    const handleMouseUp = () => {
      setIsHeld(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 transition-transform duration-100 ease-out pointer-events-none"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${rotation}deg) scale(${hovering ? 1.5 : isHeld ? 2 : 1})`,
      }}
    >
      {shapes[shapeIndex] === "star" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" className="fill-green-400" />
        </svg>
      )}

      {shapes[shapeIndex] === "circle" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" className="fill-green-400" />
        </svg>
      )}

      {shapes[shapeIndex] === "triangle" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12,4 2,20 22,20" className="fill-green-400" />
        </svg>
      )}

      {shapes[shapeIndex] === "square" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="16" height="16" className="fill-green-400" />
        </svg>
      )}
    </div>
  );
};

export default CustomCursor;
