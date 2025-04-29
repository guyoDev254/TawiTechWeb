import Link from "next/link"
import { Code, Calendar, User, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold">TechSolutions</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/services" className="transition-colors hover:text-foreground/80">
                Services
              </Link>
              <Link href="/about" className="transition-colors hover:text-foreground/80">
                About Us
              </Link>
              <Link href="/case-studies" className="transition-colors hover:text-foreground/80">
                Case Studies
              </Link>
              <Link href="/blog" className="transition-colors hover:text-foreground/80 text-primary">
                Blog
              </Link>
              <Link href="/contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Insights, tips, and news from our team of technology experts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border overflow-hidden bg-background">
                <Image
                  fill
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog Post 1"
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>June 12, 2023</span>
                    <span className="mx-1">•</span>
                    <User className="h-4 w-4" />
                    <span>John Smith</span>
                  </div>
                  <h3 className="text-xl font-bold">The Future of Web Development: Trends to Watch in 2023</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Explore the emerging technologies and methodologies that are shaping the future of web development.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs mr-1">
                      Web Development
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs">Trends</span>
                  </div>
                  <Link href="/blog/future-web-development" className="mt-4 text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border overflow-hidden bg-background">
                <Image
                  fill
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog Post 2"
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>May 28, 2023</span>
                    <span className="mx-1">•</span>
                    <User className="h-4 w-4" />
                    <span>Sarah Johnson</span>
                  </div>
                  <h3 className="text-xl font-bold">Securing Your Web Applications: Best Practices</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Learn essential security measures to protect your web applications from common vulnerabilities.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs mr-1">Security</span>
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs">
                      Web Development
                    </span>
                  </div>
                  <Link href="/blog/securing-web-applications" className="mt-4 text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border overflow-hidden bg-background">
                <Image
                  fill
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog Post 3"
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>May 15, 2023</span>
                    <span className="mx-1">•</span>
                    <User className="h-4 w-4" />
                    <span>Michael Chen</span>
                  </div>
                  <h3 className="text-xl font-bold">The Rise of Microservices Architecture</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Discover how microservices architecture is transforming software development and deployment.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs mr-1">
                      Architecture
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs">Microservices</span>
                  </div>
                  <Link href="/blog/microservices-architecture" className="mt-4 text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border overflow-hidden bg-background">
                <Image
                  fill
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog Post 4"
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>April 30, 2023</span>
                    <span className="mx-1">•</span>
                    <User className="h-4 w-4" />
                    <span>Emily Rodriguez</span>
                  </div>
                  <h3 className="text-xl font-bold">Optimizing Database Performance for Web Applications</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Tips and strategies for improving database performance in high-traffic web applications.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs mr-1">Database</span>
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs">Performance</span>
                  </div>
                  <Link href="/blog/database-performance" className="mt-4 text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border overflow-hidden bg-background">
                <Image
                  fill
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog Post 5"
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>April 15, 2023</span>
                    <span className="mx-1">•</span>
                    <User className="h-4 w-4" />
                    <span>David Wilson</span>
                  </div>
                  <h3 className="text-xl font-bold">Implementing Effective CI/CD Pipelines</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    A guide to setting up continuous integration and deployment pipelines for faster, more reliable
                    software delivery.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs mr-1">DevOps</span>
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs">CI/CD</span>
                  </div>
                  <Link href="/blog/cicd-pipelines" className="mt-4 text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border overflow-hidden bg-background">
                <Image
                  fill
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog Post 6"
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>March 28, 2023</span>
                    <span className="mx-1">•</span>
                    <User className="h-4 w-4" />
                    <span>Lisa Thompson</span>
                  </div>
                  <h3 className="text-xl font-bold">The Impact of AI on Software Development</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Exploring how artificial intelligence is changing the landscape of software development.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs mr-1">AI</span>
                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 text-xs">
                      Software Development
                    </span>
                  </div>
                  <Link href="/blog/ai-software-development" className="mt-4 text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Stay up-to-date with the latest technology trends, insights, and news from our experts.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="sm:w-auto">Subscribe</Button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Newsletter"
                  className="rounded-xl object-cover"
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
