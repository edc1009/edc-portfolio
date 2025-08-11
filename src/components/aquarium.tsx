"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Fish } from "lucide-react";

interface TennisBall {
  id: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  size: number;
  color: string;
  opacity: number;
  gravity: number;
  bounce: number;
}

const ballColors = [
  "#B8B894", // Muted Yellow
  "#8FA68E", // Muted Green
  "#C4A5A0", // Muted Red
  "#9BB5B0", // Muted Teal
  "#A4B5C4", // Muted Blue
  "#C4A584", // Muted Orange
];

interface AquariumProps {
  isActive: boolean;
}

export const Aquarium = ({ isActive }: AquariumProps) => {
  const [balls, setBalls] = useState<TennisBall[]>([]);

  useEffect(() => {
    if (!isActive) {
      setBalls([]);
      return;
    }

    // Create initial tennis balls
    const initialBalls: TennisBall[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * (window.innerWidth - 100) + 50,
      y: Math.random() * (window.innerHeight - 200) + 100,
      velocityX: (Math.random() - 0.5) * 8,
      velocityY: Math.random() * -5 - 2,
      size: 20 + Math.random() * 15,
      color: ballColors[Math.floor(Math.random() * ballColors.length)],
      opacity: 0.8 + Math.random() * 0.2,
      gravity: 0.3 + Math.random() * 0.2,
      bounce: 0.7 + Math.random() * 0.2,
    }));

    setBalls(initialBalls);

    // Animation loop
    const animate = () => {
      if (!isActive) return;

      setBalls(prev => prev.map(ball => {
        let newX = ball.x + ball.velocityX;
        let newY = ball.y + ball.velocityY;
        let newVelocityX = ball.velocityX;
        let newVelocityY = ball.velocityY + ball.gravity; // Apply gravity

        // Bounce off left and right walls
        if (newX <= ball.size/2 || newX >= window.innerWidth - ball.size/2) {
          newVelocityX = -newVelocityX * ball.bounce;
          newX = newX <= ball.size/2 ? ball.size/2 : window.innerWidth - ball.size/2;
        }

        // Bounce off top and bottom
        if (newY <= ball.size/2 || newY >= window.innerHeight - ball.size/2) {
          newVelocityY = -newVelocityY * ball.bounce;
          newY = newY <= ball.size/2 ? ball.size/2 : window.innerHeight - ball.size/2;
          
          // Add some randomness to prevent balls from getting stuck
          if (Math.abs(newVelocityY) < 1) {
            newVelocityY = (Math.random() - 0.5) * 4;
          }
        }

        // Apply air resistance
        newVelocityX *= 0.999;
        
        return {
          ...ball,
          x: newX,
          y: newY,
          velocityX: newVelocityX,
          velocityY: newVelocityY,
        };
      }));

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isActive]);

  const renderBall = (ball: TennisBall) => {
    const style = {
      position: "fixed" as const,
      left: `${ball.x}px`,
      top: `${ball.y}px`,
      transform: `translate(-50%, -50%)`,
      opacity: ball.opacity,
      zIndex: 1000,
      pointerEvents: "none" as const,
    };

    return (
      <div key={ball.id} style={style}>
        <svg
          width={ball.size}
          height={ball.size}
          viewBox="0 0 100 100"
        >
          {/* Tennis ball base */}
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill={ball.color}
          />
          {/* Tennis ball curved lines */}
          <path 
            d="M 20 30 Q 50 10 80 30" 
            stroke="white" 
            strokeWidth="3" 
            fill="none"
          />
          <path 
            d="M 20 70 Q 50 90 80 70" 
            stroke="white" 
            strokeWidth="3" 
            fill="none"
          />
          {/* Shadow/highlight for 3D effect */}
          <circle 
            cx="40" 
            cy="35" 
            r="8" 
            fill="rgba(255,255,255,0.3)"
          />
        </svg>
      </div>
    );
  };

  return (
    <>
      {/* Bouncing Tennis Balls */}
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {balls.map(renderBall)}
        </div>
      )}
    </>
  );
};