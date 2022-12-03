let idOfElement = 1;
let movement = 0;
let myInterval;
let counter = 0;
let elementNumber = 100;
let elementCounter = 0;

function createEle(){
  if(elementCounter === 0){
    for(let i=0; i<elementNumber; i++){
      let newDiv = document.createElement("div");
      newDiv.id = i+1;
      newDiv.innerHTML = newDiv.id;
      document.getElementById("content").appendChild(newDiv);
      elementCounter++;
    };
  };
};

function startMove(){
  if (counter == 0){
    let element = document.getElementById(idOfElement);
    element.classList.add('on');
    myInterval = setInterval(setColor, 100);
  };
  counter++;
};

function setColor(){
  
  if (idOfElement===elementNumber){ 
    movement = -1;
  };

  if (idOfElement===1){
    movement = 1;
  };
  
  idOfElement += movement;
  element = document.getElementById(idOfElement);
  element.classList.add('on');
  
  setTimeout(()=>{
    document.getElementById(idOfElement-1).classList.remove('on');
    }, 10);
};

function stopMove(){
  clearTimeout(myInterval);

  element = document.getElementById(idOfElement)
  element.classList.add('on');

  counter = 0;
};
