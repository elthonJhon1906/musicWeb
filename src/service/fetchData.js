import { musicData, artistData } from "../service/constant.js";

export const fetchMusicData = async () => {
  try {
    return { artistData, musicData };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { artistData: [], musicData: [] }; // Return empty arrays to prevent crashes
  }
};
