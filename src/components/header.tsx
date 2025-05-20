"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavItem {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
  },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/logo/2.png"
            alt="TawiTech Africa Logo"
            width={160}
            height={40}
            className="h-10 w-40"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.href}>
                <DropdownMenuTrigger
                  className={`flex items-center hover:text-foreground/80 transition-colors ${
                    pathname.startsWith(item.href) ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.href} asChild>
                      <Link href={child.href}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right: Google Login + Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t"
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <div key={item.href}>
                    {item.children ? (
                      <div className="space-y-2">
                        <div className="font-medium text-foreground">
                          {item.label}
                        </div>
                        <div className="pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                          {item.children.map((child) => (
                            <FadeIn
                              key={child.href}
                              delay={index * 0.05 + 0.1}
                              direction="right"
                            >
                              <Link
                                href={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block py-1 transition-colors hover:text-foreground/80 ${
                                  pathname === child.href ? "text-primary" : ""
                                }`}
                              >
                                {child.label}
                              </Link>
                            </FadeIn>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <FadeIn key={item.href} delay={index * 0.05} direction="right">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-2 transition-colors hover:text-foreground/80 ${
                            pathname === item.href ? "text-primary font-medium" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </FadeIn>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}