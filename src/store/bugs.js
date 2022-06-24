import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BUG_ADDED = "BUG_ADDED";
const BUG_REMOVE = "BUG_REMOVE";

export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description,
  },
});

console.log(bugAdded);

export const getUsers = createAsyncThunk("GET_USERS", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  bugs: [],
  users: [],
};

let lastId = 0;

export default function reducer(state = initialState, action) {
  if (action.type === "GET_USERS/fulfilled") {
    return {
      ...state,
      users: [...action.payload],
    };
  }
  if (action.type === BUG_ADDED) {
    return {
      ...state,
      bugs: [
        ...state.bugs,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ],
    };
  }

  if (action.type === BUG_REMOVE) {
    return state.filter((bug) => bug.id !== action.payload.id);
  }

  return state;
}
