import { createContext, useContext, useState, ReactNode } from "react";

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
  initials: string;
}

const initialReviews: Review[] = [
  {
    id: "1",
    name: "Minh Anh",
    role: "Nhân viên văn phòng",
    rating: 5,
    content: "Lolli Liquid Blush màu Summery lên da cực kỳ tây và trong trẻo. Mình dùng từ sáng đến chiều vẫn không bị trôi hay xuống tone.",
    initials: "M"
  },
  {
    id: "2",
    name: "Hương Mai",
    role: "Beauty Blogger",
    rating: 5,
    content: "Chất son của MistyNow thực sự làm mình bất ngờ. Mỏng nhẹ như nước nhưng độ che phủ cực tốt, không hề khô môi.",
    initials: "H"
  },
  {
    id: "3",
    name: "Trang Nhung",
    role: "Sinh viên",
    rating: 5,
    content: "Thiết kế packaging của OFÉLIA lúc nào cũng làm mình mê mẩn. Mua làm quà tặng bạn bè ai cũng khen sang trọng.",
    initials: "T"
  }
];

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Omit<Review, "id" | "initials">) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const addReview = (review: Omit<Review, "id" | "initials">) => {
    const newReview: Review = {
      ...review,
      id: Date.now().toString(),
      initials: review.name.charAt(0).toUpperCase() || "U"
    };
    setReviews(prev => [newReview, ...prev]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  const context = useContext(ReviewContext);
  if (context === undefined) {
    throw new Error("useReviews must be used within a ReviewProvider");
  }
  return context;
}
