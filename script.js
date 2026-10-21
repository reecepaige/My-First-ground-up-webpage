const moonImg = document.querySelector("img");
moonImg.src = "https://media.istockphoto.com/id/1174127507/photo/baltic-sea-at-moonlight.webp?a=1&b=1&s=612x612&w=0&k=20&c=lu8Qy7twGP8cEzcw5AfD2vDV7N7MlNyHfYih3bXe270=";  

const moon = document.querySelector("img");

const header = document.querySelector("header");
header.style.backgroundColor = "#540480";
header.style.textDecorationColor= "rgb(34, 1, 24)";

moon.addEventListener("click", function () {
    moon.classList.toggle("glow");
});

const items = document.querySelectorAll("li");
console.log(items[0]);  // first <li>
console.log(items[1]);  // second <li>
console.log(items[2]);  // third <li>

const paragraph = document.getElementById("main-content");
paragraph.textContent = "I am a single mom with a passion for sportbikes, working on them, understanding them, and learning everything I can about riding them after nearly dying when I hit a guardrail doing 75 mph and then rode home with my spine crushed T1-T6 and a puctured lung among many other injuries! I am a ZX-10R Brat and I love my bike and my kids and I will never give up on either of them!";

const button = document.querySelector("button");
function handle_click() {
  // your code here
  document.querySelector("#main-content").textContent = "Ha Ha I made you look! You clicked the button and now you are stuck with this text forever! Just kidding, you can refresh the page to get back to the original text.";
}
button.addEventListener("click", handle_click);

const userInput = document.getElementById("userInput");
userInput.addEventListener("input", () => {
  document.querySelector("#main-content").textContent = userInput.value;
});

// This function calls the "dealership" and waits for the specs
async function getZX10RSpecs() {
  console.log("Calling dealership...");

  // await = "wait for them to call back with the data"
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const specs = await response.json();

  console.log("Title:", specs.title);
  return specs;
}

getZX10RSpecs();
console.log("Going for a ride while I wait... 🏍️💨");

async function getBikeComments() {
  // 1. Fetch the data from the API
  const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
  // 2. Parse the response into JSON format
  const data = await response.json();
  // 3. Log the email field from the response
  console.log(data.email);
  return data;
}

// Call the function to execute it
getBikeComments();
console.log("Going for a ride while I wait... 🏍️💨");

const bikes = ["ZX-10R", "R1", "GSX-R1000"];

for (const bike of bikes) {
  console.log(bike);
}

async function getPostTitle() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();
    const postList = document.getElementById("post-list");
    for (const post of posts) {
      const listItem = document.createElement("li");
      listItem.textContent = post.title;
      postList.appendChild(listItem);
    }
  } catch (error) {
    console.error("Error fetching post title:", error);
  }
}
getPostTitle();