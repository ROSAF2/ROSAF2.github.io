
$(_ => {
    
//Fetching music information
fetch("assets/json/music.json")
.then(res => res.json())
.then(data => {

    const {recent10Tracks, top8Artists, top10Tracks} = data //Decunstructing and pulling values from the array

    firstKey(recent10Tracks);
    secondKey(top8Artists);
    thirdKey(top10Tracks);
    
});

//Recent Songs
function firstKey(array){
    //Recent 10
    //Extracting and appending the data
    array.forEach(element => {
        //Obtaining the element which has both the class list and the class recent
        let ul = document.querySelector(".list.recent");
        //Creating a list item
        let li = document.createElement("li");

        //Creating left div to put inside the left half of the item
        let divLeft = document.createElement("div");
        divLeft.classList.add("left-div");
    
        //Play Icon
        let playIcon = document.createElement("div");
        playIcon.style.background = "url(assets/img/Play.jpg) no-repeat center center/cover";
        playIcon.style.width = "40px";
        playIcon.style.height = "40px";
        //Storing play icon in left div
        divLeft.append(playIcon);
    
        //Creating a div to hold the song and artist
        let textDiv = document.createElement("div");
        //Song Name
        let songName = document.createElement("div");
        songName.textContent = element.songName;
        textDiv.append(songName);
        //Artist Name
        let artistName = document.createElement("div");
        artistName.textContent = element.artistName;
        textDiv.append(artistName);
        //Storing text div inside left div
        divLeft.append(textDiv);
        //Storing left div inside the item
        li.append(divLeft);
    
        //Creating right div to put inside the right half of the item
        let divRight = document.createElement("div");
        divRight.classList.add("right-div");
        
        //Artist Icon
        let artistIcon = document.createElement("div");
        artistIcon.style.background = `url(assets/img/${element.image}) no-repeat center center/cover`;
        artistIcon.style.width = "50px";
        artistIcon.style.height = "50px";
        //Storing artist icon in right div
        divRight.append(artistIcon);
        
        //Heart Icon
        let heartIcon = document.createElement("div");
        heartIcon.classList.add("love");
        //Storing play icon in right div
        divRight.append(heartIcon);
    
        //How long ago
        let longAgo = document.createElement("div");
        longAgo.textContent = element.listenedAgo;
        //Storing longAgo in right div
        divRight.append(longAgo);
    
        //Storing right div inside the list item
        li.append(divRight);
        //Storing the list item inside the unordered list ul
        ul.append(li);
        });
}
//Top 8 Artists
function secondKey(array){
    array.forEach(element => {
        let div = document.createElement("div");
        div.style.background = `url(assets/img/${element.image}) no-repeat center center/cover`;
        div.innerHTML = `<div id="grid-artist">${element.artistName}</div>` + 
        `<div id="grid-listens">${element.totalListens}</div>`;
        document.getElementById("grid-container").append(div);
    });
}
//Top 10 Songs
function thirdKey(array){
    //Calculate Maximum
    let max = 0; 
    array.forEach(element => {
    max = Math.max(max,element.totalListens);
    });
    //Extracting and appending the data
    array.forEach((element, idx) => {
        //Obtaining the element which has both the class list and the class top
        let ul = document.querySelector(".list.top");
        //Creating a list item
        let li = document.createElement("li");

        //Creating left div to put inside the left half of the item
        let divLeft = document.createElement("div");
        divLeft.classList.add("left-div");

        //Track Number
        let divCounter = document.createElement("div");
        divCounter.textContent = `${idx+1}`;
        //Storing counter in left div
        divLeft.append(divCounter);

        //Play Icon
        let playIcon = document.createElement("div");
        playIcon.style.background = "url(assets/img/Play.jpg) no-repeat center center/cover";
        playIcon.style.width = "40px";
        playIcon.style.height = "40px";
        //Storing play icon in left div
        divLeft.append(playIcon);

        //Creating a div to hold the song and artist
        let textDiv = document.createElement("div");
        //Song Name
        let songName = document.createElement("div");
        songName.textContent = element.songName;
        textDiv.append(songName);
        //Artist Name
        let artistName = document.createElement("div");
        artistName.textContent = element.artistName;
        textDiv.append(artistName);
        //Storing text div inside left div
        divLeft.append(textDiv);

        //Storing left div inside the item
        li.append(divLeft);

        //Creating right div to put inside the right half of the item
        let divRight = document.createElement("div");
        divRight.classList.add("right-div");

        //Barchart
        let barchart = document.createElement("div");
        barchart.id ="barchart";
        barchart.style.width = `${Math.round(200*element.totalListens/max)}px`;
        barchart.textContent = element.totalListens;
        //Storing barchart in right div
        divRight.append(barchart);

        //Artist Icon
        let artistIcon = document.createElement("div");
        artistIcon.style.background = `url(assets/img/${element.image}) no-repeat center center/cover`;
        artistIcon.style.width = "50px";
        artistIcon.style.height = "50px";
        //Storing artist icon in right div
        divRight.append(artistIcon);

        //Heart Icon
        let heartIcon = document.createElement("div");
        heartIcon.classList.add("love");
        //Storing heart icon in right div
        divRight.append(heartIcon);

        //Storing right div inside the list item
        li.append(divRight);
        //Storing the list item inside the unordered list ul
        ul.append(li);
    });
}

//Heart functionality
document.addEventListener("click", event => {
    if(event.target.matches(".love")){
        event.target.classList.remove("love");
        event.target.classList.add("darkLove");
    }else if(event.target.matches(".darkLove")){
        event.target.classList.remove("darkLove");
        event.target.classList.add("love");
    }
});

//Comment Section
document.querySelector(".button.commentSection").addEventListener("click", element => {
    element.preventDefault();
    
    //Getting values from Form, and Date
    let textArea = document.getElementById("commenText").value;
    let name = document.getElementById("nameInput").value;
    if (textArea !== "" || name !== "") {
        let date = new Date();

        //Creating comment structure
        //div class="comment"
        let commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        
        //div class="name-date"
        let nameDateDiv = document.createElement("div");
        nameDateDiv.classList.add("name-date");
        
        //Creating div to store the name
        let nameDiv = document.createElement("div");
        nameDiv.innerHTML = name;

        //Creating div to store the date
        let dateDiv = document.createElement("div");
        dateDiv.textContent = date.toLocaleDateString();

        //div class="actualComment"
        let actualCommentDiv = document.createElement("div");
        actualCommentDiv.classList.add("actualComment");
        actualCommentDiv.textContent = textArea;

        //Appending to parent div respectively
        nameDateDiv.append(nameDiv);
        nameDateDiv.append(dateDiv);
        commentDiv.append(nameDateDiv);
        commentDiv.append(actualCommentDiv);
        document.getElementById("comments").append(commentDiv);

        //Clearing Form Entries
        document.getElementById("commenText").value ="";
        document.getElementById("nameInput").value ="";
    } else{
        alert("Fill all the fields.");
    }
});
//End
});



