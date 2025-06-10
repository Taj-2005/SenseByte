import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
}

export function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-1">
        <QuoteIcon className="h-8 w-8 text-gray-300 mb-4" />
        <p className="text-gray-700">{quote}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={avatar || "/placeholder.svg"} alt={author} />
            <AvatarFallback>
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
