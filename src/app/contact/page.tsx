import { Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get in touch with our team to discuss your project or ask any questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Fill out the form or contact us directly using the information below.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-500 dark:text-gray-400">info@tawitech.io</p>
                      <p className="text-gray-500 dark:text-gray-400">support@tawitech.io</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-500 dark:text-gray-400">(+254) 745-134-792</p>
                      <p className="text-gray-500 dark:text-gray-400">(+254) 745-134-652</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Office</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Hurlingham Park&apos;
                        <br />
                        Argwings Kodhek Road&apos;
                        <br />
                        Nairobi Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-6 bg-background">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name
                      </label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service of Interest
                    </label>
                    <Select>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom-software">Custom Software Development</SelectItem>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                        <SelectItem value="database">Database Solutions</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                        <SelectItem value="consulting">IT Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find answers to common questions about our services and process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">What is your typical project timeline?</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a
                  complex enterprise application could take several months. We&apos;ll provide a detailed timeline during our
                  initial consultation.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">How much does a typical project cost?</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Project costs depend on requirements, complexity, and timeline. We offer flexible pricing models
                  including fixed-price, time and materials, and retainer options. Contact us for a custom quote based
                  on your specific needs.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">Do you provide ongoing support after launch?</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Yes, we offer various support and maintenance packages to ensure your software continues to run
                  smoothly after launch. These can include bug fixes, security updates, performance optimization, and
                  feature enhancements.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">What technologies do you specialize in?</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We have expertise in a wide range of technologies including React, Angular, Vue.js, Node.js, .NET,
                  Java, Python, PHP, AWS, Azure, and more. We select the best technology stack based on your specific
                  project requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}