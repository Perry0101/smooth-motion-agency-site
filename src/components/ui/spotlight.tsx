'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
  fill?: string;
};

export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
  fill = "white"
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', () => setIsHovered(true));
    parentElement.addEventListener('mouseleave', () => setIsHovered(false));

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
      parentElement.removeEventListener('mouseleave', () =>
        setIsHovered(false)
      );
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full transition-opacity duration-200',
        'bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.4),rgba(59,130,246,0.2),transparent_70%)]',
        isHovered ? 'opacity-100' : 'opacity-60',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        filter: 'blur(40px)',
      }}
    />
  );
} 