import React, { useState } from "react";
import * as S from "./Home.Styles";
import { AiFillStar, AiFillEye } from "react-icons/ai";
import { SearchBar } from "../components/SearchBar";
import { Link } from "react-router-dom";
import { usePosts } from "../api/getPosts";

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
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <S.Box key={post.id}>
              <S.ProductImg src={post.imageUrl} alt="Logo" />
              <S.ProductTitle>{post.title}</S.ProductTitle>

              <S.DetailsWrapper>
                <S.Details>
                  {post.discountedPrice !== post.price ? (
                    <S.PriceDisplay discounted>
                      {post.discountedPrice} $
                    </S.PriceDisplay>
                  ) : (
                    <S.PriceDisplay>{post.price} $</S.PriceDisplay>
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
                </S.ButtonWrapper>
              </S.DetailsWrapper>
            </S.Box>
          ))
        ) : (
          <S.NotFound>No results found</S.NotFound>
        )}
      </S.Container>
    </div>
  );
}

export default Home;
