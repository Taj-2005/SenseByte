import Link from "next/link"
import { Calendar } from "lucide-react"

import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogPostCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: string
}

export function BlogPostCard({ title, excerpt, image, date, author, category }: BlogPostCardProps) {
  const slug = title.toLowerCase().replace(/ /g, "-")

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video relative">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
        <Badge className="absolute top-2 right-2">{category}</Badge>
      </div>
      <CardHeader className="flex-1">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          {date}
        </div>
        <Link href={`/blog/${slug}`} className="hover:underline">
          <h3 className="font-bold text-lg">{title}</h3>
        </Link>
        <p className="text-gray-500 line-clamp-3">{excerpt}</p>
      </CardHeader>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm">By {author}</span>
          <Link href={`/blog/${slug}`} className="text-sm font-medium text-primary hover:underline">
            Read More
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
