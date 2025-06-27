"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.url)).filter(Boolean)
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          const correspondingItem = items.find(item => item.url === section.id)
          if (correspondingItem && correspondingItem.name !== activeTab) {
            setActiveTab(correspondingItem.name)
          }
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items, activeTab])

  const scrollToSection = (sectionId: string, itemName: string) => {
    setActiveTab(itemName)
    
    // Special handling for home section
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 sm:top-6 left-1/2 -translate-x-1/2 z-40",
        className,
      )}
      style={{ pointerEvents: 'auto' }}
    >
      <div 
        className="flex items-center gap-1 bg-background/15 border border-border/30 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl ring-1 ring-white/10"
        style={{ pointerEvents: 'auto' }}
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.url, item.name)}
              className={cn(
                "relative cursor-pointer text-xs md:text-sm font-semibold px-3 md:px-5 py-2 md:py-3 rounded-full transition-all duration-300",
                "text-foreground/70 hover:text-foreground hover:scale-105",
                isActive && "text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/15 rounded-full -z-10 border border-primary/30"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  {/* Enhanced Tubelight effect */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-2 bg-gradient-to-b from-primary to-primary/80 rounded-t-full shadow-[0_0_25px_rgba(59,130,246,0.9)]">
                    {/* Multiple glow layers for more realistic effect */}
                    <div className="absolute w-16 h-8 bg-primary/40 rounded-full blur-xl -top-4 -left-3" />
                    <div className="absolute w-12 h-6 bg-primary/50 rounded-full blur-lg -top-3 -left-1" />
                    <div className="absolute w-8 h-3 bg-primary/60 rounded-full blur-md -top-2 left-1" />
                    <div className="absolute w-4 h-2 bg-primary/80 rounded-full blur-sm -top-1 left-3" />
                  </div>
                  
                  {/* Enhanced glow effect around the active item */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-primary/15 to-transparent rounded-full" />
                  
                  {/* Additional subtle inner glow */}
                  <div className="absolute inset-1 bg-gradient-to-t from-primary/10 to-transparent rounded-full" />
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
} 