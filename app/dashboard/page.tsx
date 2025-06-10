"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  BookOpen,
  Calendar,
  BadgeIcon as Certificate,
  Clock,
  GraduationCap,
  Settings,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Alex Morgan</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/courses">
                Browse Courses
              </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">My Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="my-courses">My Courses</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            {/* Progress Summary */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Courses Enrolled
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">
                    +1 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Courses
                  </CardTitle>
                  <Certificate className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">
                    +1 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Hours Spent
                  </CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">36.5</div>
                  <p className="text-xs text-muted-foreground">
                    +12.4 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Upcoming Sessions
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">
                    Next: Today at 4:00 PM
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Current Courses */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Current Courses</CardTitle>
                  <CardDescription>
                    Your active course progress
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Full Stack Web Development</div>
                          <div className="text-xs text-muted-foreground">Module 8 of 12</div>
                        </div>
                      </div>
                      <Badge>In Progress</Badge>
                    </div>
                    <Progress value={67} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div>67% Complete</div>
                      <div>5 weeks left</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                          <BarChart3 className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Data Science Fundamentals</div>
                          <div className="text-xs text-muted-foreground">Module 3 of 10</div>
                        </div>
                      </div>
                      <Badge>In Progress</Badge>
                    </div>
                    <Progress value={30} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div>30% Complete</div>
                      <div>7 weeks left</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" onClick={() => setActiveTab("my-courses")}>
                    View All Courses
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>
                    Your scheduled live sessions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">React Advanced Concepts</div>
                        <div className="text-xs text-muted-foreground">Today, 4:00 PM - 5:30 PM</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Data Visualization Workshop</div>
                        <div className="text-xs text-muted-foreground">Tomorrow, 2:00 PM - 4:00 PM</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Project Review Session</div>
                        <div className="text-xs text-muted-foreground">Friday, 11:00 AM - 12:00 PM</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" onClick={() => setActiveTab("schedule")}>
                    View Full Schedule
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Recommended Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended For You</CardTitle>
                <CardDescription>
                  Based on your interests and current courses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2 p-3 border rounded-lg">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Advanced JavaScript Patterns</div>
                      <div className="text-xs text-muted-foreground mb-2">8 weeks • Intermediate</div>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/courses/advanced-javascript-patterns">
                          View Course
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-3 border rounded-lg">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Machine Learning Fundamentals</div>
                      <div className="text-xs text-muted-foreground mb-2">10 weeks • Intermediate</div>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/courses/machine-learning-fundamentals">
                          View Course
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-3 border rounded-lg">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">DevOps & CI/CD Pipeline\
