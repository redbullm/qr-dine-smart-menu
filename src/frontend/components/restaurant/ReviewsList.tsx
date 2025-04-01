
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Mock reviews data
const reviews = [
  {
    id: 1,
    userName: "John Doe",
    rating: 5,
    comment: "Amazing food and great service! The burger was delicious and cooked to perfection.",
    date: "2023-05-15"
  },
  {
    id: 2,
    userName: "Jane Smith",
    rating: 4,
    comment: "Really enjoyed my meal here. The pizza was excellent, although the wait time was a bit long.",
    date: "2023-05-10"
  },
  {
    id: 3,
    userName: "Alex Johnson",
    rating: 5,
    comment: "Best restaurant in town! The caesar salad is my favorite. Will definitely be coming back.",
    date: "2023-05-05"
  },
  {
    id: 4,
    userName: "Sarah Williams",
    rating: 3,
    comment: "Food was good, but the service could be improved. Waited too long for my order.",
    date: "2023-04-28"
  }
];

const ReviewItem = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarFallback className="bg-menu-secondary/20 text-menu-secondary">
              {review.userName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{review.userName}</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-gray-700">{review.comment}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ReviewsList = () => {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
