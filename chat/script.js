if (document.readyState === "loading") {  // Delay init until content is loaded
    document.addEventListener("DOMContentLoaded", init); // Call init when content is loaded
} else { // Else if content is already loaded
    init(); // Call init right away
}

// Add some functionality to the page
function init() {
    console.log("Initializing!");

    //display current time
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    // TODO create object containing user and messages
    const receiver = {
        users : ["325454", "554544", "555332"],
        messages : ['Hey how are you?', 'Cool!', 'Not bad!', 'I am also doing good!', 'Was it hard to make this work?', 'What classes do you have today?']
    };

// TODO receiver function
    function answer(){
        let parentDiv = document.createElement('div');
        document.getElementById("empty").appendChild(parentDiv);
        parentDiv.classList.add("container");
        parentDiv.id = "receiverContainer";
        let image = document.createElement('img');
        image.src="user2.jpg";
        parentDiv.appendChild(image);
        let user =  document.createElement("P");
        parentDiv.appendChild(user);
        //get random number 5 digits
        let userRandom = Math.floor(Math.random()*90000) + 10000;
        user.textContent = "UserId:" + "  " + userRandom;
        let receiverP =  document.createElement("P");
        parentDiv.appendChild(receiverP);
        //get random message from array into object
        let receiverText =  receiver.messages[Math.floor(Math.random() * receiver.messages.length)];
        receiverP.textContent = receiverText;
        //add timespan
        let timeSpan = document.createElement('span');
        timeSpan.classList.add("time-right");
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        timeSpan.textContent = dateTime;
        parentDiv.appendChild(timeSpan);

    }

//TODO sender text
    document.querySelector('#submitItemBtn').addEventListener("click", (event) => {
        event.preventDefault(); // Prevent standard HTML form behaviour (page reload)

    //TODO create a new html chat element for sender
        let inputText = document.getElementById("inputText").value;
        if (inputText.length > 0) {
    let parentDiv = document.createElement('div');
            document.getElementById("empty").appendChild(parentDiv);
    parentDiv.classList.add("container", "darker");
    parentDiv.id = "senderContainer";
    let image = document.createElement('img');
    image.src="user1.png";
    parentDiv.appendChild(image);
    let senderP =  document.createElement("P");
    parentDiv.appendChild(senderP);
    senderP.id = "senderTxt";
    // TODO get input value
    senderP.textContent = inputText;
    //add timespan
            let timeSpan = document.createElement('span');
            timeSpan.classList.add("time-right");
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date+' '+time;
            timeSpan.textContent = dateTime;
            parentDiv.appendChild(timeSpan);
    //remove written txt from input field
            document.getElementById("inputText").value = "";

            //delay the answer and run the function once
            setTimeout(answer, 3000);

        }


    });

    }
