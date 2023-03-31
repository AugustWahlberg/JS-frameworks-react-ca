import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePost } from "../api/GetProduct";
import * as S from "./Product.Styles";
import { AiFillStar } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { useCart } from "../components/CartContext.jsx";


export function Product() {
  const { id } = useParams();
  const post = usePost(id);
  const [showReviews, setShowReviews] = useState(false);

  const { addToCart } = useCart();

  if (!post) {
    return <p>Loading...</p>;
  }

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div>
      <S.Container>
        <S.ProductTitle>{post.title}</S.ProductTitle>
        <S.Box key={post.id}>
          <S.ProductImg src={post.imageUrl} alt="Logo"></S.ProductImg>

          <S.Wrapper>
            <S.ProductTags>
              {post.tags.map((tag, index) => (
                <S.Tag key={index}>#{tag}</S.Tag>
              ))}
            </S.ProductTags>

            <S.Rating>
              {post.reviews.length > 0 ? `${post.rating} / 5` : `? / 5`}
              <span>
                {" "}
                <AiFillStar />
              </span>
            </S.Rating>
          </S.Wrapper>

          <S.ProductDescription>{post.description}</S.ProductDescription>

          <S.Wrapper>
            <div>
              {post.discountedPrice < post.price ? (
                <>
                  <S.PriceDisplay style={{ textDecoration: "line-through" }}>
                    {post.price} $
                  </S.PriceDisplay>
                  <S.PriceDisplay>{post.discountedPrice} $</S.PriceDisplay>
                  <S.Offer>
                    {calculateDiscountPercentage(
                      post.price,
                      post.discountedPrice
                    )}
                    % off
                  </S.Offer>
                </>
              ) : (
                <S.PriceDisplay>
                  {post.price} - {post.discountedPrice} $
                </S.PriceDisplay>
              )}
            </div>
            <S.AddBtn
  onClick={() => {
    console.log(post); // Add this line to log the product object
    addToCart(post);
    
  }}
>
  <span>
    {" "}
    <BsCartPlusFill />
  </span>{" "}
  Add to Cart
</S.AddBtn>

          </S.Wrapper>

          {post.reviews.length > 0 && (
            <>
              <S.ReviewButton onClick={toggleReviews}>
                {showReviews ? "Hide Reviews" : "Show Reviews"}
                {showReviews ? <S.ChevronUpIcon /> : <S.ChevronDownIcon />}
              </S.ReviewButton>
              {showReviews && (
                <S.ReviewsWrapper>
                  {post.reviews.map((review) => (
                    <S.Review key={review.id}>
                      <S.Username>{review.username}</S.Username>
                      <S.UserRating>
                        {review.rating} / 5{" "}
                        <span>
                          {" "}
                          <AiFillStar />
                        </span>
                      </S.UserRating>
                      <S.Description>"{review.description}"</S.Description>
                    </S.Review>
                  ))}
                </S.ReviewsWrapper>
              )}
            </>
          )}
        </S.Box>
      </S.Container>
    </div>
  );
}

function calculateDiscountPercentage(price, discountedPrice) {
  const discountPercentage = ((price - discountedPrice) / price) * 100;
  return Math.round(discountPercentage * 100) / 100; // round to two decimal places
}
