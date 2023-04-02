import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const Container = styled.div`
  border: 0;
  background-color: ;
  display: flex;
  flex-wrap: wrap;
  margin: 120px auto;
  justify-content: center;
`;

export const ProductTitle = styled.h1`
  font-size: 28px;
  margin: 30px auto;
  display: block;
  width: 100%;
  text-align: center;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  padding-left: 5px;
  margin-bottom: 20px;
`;

export const PriceDisplay = styled.p`
  font-size: 23px;
  margin: 10px;
  font-weight: 600;
`;

export const Rating = styled.p`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin: 10px;
  & > span {
    padding-left: 5px;
    padding-top: 3px;
  }
`;

export const Offer = styled.p`
  font-size: 18px;
  margin: 10px;
  font-weight: 700;
  color: #228b22;
`;

export const Box = styled.div`
  width: 560px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const BaseButton = styled.button`
  border: 0;
  background: none;
  border-radius: 4px;
  margin: 0 auto;
  cursor: pointer;
  display: block;
  margin: 5px;

  & > span {
    padding-right: 5px;
  }

  :hover {
    background-color: black;
    color: white;
  }
`;

export const ProductImg = styled.img`
 width: 100%;
 height: 600px;
 display: inline-block;
  vertical-align: middle;
  object-fit: cover;
}
`;
export const Wrapper = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const ProductTags = styled.div`
  display: flex;
  font-size: 14px;
`;
export const Tag = styled.div`
  background-color: #d3d3d3;
  width: auto;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`;

export const ReviewsWrapper = styled.div`
  padding-left: 10px;
`;

export const ReviewButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;

  padding: 10px;
`;

export const Review = styled.div`
  margin-bottom: 20px;
  background-color: #f0f0f0;
  padding: 5px 10px;
  border: solid 1px #d3d3d3;
`;

export const Username = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const UserRating = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-size: 14px;
`;
export const ChevronDownIcon = styled(BsChevronDown)`
  margin-left: 10px;
`;

export const ChevronUpIcon = styled(BsChevronUp)`
  margin-left: 10px;
`;

export const AddedToCartMessage = styled.p`
  color: black;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  background-color: #f8f8f8;
  border: solid 1px black;
  padding: 8px 24px;
`;

export const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const AddBtn = styled(BaseButton)`
  background-color: #90ee90;
  padding: 12px 24px 12px 16px;
  font-size: 16px;
  max-height: 60px;
  display: block;
`;
