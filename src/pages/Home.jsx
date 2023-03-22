import React, { useState } from "react";
import * as S from "./Home.Styles";
import { AiFillStar, AiFillEye } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { SearchBar } from "../components/SearchBar";
import { Link } from "react-router-dom";
import { usePosts } from "../api/getPosts";

import { PriceDisplay, PriceDisplayDiscount } from "./Home.Styles";

function Home() {
  const posts = usePosts();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearchTermChange={handleSearch} />
      <S.Container>
        {filteredPosts.map((post) => (
          <S.Box key={post.id}>
            <S.ProductImg src={post.imageUrl} alt="Logo" />
            <S.ProductTitle>{post.title}</S.ProductTitle>

            <S.DetailsWrapper>
              <S.Details>
                {post.discountedPrice !== post.price ? (
                  <PriceDisplay discounted>
                    {post.discountedPrice} $
                  </PriceDisplay>
                ) : (
                  <PriceDisplay>{post.price} $</PriceDisplay>
                )}

                <S.Rating>
                  {post.reviews.length > 0 ? `${post.rating} / 5` : `? / 5`}{" "}
                  <span>
                    {" "}
                    <AiFillStar />
                  </span>{" "}
                </S.Rating>
              </S.Details>

              <S.ButtonWrapper>
                <Link to={`/product/${post.id}`}>
                  <S.ViewBtn>
                    <span>
                      {" "}
                      <AiFillEye />
                    </span>{" "}
                    View Product
                  </S.ViewBtn>
                </Link>

                <S.AddBtn>
                  <span>
                    {" "}
                    <BsCartPlusFill />
                  </span>{" "}
                  Add to Cart
                </S.AddBtn>
              </S.ButtonWrapper>
            </S.DetailsWrapper>
          </S.Box>
        ))}
      </S.Container>
    </div>
  );
}

export default Home;
