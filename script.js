const blogPosts = [
    { title: "First Post", content: "This is the content of the first post." },
    {
        title: "Second Post",
        content: "This is the content of the second post.",
    },
    {
        title: "third Post",
        content: "This is the content of the third post.",
    },
    {
        title: "fourth Post",
        content: "This is the content of the fourth post.",
    },
    {
        title: "five Post",
        content: "This is the content of the five post.",
    },
    {
        title: "Six Post",
        content: "This is the content of the six post.",
    },
    {
        title: "Seven Post",
        content: "This is the content of the seven post.",
    },
    {
        title: "eight Post",
        content: "This is the content of the eight post.",
    },
    {
        title: "nine Post",
        content: "This is the content of the nine post.",
    },
    {
        title: "ten Post",
        content: "This is the content of the ten post.",
    },
    {
        title: "Eleven Post",
        content: "This is the content of the Eleven post.",
    },
    {
        title: "twelve Post",
        content: "This is the content of the twelve post.",
    },
    {
        title: "thirteen Post",
        content: "This is the content of the thirteen post.",
    },
    {
        title: "fourteen Post",
        content: "This is the content of the fourteen post.",
    },
    // Add more posts as needed
];

function displayBlogPosts() {
    const blogPostsElement = document.getElementById("blogPosts");

    blogPosts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.content}</p>
          `;

        blogPostsElement.appendChild(postElement);
    });
}

window.onload = displayBlogPosts;
