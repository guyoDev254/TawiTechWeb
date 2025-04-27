"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code, Menu, X, ChevronDown, Search, Moon, Sun, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

interface NavItem {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

const navItems: NavItem[] = [
  { href: "/", label: "Home"},
  { href: "/services", label: "Services"},
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
    setSearchOpen(false)
    setSearchQuery("")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="container flex h-16 items-center justify-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <img src='/images/logo/2.png' className="h-10 w-40 text-primary" />
            </motion.div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger
                    className={`flex items-center transition-colors hover:text-foreground/80 ${pathname.startsWith(item.href) ? "text-primary" : ""}`}
                  >
                    {item.label} <ChevronDown className="ml-1 h-4 w-4" />
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
                  className={`transition-colors hover:text-foreground/80 ${pathname === item.href ? "text-primary" : ""}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
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
                        <div className={`font-medium ${pathname.startsWith(item.href) ? "text-primary" : ""}`}>
                          {item.label}
                        </div>
                        <div className="pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                          {item.children.map((child) => (
                            <FadeIn key={child.href} delay={index * 0.05 + 0.1} direction="right">
                              <Link
                                href={child.href}
                                className={`block py-1 transition-colors hover:text-foreground/80 ${
                                  pathname === child.href ? "text-primary" : ""
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
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
                          className={`block py-2 transition-colors hover:text-foreground/80 ${
                            pathname === item.href ? "text-primary font-medium" : ""
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
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

      {/* Announcement Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <div className="container">
          <p>
            🚀 New service launch: AI-powered business analytics.{" "}
            <Link href="/services/ai-analytics" className="underline font-medium">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </header>
  )
}
