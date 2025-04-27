"use client";

import Link from "next/link";
import { CheckCircle, Users, Award, Clock, Lightbulb } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Reveal } from "@/components/animations/reveal";
import { CountUp } from "@/components/animations/count-up";
import { Header } from "@/components/header";

// Formatter functions
const plusFormatter = (value: number) => `${Math.round(value)}+`;
const percentFormatter = (value: number) => `${Math.round(value)}%`;

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
     
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <FadeIn direction="right" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Reveal>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About TechSolutions</h1>
                  </Reveal>
                  <FadeIn delay={0.2}>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      We're a team of passionate technology experts dedicated to helping businesses succeed in the
                      digital age.
                    </p>
                  </FadeIn>
                </div>
                <FadeIn delay={0.4} className="space-y-2">
                  <p className="text-gray-500 dark:text-gray-400">
                    Founded in 2024, TechSolutions has grown from a small startup to a leading software development
                    company with clients across multiple industries. Our mission is to deliver innovative, high-quality
                    software solutions that solve real business problems and drive growth.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    With a team of over 50 experienced developers, designers, and IT specialists, we have the expertise
                    to tackle projects of any size and complexity. We pride ourselves on our collaborative approach,
                    working closely with our clients to understand their unique needs and deliver solutions that exceed
                    expectations.
                  </p>
                </FadeIn>
              </FadeIn>
              <FadeIn direction="left" delay={0.3} className="flex items-center justify-center">
                <img
                  alt="Team Image"
                  className="rounded-xl object-cover"
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                />
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  These core principles guide everything we do.
                </p>
              </div>
            </FadeIn>
            <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Client Partnership</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  We view our clients as partners, working collaboratively to achieve shared goals and long-term
                  success.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  We are committed to delivering the highest quality in everything we do, from code to customer service.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  We embrace new technologies and creative approaches to solve complex problems and drive business
                  growth.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Reliability</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  We deliver on our promises, meeting deadlines and building solutions that stand the test of time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  We operate with honesty, transparency, and ethical practices in all our business relationships.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Team Growth</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  We invest in our team's professional development and foster a collaborative, inclusive work
                  environment.
                </p>
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-4 mb-12">
              <FadeIn className="flex flex-col items-center text-center">
                <CountUp
                  from={0}
                  to={13}
                  className="text-4xl font-bold text-primary"
                  formatter={plusFormatter}
                />
                <p className="mt-2 text-gray-500">Years of Experience</p>
              </FadeIn>
              <FadeIn delay={0.1} className="flex flex-col items-center text-center">
                <CountUp
                  from={0}
                  to={200}
                  className="text-4xl font-bold text-primary"
                  formatter={plusFormatter}
                />
                <p className="mt-2 text-gray-500">Projects Completed</p>
              </FadeIn>
              <FadeIn delay={0.2} className="flex flex-col items-center text-center">
                <CountUp
                  from={0}
                  to={50}
                  className="text-4xl font-bold text-primary"
                  formatter={plusFormatter}
                />
                <p className="mt-2 text-gray-500">Team Members</p>
              </FadeIn>
              <FadeIn delay={0.3} className="flex flex-col items-center text-center">
                <CountUp
                  from={0}
                  to={98}
                  className="text-4xl font-bold text-primary"
                  formatter={percentFormatter}
                />
                <p className="mt-2 text-gray-500">Client Satisfaction</p>
              </FadeIn>
            </div>

            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Meet the talented professionals behind our success.
                </p>
              </div>
            </FadeIn>
            <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <img
                  alt="Team Member"
                  className="rounded-full object-cover h-32 w-32"
                  src="/placeholder.svg?height=128&width=128"
                />
                <h3 className="text-xl font-bold">John Smith</h3>
                <p className="text-gray-500 dark:text-gray-400">CEO & Founder</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  alt="Team Member"
                  className="rounded-full object-cover h-32 w-32"
                  src="/placeholder.svg?height=128&width=128"
                />
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-gray-500 dark:text-gray-400">CTO</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  alt="Team Member"
                  className="rounded-full object-cover h-32 w-32"
                  src="/placeholder.svg?height=128&width=128"
                />
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-gray-500 dark:text-gray-400">Lead Developer</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  alt="Team Member"
                  className="rounded-full object-cover h-32 w-32"
                  src="/placeholder.svg?height=128&width=128"
                />
                <h3 className="text-xl font-bold">Emily Rodriguez</h3>
                <p className="text-gray-500 dark:text-gray-400">UX/UI Designer</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  alt="Team Member"
                  className="rounded-full object-cover h-32 w-32"
                  src="/placeholder.svg?height=128&width=128"
                />
                <h3 className="text-xl font-bold">David Wilson</h3>
                <p className="text-gray-500 dark:text-gray-400">Project Manager</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  alt="Team Member"
                  className="rounded-full object-cover h-32 w-32"
                  src="/placeholder.svg?height=128&width=128"
                />
                <h3 className="text-xl font-bold">Lisa Thompson</h3>
                <p className="text-gray-500 dark:text-gray-400">Marketing Director</p>
              </div>
            </StaggerChildren>
            <FadeIn className="mt-12 flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </FadeIn>
          </div>
        </section> */}

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <FadeIn direction="right" className="flex items-center justify-center">
                <img
                  alt="Office Image"
                  className="rounded-xl object-cover"
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                />
              </FadeIn>
              <FadeIn direction="left" delay={0.3} className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Approach</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    We believe in a collaborative, transparent approach to software development.
                  </p>
                </div>
                <StaggerChildren className="space-y-2" staggerDelay={0.1} delay={0.2}>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Agile methodology for flexible, iterative development
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="text-gray-500 dark:text-gray-400">Regular communication and progress updates</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="text-gray-500 dark:text-gray-400">Thorough testing and quality assurance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="text-gray-500 dark:text-gray-400">Post-launch support and maintenance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="text-gray-500 dark:text-gray-400">Knowledge transfer and documentation</p>
                  </div>
                </StaggerChildren>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <FadeIn direction="right" className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to work with us?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let's discuss how our team can help bring your ideas to life.
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
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2023 TechSolutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}