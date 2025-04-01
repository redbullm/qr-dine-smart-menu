
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ReviewFormProps {
  restaurantId: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ restaurantId }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a star rating before submitting",
        variant: "destructive",
      });
      return;
    }
    
    if (comment.trim() === "") {
      toast({
        title: "Review required",
        description: "Please write a review before submitting",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Get the current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Authentication required",
          description: "You must be logged in to submit a review",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Insert the review into Supabase
      const { error } = await supabase
        .from('reviews')
        .insert({
          restaurant_id: restaurantId,
          user_id: user.id,
          rating,
          comment
        });
      
      if (error) {
        console.error("Error submitting review:", error);
        throw error;
      }
      
      toast({
        title: "Review submitted",
        description: "Thank you for your feedback!",
      });
      
      // Reset form
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium text-gray-700 mr-3">Your Rating:</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                className="focus:outline-none"
              >
                <Star
                  className={`h-6 w-6 ${
                    star <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  } cursor-pointer transition-colors`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <Textarea
          placeholder="Share your experience with this restaurant..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[120px]"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
};

export default ReviewForm;
