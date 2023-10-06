import React from "react";
// Router
import { Link } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
// Styles and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

function RecentlyViewed() {
  const { viewHistory } = useSelector((state) => state.user);

  return (
    <RecentlyViewedContainer className="recently-viewed">
      <h3>Recently Viewed</h3>
      <ul>
        {viewHistory.map((word) => (
          <li key={word._id}>
            <Link to={`/word/${word.word}`}>
              <p>
                {word.word}
                <span>{word.voteCount} votes</span>
              </p>
              <p>{word.def}</p>
            </Link>
          </li>
        ))}
      </ul>
    </RecentlyViewedContainer>
  );
}

const RecentlyViewedContainer = styled(motion.div)`
  background: ${({ theme }) => theme.lightBg};
  color: ${({ theme }) => theme.darkText};
  padding: 1rem;
  height: fit-content;
  ul {
    list-style: none;
    li {
      border-radius: 3px;
      display: inline-block;
      height: fit-content;
      width: 100%;
      margin: 0.2rem 0;
      background: ${({ theme }) => theme.medBg};
      &:hover {
        background: ${({ theme }) => theme.darkBg};
      }
      a {
        color: ${({ theme }) => theme.darkText};
        height: fit-content;
        display: flex;
        flex-direction: column;
        padding: 0.25rem 0.5rem;
        p {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          justify-self: flex-end;
        }
        p:first-child {
          font-weight: 400;
          text-transform: capitalize;
          span {
            text-transform: none;
            font-weight: 100;
            font-size: 0.75rem;
            float: right;
          }
        }
        p:last-child {
          font-weight: 100;
          font-size: 0.75rem;
        }
      }
    }
  }
`;

export default RecentlyViewed;
