import axios from "axios";
// Types
import {
  USER_LOGIN,
  UPDATE_UPVOTES,
  UPDATE_DOWNVOTES,
  ADD_VIEWED_WORD,
  TOGGLE_NIGHTMODE,
} from "../types/userTypes";

// Request to login with user email then validate password
export const handleUserLogin = (userCreds) => async (dispatch) => {
  const userData = await axios.post("/api/users/login", { userCreds });
  try {
    dispatch({
      type: USER_LOGIN,
      payload: {
        userData: userData.data,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

// Add a word to user's recentlyViewedWords
export const addViewedWord = (word, userId) => async (dispatch) => {
  const recentlyViewed = await axios.post(`/api/users/${userId}/viewed-word`, {
    word,
  });
  dispatch({
    type: ADD_VIEWED_WORD,
    payload: {
      recentlyViewed: recentlyViewed.data,
    },
  });
};

// Add / remove a word to users upvotedWords
export const toggleUserUpvote = (userId, wordId) => async (dispatch) => {
  const upvotedWords = await axios.post(`/api/users/${userId}/upvoted`, {
    wordId,
  });
  dispatch({
    type: UPDATE_UPVOTES,
    payload: {
      upvotedWords: upvotedWords.data,
    },
  });
};

// Add / remove a word to users downvotedWords
export const toggleUserDownvote = (userId, wordId) => async (dispatch) => {
  const downvotedWords = await axios.post(`/api/users/${userId}/downvoted`, {
    wordId,
  });
  dispatch({
    type: UPDATE_DOWNVOTES,
    payload: {
      downvotedWords: downvotedWords.data,
    },
  });
};

// // Create a new account
export const handleCreateAccount = (userCreds) => async (dispatch) => {
  const response = await axios.post("/api/users", { newUser: userCreds });
  dispatch({
    type: USER_LOGIN,
    payload: {
      userData: response.data,
    },
  });
};

export const toggleNightMode = () => {
  return {
    type: TOGGLE_NIGHTMODE,
  };
};
