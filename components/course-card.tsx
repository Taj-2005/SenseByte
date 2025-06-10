import Link from "next/link"
import { Clock, Star, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  title: string
  description: string
  image: string
  price: string
  rating: number
  category: string
  level: string
  duration: string
}

export function CourseCard({ title, description, image, price, rating, category, level, duration }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
        <Badge className="absolute top-2 right-2">{level}</Badge>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            {category}
          </Badge>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium ml-1">{rating}</span>
          </div>
        </div>
        <h3 className="font-bold text-lg mt-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          {duration}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <span className="font-bold">{price}</span>
        <Button asChild>
          <Link href={`/courses/${encodeURIComponent(title.toLowerCase().replace(/ /g, "-"))}`}>View Course</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
