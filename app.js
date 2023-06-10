// Take the query from the HTML form and add it to the GIPHY API URL

let gifArea = $("#gif-section")

$("form").on("submit", async function(event) {
event.preventDefault();
let textSubmission = document.getElementById("text").value;

let gifRes = await axios.get("http://api.giphy.com/v1/gifs/search",
{params:{
 q: textSubmission,
 api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
});
const numResults = gifRes.data.data.length;
let randomNum = Math.floor(Math.random() * numResults);
let chosenGif = gifRes.data.data[randomNum];
let gifURL = chosenGif.url;
let newCol = document.createElement("div");
let newGif = document.createElement("img");
newGif.src= gifURL;
newCol.append(newGif);
gifArea.append(newCol);

});
