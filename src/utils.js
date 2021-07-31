import axios from "axios";

export const getUserProfile = async (userId) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  return res.data;
};
