import Link from "next/link"
import { ArrowRight, Briefcase, CheckCircle, GraduationCap, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { CourseCard } from "@/components/course-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { LeadForm } from "@/components/lead-form"
import { BlogPostCard } from "@/components/blog-post-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Featured Services */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive IT solutions and professional upskilling services for individuals and businesses
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>Professional Courses</CardTitle>
              <CardDescription>Upskill with our industry-recognized certification courses</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Access over 500+ courses designed by industry experts to help you advance your career.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/courses">
                  Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>B2B Solutions</CardTitle>
              <CardDescription>Custom IT solutions for businesses of all sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                From software development to IT consulting, we provide end-to-end solutions for your business needs.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/b2b-services">
                  Explore B2B Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>Corporate Training</CardTitle>
              <CardDescription>Customized training programs for your team</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Enhance your team's skills with our tailored corporate training programs designed for your specific
                needs.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/corporate-training">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Courses</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our most popular professional upskilling courses
              </p>
            </div>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="tech" className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="tech">Tech</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
            <TabsContent value="tech" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="Full Stack Web Development"
                  description="Learn modern web development with React, Node.js, and MongoDB"
                  image="/placeholder.svg?height=200&width=300"
                  price="$499"
                  rating={4.8}
                  category="Programming"
                  level="Intermediate"
                  duration="12 weeks"
                />
                <CourseCard
                  title="Cloud Computing with AWS"
                  description="Master cloud infrastructure and services with Amazon Web Services"
                  image="/placeholder.svg?height=200&width=300"
                  price="$399"
                  rating={4.7}
                  category="Cloud"
                  level="Intermediate"
                  duration="8 weeks"
                />
                <CourseCard
                  title="Data Science Fundamentals"
                  description="Learn data analysis, visualization and machine learning basics"
                  image="/placeholder.svg?height=200&width=300"
                  price="$599"
                  rating={4.9}
                  category="Data Science"
                  level="Beginner"
                  duration="10 weeks"
                />
              </div>
            </TabsContent>
            <TabsContent value="business" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="Project Management Professional"
                  description="Prepare for PMP certification with comprehensive training"
                  image="/placeholder.svg?height=200&width=300"
                  price="$449"
                  rating={4.6}
                  category="Management"
                  level="Advanced"
                  duration="8 weeks"
                />
                <CourseCard
                  title="Digital Marketing Mastery"
                  description="Learn SEO, social media, email marketing and more"
                  image="/placeholder.svg?height=200&width=300"
                  price="$349"
                  rating={4.5}
                  category="Marketing"
                  level="Intermediate"
                  duration="6 weeks"
                />
                <CourseCard
                  title="Business Analytics"
                  description="Make data-driven business decisions with analytics"
                  image="/placeholder.svg?height=200&width=300"
                  price="$499"
                  rating={4.7}
                  category="Analytics"
                  level="Intermediate"
                  duration="8 weeks"
                />
              </div>
            </TabsContent>
            <TabsContent value="design" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="UI/UX Design Fundamentals"
                  description="Learn user interface and experience design principles"
                  image="/placeholder.svg?height=200&width=300"
                  price="$399"
                  rating={4.8}
                  category="Design"
                  level="Beginner"
                  duration="8 weeks"
                />
                <CourseCard
                  title="Graphic Design Masterclass"
                  description="Master Adobe Creative Suite and design principles"
                  image="/placeholder.svg?height=200&width=300"
                  price="$349"
                  rating={4.6}
                  category="Design"
                  level="Intermediate"
                  duration="10 weeks"
                />
                <CourseCard
                  title="Motion Graphics & Animation"
                  description="Create stunning animations and visual effects"
                  image="/placeholder.svg?height=200&width=300"
                  price="$499"
                  rating={4.7}
                  category="Animation"
                  level="Advanced"
                  duration="12 weeks"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* B2B Services */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">B2B IT Solutions</h2>
            <p className="text-gray-500 md:text-xl/relaxed">
              We provide comprehensive IT solutions tailored to your business needs. Our team of experts will work with
              you to understand your requirements and deliver solutions that drive growth.
            </p>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Custom Software Development</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>IT Consulting & Strategy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Cloud Migration & Management</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Cybersecurity Solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Enterprise Application Integration</span>
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/b2b-services">Explore B2B Services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="B2B Services"
              className="rounded-lg object-cover"
              height="400"
              src="/placeholder.svg?height=400&width=600"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from individuals and businesses who have transformed with our solutions
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="The Full Stack Development course completely transformed my career. I went from a junior developer to leading my own team in just 8 months after completion."
              author="Sarah Johnson"
              role="Senior Developer, TechCorp"
              avatar="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Sensebyte's B2B solutions helped us modernize our entire IT infrastructure. Their team was professional, knowledgeable, and delivered on time and within budget."
              author="Michael Chen"
              role="CTO, InnovateX"
              avatar="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="The corporate training program Sensebyte designed for our team was exactly what we needed. Our productivity increased by 35% within the first quarter after training."
              author="Lisa Rodriguez"
              role="HR Director, Global Solutions"
              avatar="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Transform Your Skills or Business?
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed">
              Get in touch with our team to discuss your learning needs or business requirements. We'll help you find
              the perfect solution.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="outline" asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/b2b-services">Explore B2B Services</Link>
              </Button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest from Our Blog</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, trends, and knowledge from our experts
              </p>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogPostCard
              title="10 In-Demand Tech Skills for 2023"
              excerpt="Discover the most sought-after technical skills that employers are looking for this year."
              image="/placeholder.svg?height=200&width=300"
              date="June 15, 2023"
              author="Alex Morgan"
              category="Career"
            />
            <BlogPostCard
              title="How Cloud Computing is Transforming Business"
              excerpt="Learn how cloud technologies are revolutionizing the way companies operate and scale."
              image="/placeholder.svg?height=200&width=300"
              date="May 28, 2023"
              author="Priya Sharma"
              category="Technology"
            />
            <BlogPostCard
              title="The Future of Corporate Learning"
              excerpt="Explore how AI and personalization are changing professional development and training."
              image="/placeholder.svg?height=200&width=300"
              date="May 10, 2023"
              author="David Wilson"
              category="Education"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
