const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ];
  
//   export default questions;

const frame = document.getElementById("main-container");
for (let i = 0; i < questions.length; i++) {
    const element = questions[i];
    console.log(element)

let newDiv = document.createElement("div");
newDiv.id = element.id;
newDiv.className = "card";
newDiv.innerHTML = `<p>${element.question}</p>`; 
  newDiv.onclick = function () {
    let updateCards = document.getElementsByClassName("card");

    for(let j=0; j<updateCards.length; j++){
      updateCards[j].innerHTML=`<p>${questions[j].question}</p>`;
      updateCards[j].style.backgroundColor = "cadetblue";
    }
    // Switch statemnent
    let text = newDiv.innerHTML;
    switch (text) {
      case  newDiv.innerHTML= `<p>${element.question}</p>`:
        newDiv.innerHTML = `<p>${element.answer}</p>`;
        newDiv.style.backgroundColor = "#b73535";
        
        break;
        // case  newDiv.innerHTML= `<p>${element.answer}</p>`:
        //     newDiv.innerHTML = `<p>${element.question}</p>`;
        //     newDiv.style.backgroundColor = "cadetblue";
  
        //     break;
    default:
 newDiv.innerHTML = `<p> ${element.question} </p>`
        break;
}
}
  frame.appendChild(newDiv);
}

// MAP Method : 
// questions.map((element) => {
//   console.log(element);
//   let newDiv = document.createElement("div");
//   newDiv.id = element.id;
//   newDiv.className = "card";
//   newDiv.innerHTML = `<p>${element.question}</p>`; 
//   newDiv.onclick = function () {

    // let currentText = newDiv.innerHTML;
    
    // switch (true) {
    //   case currentText.includes(element.question):
    //     newDiv.innerHTML = `<p>${element.answer}</p>`;
    //     console.log(newDiv.innerHTML);
    //     break;
    //   case currentText.includes(element.answer):
    //     newDiv.innerHTML = `<p>${element.question}</p>`;
    //     console.log("case is answer");
    //     break;
    //   default:
    //     newDiv.innerHTML = `<p>${element.question}</p>`;
    //     break;
    // }







// newDiv.innerHTML = `<p>${element.question}</p>`;
// let text = newDiv.innerHTML
// switch (text) {
//     case  newDiv.innerHTML:
//         newDiv.innerHTML = `<p>${element.answer}</p>`;

//         console.log(newDiv.innerHTML)
//         frame.appendChild(newDiv.innerHTML)
//         break;
//         case  newDiv.innerHTML:
//             console.log("case is answer")
//             newDiv.innerHTML = `<p>${element.question}</p>`;
  
//             break;
//     default:
//  newDiv.innerHTML = `<p> ${element.question} </p>`
//         break;
// }

    
// }
//   frame.appendChild(newDiv);
// });