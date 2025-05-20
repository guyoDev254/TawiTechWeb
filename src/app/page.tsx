import Link from "next/link"
import { ArrowRight, CheckCircle, Database, Globe, LayoutGrid, MessageSquare, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { Reveal } from "@/components/animations/reveal"
import { FAQSection } from "@/components/sections/faq-section"

export default function Home() {
  // Sample FAQ data
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with businesses of all sizes across various industries, including healthcare, finance, e-commerce, education, and more. Our solutions are tailored to meet the specific needs of each client, regardless of their size or sector.",
    },
    {
      question: "How long does a typical software development project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take several months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow an agile development methodology, which allows for flexible, iterative development with regular client feedback. Our process typically includes discovery, planning, design, development, testing, deployment, and ongoing support phases.",
    },
    {
      question: "Do you provide ongoing support after the project is completed?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your software continues to run smoothly after launch. These can include bug fixes, security updates, performance optimization, and feature enhancements.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "We offer flexible pricing models including fixed-price, time and materials, and retainer options. The pricing structure depends on project requirements, complexity, and timeline. We provide detailed quotes after understanding your specific needs.",
    },
  ]


  return (
    <div className="flex flex-col min-h-screen items-center">
      
      <main className="flex-1">
        <section className="w-full py-8 md:py-24 lg:py-32 xl:py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Reveal>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Innovative Software Solutions for Your Business
                    </h1>
                  </Reveal>
                  <FadeIn delay={0.2}>
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                      We build custom software solutions that help businesses streamline operations, improve efficiency,
                      and drive growth.
                    </p>
                  </FadeIn>
                </div>
                <FadeIn delay={0.4} className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="outline" className="px-8">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </FadeIn>
              </FadeIn>
              <FadeIn direction="left" delay={0.3} className="flex items-center justify-center">
                <img
                  alt="Hero Image"
                  className="rounded-xl object-cover h-88 w-full md:h-96 lg:h-[500px] xl:h-[600px]"
                  src="/images/Africa.jpg"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* <PartnersSection partners={partners} /> */}

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Software Solutions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a wide range of software development services to meet your business needs.
                </p>
              </div>
            </FadeIn>
            <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <LayoutGrid className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Custom Software Development</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Tailored software solutions designed to address your specific business challenges.
                </p>
                <Link href="/services/custom-software" className="mt-2 text-primary hover:underline">
                  Learn more
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Web Application Development</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Responsive and scalable web applications built with modern technologies.
                </p>
                <Link href="/services/web-development" className="mt-2 text-primary hover:underline">
                  Learn more
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Database Solutions</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Efficient database design, migration, and optimization services.
                </p>
                <Link href="/services/database-solutions" className="mt-2 text-primary hover:underline">
                  Learn more
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Cybersecurity Services</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Protect your business with our comprehensive security solutions.
                </p>
                <Link href="/services/cybersecurity" className="mt-2 text-primary hover:underline">
                  Learn more
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">IT Consulting</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Expert advice on technology strategy and implementation.
                </p>
                <Link href="/services/it-consulting" className="mt-2 text-primary hover:underline">
                  Learn more
                </Link>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI & Machine Learning</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Leverage the power of AI to gain insights and automate processes.
                </p>
                <Link href="/services/ai-machine-learning" className="mt-2 text-primary hover:underline">
                  Learn more
                </Link>
              </div>
            </StaggerChildren>
            <FadeIn className="mt-12 flex justify-center">
              <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </FadeIn>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Your Trusted Technology Partner
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    With over a decade of experience, we&apos;ve helped businesses of all sizes transform their operations
                    through innovative software solutions.
                  </p>
                </div>
                <StaggerChildren className="space-y-2" staggerDelay={0.1} delay={0.2}>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="text-gray-500 dark:text-gray-400">Expert team of developers and engineers</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="text-gray-500 dark:text-gray-400">Proven track record of successful projects</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="text-gray-500 dark:text-gray-400">Commitment to quality and client satisfaction</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Innovative solutions using cutting-edge technologies
                    </p>
                  </div>
                </StaggerChildren>
                <FadeIn delay={0.6} className="mt-4">
                  <Button asChild>
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </FadeIn>
              </FadeIn>
              <FadeIn direction="left" delay={0.3} className="flex items-center justify-center">
                <img
                  alt="Team Image"
                  className="rounded-xl object-cover"
                  src="/images/hero2.jpg"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Case Studies
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Success Stories</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how we&apos;ve helped businesses like yours achieve their goals.
                </p>
              </div>
            </FadeIn>
            <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border overflow-hidden">
                <img
                  
                  src="/images/ecommerce.jpg"
                  alt="Case Study 1"
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col p-6">
                  <h3 className="text-xl font-bold">E-commerce Platform Redesign</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    How we helped an online retailer increase conversions by 45% with a modern, user-friendly platform.
                  </p>
                  
                </div>
              </div>
              <div className="flex flex-col rounded-lg border overflow-hidden">
                <img
                  src="/images/healthcare.jpg"
                  alt="Case Study 2"
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col p-6">
                  <h3 className="text-xl font-bold">Healthcare Management System</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Developing a secure, HIPAA-compliant system that streamlined patient care for a major hospital.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border overflow-hidden">
                <img
                  src="/images/finance2.png"
                  alt="Case Study 3"
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col p-6">
                  <h3 className="text-xl font-bold">Financial Services API</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Creating a secure, high-performance API that processes over 1 million transactions daily.
                  </p>
                </div>
              </div>
            </StaggerChildren>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 mb-5">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <FadeIn direction="right" className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to transform your business?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let&apos;s discuss how our software solutions can help you achieve your goals.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="flex gap-4 lg:justify-end">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  )
}
