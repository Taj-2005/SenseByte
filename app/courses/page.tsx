"use client"

import { useState } from "react"
import { BookOpen, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { CourseCard } from "@/components/course-card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Mock data for courses
const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Learn modern web development with React, Node.js, and MongoDB",
    image: "/placeholder.svg?height=200&width=300",
    price: "$499",
    rating: 4.8,
    category: "Programming",
    level: "Intermediate",
    duration: "12 weeks",
    tags: ["javascript", "react", "node"],
  },
  {
    id: 2,
    title: "Cloud Computing with AWS",
    description: "Master cloud infrastructure and services with Amazon Web Services",
    image: "/placeholder.svg?height=200&width=300",
    price: "$399",
    rating: 4.7,
    category: "Cloud",
    level: "Intermediate",
    duration: "8 weeks",
    tags: ["aws", "cloud", "devops"],
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    description: "Learn data analysis, visualization and machine learning basics",
    image: "/placeholder.svg?height=200&width=300",
    price: "$599",
    rating: 4.9,
    category: "Data Science",
    level: "Beginner",
    duration: "10 weeks",
    tags: ["python", "machine learning", "data"],
  },
  {
    id: 4,
    title: "Project Management Professional",
    description: "Prepare for PMP certification with comprehensive training",
    image: "/placeholder.svg?height=200&width=300",
    price: "$449",
    rating: 4.6,
    category: "Management",
    level: "Advanced",
    duration: "8 weeks",
    tags: ["pmp", "management", "certification"],
  },
  {
    id: 5,
    title: "Digital Marketing Mastery",
    description: "Learn SEO, social media, email marketing and more",
    image: "/placeholder.svg?height=200&width=300",
    price: "$349",
    rating: 4.5,
    category: "Marketing",
    level: "Intermediate",
    duration: "6 weeks",
    tags: ["marketing", "seo", "social media"],
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    description: "Learn user interface and experience design principles",
    image: "/placeholder.svg?height=200&width=300",
    price: "$399",
    rating: 4.8,
    category: "Design",
    level: "Beginner",
    duration: "8 weeks",
    tags: ["design", "ui", "ux"],
  },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [priceRange, setPriceRange] = useState([0, 600])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Filter courses based on search query and filters
  const filteredCourses = courses.filter((course) => {
    // Search filter
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Category filter
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory

    // Level filter
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel

    // Price filter
    const coursePrice = Number.parseInt(course.price.replace("$", ""))
    const matchesPrice = coursePrice >= priceRange[0] && coursePrice <= priceRange[1]

    // Tags filter
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => course.tags.includes(tag))

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice && matchesTags
  })

  // All unique categories
  const categories = ["all", ...new Set(courses.map((course) => course.category))]

  // All unique levels
  const levels = ["all", ...new Set(courses.map((course) => course.level))]

  // All unique tags
  const tags = [...new Set(courses.flatMap((course) => course.tags))]

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Explore Our Courses</h1>
        <p className="text-gray-500">
          Browse our comprehensive collection of professional upskilling courses designed to advance your career.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search courses..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level === "all" ? "All Levels" : level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                <span className="hidden md:inline">More Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Courses</SheetTitle>
                <SheetDescription>Refine your course search with additional filters.</SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[0, 600]}
                      max={600}
                      step={50}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex items-center justify-between">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Tags</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {tags.map((tag) => (
                      <div key={tag} className="flex items-center space-x-2">
                        <Checkbox
                          id={`tag-${tag}`}
                          checked={selectedTags.includes(tag)}
                          onCheckedChange={() => toggleTag(tag)}
                        />
                        <Label htmlFor={`tag-${tag}`} className="text-sm capitalize">
                          {tag}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => {
                    setPriceRange([0, 600])
                    setSelectedTags([])
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Reset Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-gray-500" />
          <span className="text-gray-500">
            {filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"} found
          </span>
        </div>
        <Select defaultValue="relevance">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
              price={course.price}
              rating={course.rating}
              category={course.category}
              level={course.level}
              duration={course.duration}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No courses found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filters to find what you're looking for.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("all")
              setSelectedLevel("all")
              setPriceRange([0, 600])
              setSelectedTags([])
            }}
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  )
}
