"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  width?: "full" | "fit"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
}

export function Reveal({
  children,
  width = "fit",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  threshold = 0.1,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && currentRef) {
            observer.unobserve(currentRef)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  return (
    <div ref={ref} className={`relative overflow-hidden ${width === "full" ? "w-full" : "w-fit"} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ left: 0 }}
        animate={isVisible ? { left: "100%" } : { left: 0 }}
        transition={{ duration: duration * 0.6, delay, ease: "easeInOut" }}
        className="absolute inset-0 bg-primary z-10"
      />
    </div>
  )
}