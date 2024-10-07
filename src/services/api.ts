import axios from "axios";

const API_URL =
  "https://cubeia-code-tests.s3.eu-west-1.amazonaws.com/lobby.json";

export const fetchLobbyData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
