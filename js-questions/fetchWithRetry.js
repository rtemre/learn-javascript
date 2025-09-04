// Write a function fetchWithRetry that makes an API call.
// If the API request fails, it should automatically retry up to 3 times before finally returning the result or throwing an error.

async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json(); // or .text(), depending on API
    } catch (error) {
      if (attempt < retries) {
        console.warn(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
        await new Promise((res) => setTimeout(res, delay));
      } else {
        throw new Error(`Failed after ${retries} attempts: ${error.message}`);
      }
    }
  }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("Success:", data))
  .catch((err) => console.error("Error:", err.message));

// Output example on failure:
// Attempt 1 failed. Retrying in 1000ms...
// fetchWithRetry.js:13
// Attempt 2 failed. Retrying in 1000ms...
// fetchWithRetry.js:13
// Error: Failed after 3 attempts: HTTP error! Status: 404

//  Output example on Success:
// {
//   userId: 1,
//   id: 1,
//   title:
//     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   body: "quia et suscipitsuscipit recusandae consequun…m rerum est autem sunt rem eveniet architecto",
// }
