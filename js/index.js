const API_URL = "https://jsonplaceholder.typicode.com";

// GET
async function getData() {
  const res = await fetch(`${API_URL}/posts`, {
    method: "GET"
    // headers: {
    //   "Content-Type": "application/json"
    // },
    // body: JSON.stringify({ id: 1 })
  });
  const data = await res.json();

  console.log("Response: ", data);
}

async function createPost(data) {
  const requestData = JSON.stringify(data);
  console.log("Request data: ", requestData);
  const req = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: requestData
  });
  const res = await req.json();

  console.log("Response: ", res);
}

const updatedData = {
  title: "This is a new post!",
  body: "DevComU",
  userId: 1,
  id: 1
};

const jsonData = JSON.stringify(updatedData);

var isLoading = false;

const loaderContainer = document.querySelector("[data-event]");
const reqBlock = document.querySelector("[request-data");
const resBlock = document.querySelector("#response-data");
const btn = document.getElementById("request");
document.getElementsByClassName("check")

reqBlock.append(`REQUEST DATA: ${jsonData}`);

async function updateData(data) {
  try {
    isLoading = true;

    console.log("Request data: ", data);

    if (isLoading) {
      loaderContainer.insertAdjacentHTML(
        `afterend`,
        `<p id="loader" >Loading... </p>`
      );
    }

    // loaderContainer.insertAdjacentElement("afterend", `<p>${data}</p>`)
    const req = await fetch(`${API_URL}/posts/1`, {
      method: "PATCH", // "PATCH"
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    });

    setTimeout(() => {
      Promise.resolve(1000);
    }, 1000);

    const res = await req.json();
    console.log("Response: ", res);

    resBlock.append(`RESPONSE DATA: ${JSON.stringify(res)}`);
  } catch (error) {
    console.error("Errors PUT/PATCH request: ", error);
  } finally {
    isLoading = false;

    const loaderEl = document.querySelector("#loader");
    loaderEl.remove();
  }
}

btn.addEventListener("click", async () => {
  await updateData(jsonData);
});
