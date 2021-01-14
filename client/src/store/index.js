import { createStore } from "redux";

const SET_BREEDS = "SET_BREEDS";
const SET_TOP_SEARCHED_BREEDS = "SET_TOP_SEARCHED_BREEDS";
const INCREASE_SEARCH_COUNT = "INCREASE_SEARCH_COUNT";

export const setBreeds = (breeds) => {
  return {
    type: SET_BREEDS,
    payload: breeds,
  };
};

export const setTopSearchedBreeds = (breeds) => {
  return {
    type: SET_TOP_SEARCHED_BREEDS,
    payload: breeds,
  };
};

export const increaseSearchCount = (breedId) => {
  return {
    type: INCREASE_SEARCH_COUNT,
    payload: breedId,
  };
};

const reducer = (state = { breeds: [], topSearchedBreeds: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BREEDS: {
      state = { ...state, breeds: payload };
      return state;
    }
    case SET_TOP_SEARCHED_BREEDS: {
      state = { ...state, topSearchedBreeds: payload };
      return state;
    }
    case INCREASE_SEARCH_COUNT: {
      const breedId = payload;
      const breedIndex = state.breeds.findIndex(
        (breed) => breed.id === breedId
      );
      const breed = state.breeds[breedIndex];
      const updatedBreed = { ...breed, search: breed.search + 1 };
      const updatedBreeds = [
        ...state.breeds.slice(0, breedIndex),
        updatedBreed,
        ...state.breeds.slice(breedIndex + 1),
      ];
      console.log(updatedBreed.search, updatedBreed.name);

      let updatedTopSearchedBreeds = [...state.topSearchedBreeds];
      const topIndex = updatedTopSearchedBreeds.findIndex(
        (breed) => breed.id === updatedBreed.id
      );

      if (topIndex === -1)
        updatedTopSearchedBreeds = [...updatedTopSearchedBreeds, updatedBreed];
      else
        updatedTopSearchedBreeds = [
          ...updatedTopSearchedBreeds.slice(0, topIndex),
          ...updatedTopSearchedBreeds.slice(topIndex + 1),
          updatedBreed,
        ];

      updatedTopSearchedBreeds = [
        ...updatedTopSearchedBreeds
          .sort((b1, b2) => b2.search - b1.search)
          .slice(0, 10),
      ];
      console.log(updatedTopSearchedBreeds.map((b) => b.search));

      state = {
        ...state,
        breeds: [...updatedBreeds],
        topSearchedBreeds: [...updatedTopSearchedBreeds],
      };
      return state;
    }
    default:
      return state;
  }
};

export const store = createStore(reducer);
