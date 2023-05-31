import React from 'react';
import './ClientReviews.css';

const reviewsData = [
    {
        id: 1,
        name: 'John Doe',
        review:'I absolutely love Swigato! The variety of cuisines available is amazing. The ordering process is quick and convenient, and the delivery is always on time. Highly recommended!',
        rating: 4.5,
        image: 'https://picsum.photos/200/300',
    },
    {
        id: 2,
        name: 'Jane Smith',
        review: 'Swigato has become my go-to food ordering platform. The user interface is user-friendly and visually appealing. The food options are diverse, catering to different tastes. ',
        rating: 5,
        image: 'https://picsum.photos/205/300',
    },
    {
        id: 3,
        name: 'Mike Johnson',
        review: 'Swigato has simplified my food ordering experience. I love how easy it is to navigate through the website and discover new recipies. Thumbs up!',
        rating: 4,
        image: 'https://picsum.photos/208/300',
    },
];

const ClientReviews = () => {
    return (
        <div className="client-reviews">
            <h2>What Our Clients Say</h2>    
        <div className='client-reviews-content wrapper'>
                {reviewsData.map((review) => (
                    <div key={review.id} className="wrapper review-card">
                        <div className="review-img">
                            <img src={review.image} alt={review.name} />
                        </div>
                        <h3 className="review-name">{review.name}</h3>
                        <p className="review-text">{review.review}</p>
                        <div className="review-rating">
                            {[...Array(Math.floor(review.rating))].map((_, index) => (
                                <span key={index} className="star">&#9733;</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientReviews;
