"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Globe, Layers, PhoneCall, Rocket } from "lucide-react"

export default function B2BSolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">B2B Solutions</h1>
          <p className="text-gray-600 text-sm">Tailored enterprise solutions to accelerate your business</p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Rocket className="text-primary" />
              <CardTitle>Custom Software Development</CardTitle>
            </div>
            <CardDescription>Build scalable, tailored platforms that meet your business needs</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
              <li>Enterprise-grade applications</li>
              <li>API integrations</li>
              <li>Cloud-first architecture</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Layers className="text-primary" />
              <CardTitle>System Integration</CardTitle>
            </div>
            <CardDescription>Streamline your operations with seamless system connectivity</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
              <li>ERP & CRM integrations</li>
              <li>Middleware solutions</li>
              <li>Legacy system modernization</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="text-primary" />
              <CardTitle>Digital Transformation</CardTitle>
            </div>
            <CardDescription>Empower your teams with cutting-edge digital tools and workflows</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
              <li>AI & automation strategy</li>
              <li>Data-driven decisions</li>
              <li>Workforce enablement</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Why Partner With Us?</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="font-medium">Industry Expertise</h3>
            <p className="text-sm text-gray-600 mt-1">Years of experience across fintech, healthcare, logistics, and more.</p>
          </div>
          <div>
            <h3 className="font-medium">Scalable Solutions</h3>
            <p className="text-sm text-gray-600 mt-1">Designed to grow as your business expands without technical debt.</p>
          </div>
          <div>
            <h3 className="font-medium">Dedicated Support</h3>
            <p className="text-sm text-gray-600 mt-1">Round-the-clock assistance with direct developer access.</p>
          </div>
          <div>
            <h3 className="font-medium">Proven Results</h3>
            <p className="text-sm text-gray-600 mt-1">A track record of successful B2B deployments and transformations.</p>
          </div>
        </div>
      </section>

      <footer className="flex justify-between items-center pt-8 border-t mt-8">
        <div className="text-sm text-gray-500">&copy; 2025 TechEdge Solutions. All rights reserved.</div>
      </footer>
    </div>
  )
}
