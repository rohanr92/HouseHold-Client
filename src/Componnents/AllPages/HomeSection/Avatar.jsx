const Avatar = ({ review }) => {
  if (review.avatarUrl) {
    return (
      <img
        className="w-10 h-10 rounded-full"
        src={review.avatarUrl}
        alt={review.name}
        onError={(e) => {
          e.target.style.display = 'none';
          const fallback = document.createElement('div');
          fallback.className = `w-10 h-10 rounded-full ${review.bgColor} flex items-center justify-center font-bold text-white`;
          fallback.innerText = review.initial;
          e.target.parentNode.appendChild(fallback);
        }}
      />
    );
  }

  return (
    <div
      className={`w-10 h-10 rounded-full ${review.bgColor} flex items-center justify-center font-bold text-white`}
    >
      {review.initial}
    </div>
  );
};

export default Avatar;