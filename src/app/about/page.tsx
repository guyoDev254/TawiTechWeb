"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, Award, Clock, Lightbulb } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Reveal } from "@/components/animations/reveal";

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
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About TawiTech Africa</h1>
                  </Reveal>
                  <FadeIn delay={0.2}>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      We&apos;re a team of passionate technology experts dedicated to helping businesses succeed in the
                      digital age.
                    </p>
                  </FadeIn>
                </div>
                <FadeIn delay={0.4} className="space-y-2">
                  <p className="text-gray-500 dark:text-gray-400">
                    Founded in 2024, TawiTech Africa has grown from a small startup to a leading software development
                    company with clients across multiple industries. Our mission is to deliver innovative, high-quality
                    software solutions that solve real business problems and drive growth.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    With a team of over 10 experienced developers, designers, and IT specialists, we have the expertise
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
                  src="/images/about.jpg"
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
                  We invest in our team&apos;s professional development and foster a collaborative, inclusive work
                  environment.
                </p>
              </div>
            </StaggerChildren>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <FadeIn direction="right" className="flex items-center justify-center">
                <img
                  alt="Office Image"
                  className="rounded-xl object-cover"
                  src="/images/hero2.jpg"
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
                Let&apos;s discuss how our team can help bring your ideas to life.
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
    </div>
  );
}