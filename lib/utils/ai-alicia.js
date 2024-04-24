const axios = require("axios");
async function fetchData(sistem, input) {
  const messages = [
    { role: "system", content: sistem },
    { role: "user", content: input },
  ];

  try {
    const response = await fetch(
      "https://deepenglish.com/wp-json/ai-chatbot/v1/chat",
      {
        method: "POST",
        headers: {
          Accept: "text/event-stream",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
      },
    );

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
module.exports = {
  fetchData,
};