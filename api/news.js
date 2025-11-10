import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=barber&from=2025-10-22&sortBy=popularity&pageSize=10&language=en&apiKey=${process.env.NEWS_API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ message: "Error fetching news", error: error.message });
  }
}
