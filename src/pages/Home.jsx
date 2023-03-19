import React, { useEffect, useState } from 'react';
import * as S from './Home.Styles';
import { AiFillStar, AiFillEye } from 'react-icons/ai';
import { BsCartPlusFill } from 'react-icons/bs';
import { SearchBar } from '../components/SearchBar';
import { Link } from 'react-router-dom';


function Home() {

const url = 'https://api.noroff.dev/api/v1/online-shop';


  const [posts, setPosts] = useState([]);

  // The useEffect will run once when the component first mounts
  useEffect(() => {
    // Function that gets our posts
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      // Setting our posts state to the API data we received
      setPosts(json);
    }
    getData();
  }, []);

  return (
   
    <div>
      <SearchBar/>
    
    <S.Container>
        
      {posts.map((post) => (
        <S.Box key={post.id}>
          <S.ProductImg src={post.imageUrl} alt="Logo"></S.ProductImg>
          <S.ProductTitle>{post.title}</S.ProductTitle>

          <S.DetailsWrapper>
          <S.Details>
          <S.PriceDisplay>{post.price} $</S.PriceDisplay>
          <S.Rating>{post.rating} / 5 <span> <AiFillStar /></span> </S.Rating>
          </S.Details>
          
          <S.ButtonWrapper>
          <Link to={`/product/${post.id}`}>
          <S.ViewBtn>
          <span> <AiFillEye/></span> View Product
          </S.ViewBtn>
          </Link>

          <S.AddBtn>
           <span> <BsCartPlusFill /></span> Add to Cart
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