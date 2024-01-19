import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <div>
      <p className='text-white text-base'>Đánh giá của bạn: {rating} sao</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          selected={star <= rating}
          onClick={() => handleStarClick(star)}
        />
      ))}
    </div>
  );
};

interface StarProps {
  selected: boolean;
  onClick: () => void;
}

const Star: React.FC<StarProps> = ({ selected, onClick }) => {
  return (
    <span onClick={onClick} style={{ color: selected ? 'gold' : 'gray', cursor: 'pointer', fontSize:23}} >
      ★
    </span>
  );
};

export default StarRating;
