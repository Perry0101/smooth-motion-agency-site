
import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";


const COLORS_TOP = ["#3b82f6", "#1e40af", "#6366f1", "#8b5cf6"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      id="home"
      style={{
        backgroundImage,
        pointerEvents: 'auto',
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center" style={{ pointerEvents: 'auto' }}>
        <span className="mb-1.5 inline-block rounded-full bg-primary/20 border border-primary/30 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
          🚀 Agência Digital
        </span>
        <h1 className="max-w-4xl bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-center text-3xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Transformamos ideias em
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"> soluções digitais</span>
        </h1>
        <p className="my-8 max-w-2xl text-center text-base leading-relaxed text-gray-300 md:text-xl md:leading-relaxed">
          Desenvolvimento web, mobile e APIs modernas. Criamos experiências digitais que 
          conectam sua empresa ao futuro da tecnologia com inovação e excelência.
        </p>
        
        {/* Project Showcase */}
        <div className="mt-12 mb-16 max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <img 
              src="/lovable-uploads/0ae4dff3-404a-44f3-bfd5-9529ecb09762.png" 
              alt="OnlineJobHub Logo" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-gray-400">Projetos Entregues</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-primary">99%</div>
            <div className="text-sm text-gray-400">Satisfação do Cliente</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-gray-400">Suporte Técnico</div>
          </div>
        </div>
      </div>

      {/* CSS Stars Background */}
      <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <div className="stars-container" style={{ pointerEvents: 'none' }}>
          {Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
                pointerEvents: 'none'
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}; 
