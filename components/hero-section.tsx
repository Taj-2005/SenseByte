"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Briefcase, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Elevate Your Skills & Business with Sensebyte
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Professional upskilling courses and comprehensive IT solutions to transform your career and business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/b2b-services">
                  B2B Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Tabs defaultValue="courses" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="courses">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Find Courses
                </TabsTrigger>
                <TabsTrigger value="services">
                  <Briefcase className="mr-2 h-4 w-4" />
                  B2B Services
                </TabsTrigger>
              </TabsList>
              <TabsContent value="courses" className="p-4 border rounded-lg mt-2 bg-white shadow-sm">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Find the Perfect Course</h3>
                    <p className="text-sm text-gray-500">Search from over 500+ professional courses</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <Input
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <Button type="submit">
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Popular Searches:</div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" onClick={() => setSearchQuery("Web Development")}>
                        Web Development
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setSearchQuery("Data Science")}>
                        Data Science
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setSearchQuery("Cloud Computing")}>
                        Cloud Computing
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/courses?search=${encodeURIComponent(searchQuery)}`}>Search Courses</Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="services" className="p-4 border rounded-lg mt-2 bg-white shadow-sm">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Business Solutions</h3>
                    <p className="text-sm text-gray-500">Find the right IT solution for your business</p>
                  </div>
                  <div className="grid gap-2">
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/b2b-services/software-development">Custom Software Development</Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/b2b-services/it-consulting">IT Consulting & Strategy</Link>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <Link href="/b2b-services/cloud-services">Cloud Migration & Management</Link>
                    </Button>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Request Consultation</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
