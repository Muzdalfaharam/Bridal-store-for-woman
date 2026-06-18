"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

export default function FeedbackPage() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [newReview, setNewReview] = useState({
    name: "",
    event: "",
    rating: 5,
    comment: "",
  });

  // Fetch reviews from Supabase
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching reviews:", error);
        // Use fallback data if Supabase not connected
        setReviews(getFallbackReviews());
      } else {
        setReviews(data || getFallbackReviews());
      }
    } catch (err) {
      console.error("Error:", err);
      setReviews(getFallbackReviews());
    }
    setIsLoading(false);
  };

  // Fallback reviews
  const getFallbackReviews = () => [
    {
      id: 1,
      name: "Ayesha Khan",
      event: "Barat",
      rating: 5,
      comment: "Absolutely stunning collection! The dress was perfect for my barat. The quality and craftsmanship exceeded my expectations.",
      created_at: "2026-06-10",
    },
    {
      id: 2,
      name: "Sana Ahmed",
      event: "Walima",
      rating: 5,
      comment: "Amazing quality and service. Highly recommended for any bride looking for the perfect wedding dress.",
      created_at: "2026-06-05",
    },
    {
      id: 3,
      name: "Fatima Ali",
      event: "Mehndi",
      rating: 4,
      comment: "Beautiful designs and great customer service. The mehndi collection is absolutely gorgeous!",
      created_at: "2026-06-01",
    },
    {
      id: 4,
      name: "Zara Malik",
      event: "Mayo",
      rating: 5,
      comment: "The pastel collection is absolutely gorgeous! I received so many compliments on my mayo outfit.",
      created_at: "2026-05-28",
    },
    {
      id: 5,
      name: "Hira Tariq",
      event: "Barat",
      rating: 5,
      comment: "The red bridal dress was everything I dreamed of and more. Thank you for making my day so special!",
      created_at: "2026-05-20",
    },
  ];

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleRatingClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const reviewData = {
        name: newReview.name,
        event: newReview.event,
        rating: newReview.rating,
        comment: newReview.comment,
        created_at: new Date().toISOString(),
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from('reviews')
        .insert([reviewData])
        .select();

      if (error) {
        console.error("Supabase Error:", error);
        setError("There was an error submitting your review. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Add new review to the list
      if (data) {
        setReviews([data[0], ...reviews]);
      } else {
        // Fallback: add to local state
        setReviews([{ ...reviewData, id: Date.now() }, ...reviews]);
      }

      setNewReview({ name: "", event: "", rating: 5, comment: "" });
      setIsSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => setIsSuccess(false), 4000);

    } catch (err) {
      console.error("Error:", err);
      setError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  // Star Rating Component
  const StarRating = ({ rating, onRatingClick, readonly }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => !readonly && onRatingClick && onRatingClick(star)}
            className={`text-2xl transition-colors ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            } ${!readonly && "hover:scale-110 transform"}`}
            disabled={readonly}
            aria-label={`Rate ${star} stars`}
          >
            
          </button>
        ))}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 pt-24 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-rose-600 font-serif text-sm tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-800 mt-3 mb-4">
            Customer Reviews
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto"></div>
          <p className="text-gray-500 mt-4">
            What our brides say about their experience
          </p>
        </motion.div>

        {/* Add Review Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12 border border-pink-100"
        >
          <h2 className="font-serif text-2xl text-gray-800 mb-6">Share Your Experience</h2>

          {isSuccess && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2">
              <span className="text-xl"></span>
              Thank you! Your review has been submitted.
            </div>
          )}

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={newReview.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Event Type *
                </label>
                <select
                  name="event"
                  required
                  value={newReview.event}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select event</option>
                  <option value="Barat">Barat</option>
                  <option value="Walima">Walima</option>
                  <option value="Mehndi">Mehndi</option>
                  <option value="Mayo">Mayo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Rating *
              </label>
              <StarRating
                rating={newReview.rating}
                onRatingClick={handleRatingClick}
                readonly={false}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Your Review *
              </label>
              <textarea
                name="comment"
                required
                rows="4"
                value={newReview.comment}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all resize-none"
                placeholder="Share your experience with us..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Review"
              )}
            </button>
          </form>
        </motion.div>

        {/* Reviews List */}
        <div className="space-y-6">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-pink-100 animate-pulse">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="h-6 w-32 bg-gray-200 rounded mb-1"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="w-5 h-5 bg-gray-200 rounded"></div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md p-6 border border-pink-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-800">
                      {review.name}
                    </h3>
                    <span className="text-sm text-rose-600 font-medium">
                      {review.event} • {new Date(review.created_at).toLocaleDateString('en-PK', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex text-yellow-400 mt-2 sm:mt-0">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{review.comment}</p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}