"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement newsletter signup functionality
    console.log("Newsletter signup")
  }

  return (
    <footer className="w-full border-t bg-gray-50 dark:bg-gray-900 justify-center items-center ml-5">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <img src={'/images/logo/3.png'} className="h-10 w-10 text-primary" />
              </motion.div>
              <span className="font-bold text-xl">TawiTech Africa</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 mb-4 max-w-md">
              We build custom software solutions that help businesses streamline operations, improve efficiency, and
              drive growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-500 dark:text-gray-400">
                  123 Tech Street, Suite 456, San Francisco, CA 94107
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-500 dark:text-gray-400">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-500 dark:text-gray-400">info@techsolutions.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/custom-software"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-development"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/database-solutions"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Database Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-consulting"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              © {"2025"} TawiTech Africa LTD. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </motion.div>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </motion.div>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </motion.div>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </motion.div>
              </Link>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
