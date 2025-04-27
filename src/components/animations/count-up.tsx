"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

interface CountUpProps {
  from: number
  to: number
  duration?: number
  delay?: number
  className?: string
  once?: boolean
  threshold?: number
  formatter?: (value: number) => string
}

export function CountUp({
  from,
  to,
  duration = 2,
  delay = 0,
  className = "",
  once = true,
  threshold = 0.1,
  formatter = (value) => Math.round(value).toString(),
}: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const [hasAnimated, setHasAnimated] = useState(false)

  const count = useMotionValue(from)
  const smoothCount = useSpring(count, { duration: duration * 1000 })
  const [displayValue, setDisplayValue] = useState(formatter(from))

  useEffect(() => {
    if (isInView && !hasAnimated) {
      count.set(to)
      setHasAnimated(true)
    }
  }, [isInView, count, to, hasAnimated])

  useEffect(() => {
    const unsubscribe = smoothCount.onChange((latest) => {
      setDisplayValue(formatter(latest))
    })
    return unsubscribe
  }, [smoothCount, formatter])

  return (
    <motion.div ref={ref} className={className}>
      {displayValue}
    </motion.div>
  )
}
