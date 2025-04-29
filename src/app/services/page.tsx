import Link from "next/link"
import { ArrowRight, Database, Globe, LayoutGrid, MessageSquare, Shield, Smartphone, Cpu, Cloud } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"

export default function ServicesPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a comprehensive range of software development and IT services to help your business thrive in
                  the digital age.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              <FadeIn>
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Custom Software Development</h2>
                <StaggerChildren className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="rounded-full bg-primary/10 p-4">
                      <LayoutGrid className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Enterprise Software</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Custom enterprise solutions that streamline operations, improve efficiency, and drive growth.
                    </p>
                    <Link href="/services/custom-software/enterprise" className="mt-2 text-primary hover:underline">
                      Learn more <ArrowRight className="inline h-4 w-4" />
                    </Link>
                  </div>
                  <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Mobile Applications</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Native and cross-platform mobile apps for iOS and Android that engage your customers.
                    </p>
                    <Link href="/services/custom-software/mobile" className="mt-2 text-primary hover:underline">
                      Learn more <ArrowRight className="inline h-4 w-4" />
                    </Link>
                  </div>
                  <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Legacy System Modernization</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Update and transform your legacy systems to modern, scalable architectures.
                    </p>
                    <Link href="/services/custom-software/modernization" className="mt-2 text-primary hover:underline">
                      Learn more <ArrowRight className="inline h-4 w-4" />
                    </Link>
                  </div>
                </StaggerChildren>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Web Development</h2>
                <StaggerChildren className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Responsive Websites</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Modern, responsive websites that look great on any device and drive conversions.
                    </p>
                    <Link href="/services/web-development/websites" className="mt-2 text-primary hover:underline">
                      Learn more <ArrowRight className="inline h-4 w-4" />
                    </Link>
                  </div>
                  <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Cloud className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Web Applications</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Complex web applications with rich functionality and seamless user experiences.
                    </p>
                    <Link href="/services/web-development/applications" className="mt-2 text-primary hover:underline">
                      Learn more <ArrowRight className="inline h-4 w-4" />
                    </Link>
                  </div>
                  <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Cloud className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">E-commerce Solutions</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Custom e-commerce platforms that drive sales and provide exceptional customer experiences.
                    </p>
                    <Link href="/services/web-development/ecommerce" className="mt-2 text-primary hover:underline">
                      Learn more <ArrowRight className="inline h-4 w-4" />
                    </Link>
                  </div>
                </StaggerChildren>
              </FadeIn>

              <FadeIn delay={0.4}>
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">IT Services</h2>
                <StaggerChildren className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Database Solutions</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Design, migration, and optimization of databases for improved performance and reliability.
                    </p>
                    <Link href="/services/database-solutions" className="mt-2 text-primary hover:underline">
                      Learn more <ArrowRight className="inline h-4 w-4" />
                    </Link>
                  </div>
                  <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Cybersecurity</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Comprehensive security solutions to protect your business from threats and vulnerabilities.
                    </p>
                    <Link href="/services/cybersecurity" className="mt-2 text-primary hover:underline">
                      Learn more <ArrowRight className="inline h-4 w-4" />
                    </Link>
                  </div>
                  <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
                    <div className="rounded-full bg-primary/10 p-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">IT Consulting</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Strategic technology consulting to help you make informed decisions and optimize your IT
                      investments.
                    </p>
                    <Link href="/services/it-consulting" className="mt-2 text-primary hover:underline">
                      Learn more <ArrowRight className="inline h-4 w-4" />
                    </Link>
                  </div>
                </StaggerChildren>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Process</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We follow a proven methodology to ensure the success of your project.
                </p>
              </div>
            </FadeIn>
            <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Discovery</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We work closely with you to understand your business goals and requirements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Planning</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We create a detailed project plan with timelines, milestones, and deliverables.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our expert team builds your solution using the latest technologies and best practices.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-bold">Delivery & Support</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We deploy your solution and provide ongoing support and maintenance.
                </p>
              </div>
            </StaggerChildren>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <FadeIn direction="right" className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to discuss your project?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Contact us today to schedule a free consultation with our experts.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="flex gap-4 lg:justify-end">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
