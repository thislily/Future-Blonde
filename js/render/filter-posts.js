import { allPosts, displayPosts } from "./fetch-posts.js";

//map category numbers to category names (this was annoying, wish they would just list the names)
const categoryMapping = {
    1: "All Posts",
    18: "Fashion",
    19: "Lifestyle",
    20: "Health",
    21: "Survival"
  };

// display the select element with category options
export function displayCategories() {
    const selectFilter = document.getElementById("filter");
  
    if (selectFilter){
    for (const [key, value] of Object.entries(categoryMapping)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = value;
      selectFilter.appendChild(option);
    }
    }
  }

// Add event listener to the select element for filtering
export function filterPosts(){
    const filter = document.getElementById("filter");
  
    if (filter){
        filter.addEventListener("change", async (event) => {
      const selectedCategory = event.target.value;
      let filteredPosts = []; // Initialize an array to store filtered posts
      if (selectedCategory === "all") {
        // If "All Posts" is selected, display all posts
        filteredPosts = allPosts; // Use allPosts array for filtering
      } else {
        // Otherwise, filter posts based on the selected category
        filteredPosts = allPosts.filter(post => post.categories.includes(parseInt(selectedCategory)));
      }
      displayPosts(filteredPosts);
    });
    }
  }
  
  