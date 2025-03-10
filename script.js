let titleInput = document.getElementById('titleInput');
let reviewTextarea = document.getElementById('reviewTextarea');
let reviewContainer = document.getElementById('reviewsContainer');

function onAddReview() {
    let title = titleInput.value ;
    // console.log(title);
    let review = reviewTextarea.value;
    // console.log(review);
    if(title === ""){
        alert("Please enter movie Title");
        return;
    }
    let heading = document.createElement("h1");
    // console.log(heading);
    heading.textContent = title ;
    heading.classList.add("movie-title");
    reviewContainer.appendChild(heading);
    
    let paragraph = document.createElement("p");
    // console.log(paragraph);
    paragraph.textContent = review ;
    reviewContainer.appendChild(paragraph);
    
    let hrline = document.createElement("hr");
    // console.log(hrline);
    reviewContainer.appendChild(hrline);
    
    titleInput.value = "";
    reviewTextarea.value = "";
}
onAddReview();