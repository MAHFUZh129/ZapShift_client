
import QuoteIcon from '../../../assets/reviewQuote.png';

const ReviewCard = ({ review }) => {

    console.log(review)
  const {
    userName,
    user_photoURL,
    ratings,
    review: message,
    date,
  } = review;

  return (
    <div className="bg-gray-100 p-6 rounded-2xl max-w-sm mx-auto">

      {/* Quote Icon */}
      {/* <div className="text-4xl text-teal-300 mb-3">“</div> */}
      <img
        src={QuoteIcon}
        alt={'Quote Icon'}
        className="w-16 h-16 rounded-full object-cover mb-3"
      />

      {/* Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed border-b border-dashed border-gray-300 pb-4">
        {message}
      </p>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-4">
        
        {/* User Info */}
        <div className="flex items-center gap-3">
          <img
            src={user_photoURL}
            alt={userName}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-800">{userName}</h3>
            <p className="text-xs text-gray-500">
              {new Date(date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="text-yellow-500 font-semibold text-sm">
          ⭐ {ratings}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;