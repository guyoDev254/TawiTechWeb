"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import Image from "next/image"

interface Partner {
  name: string
  logo: string
}

interface PartnersSectionProps {
  title?: string
  description?: string
  partners: Partner[]
}

export function PartnersSection({
  title = "Trusted by Industry Leaders",
  description = "We're proud to work with some of the world's most innovative companies.",
  partners,
}: PartnersSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {description}
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={48}
                className="max-h-12 w-auto grayscale transition-all duration-200 hover:grayscale-0"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
