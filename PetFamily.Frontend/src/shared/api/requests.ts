import axios from "axios";

const API_URL: string = "http://localhost:5296/api/";

export async function getUsersAsync() {
  const response = await axios.get<string[]>(API_URL + "users");

  return response.data;
}
