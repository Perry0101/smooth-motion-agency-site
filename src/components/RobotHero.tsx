'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useState, useEffect } from 'react';
 
export function RobotHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);



  return (
    <Card className="w-full h-[600px] md:h-[700px] bg-black/[0.96] relative overflow-hidden border-border robot-glow">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 animate-spotlight"
        size={500}
      />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-6 md:p-8 lg:p-12 relative z-10 flex flex-col justify-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-6 leading-tight">
              Tecnologia do
              <br />
              <span className="text-primary animate-pulse-slow">Futuro</span>
            </h1>
            <p className="mt-4 text-gray-300 max-w-lg text-base md:text-lg leading-relaxed mb-8">
              Criamos experiências digitais revolucionárias que conectam sua empresa 
              ao futuro da tecnologia. Desenvolvimento web, mobile e IA de ponta.
            </p>
            

          </div>
        </div>

        {/* Right content - Robot */}
        <div className="flex-1 relative min-h-[300px] lg:min-h-full">
          <div className={`w-full h-full transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20 pointer-events-none" />
          
          {/* Glow effect around robot */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50 pointer-events-none" />
        </div>
      </div>
      
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      {/* Side glow effects */}
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent transform -translate-y-1/2" />
    </Card>
  )
} 