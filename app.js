
var rover = {
    direction: "N",
    posX: 0,
    posY: 0,
    travelLog: []
  }
  
  function turnRight(){
  switch (rover.direction) {
    case: "N";
    rover.direction = "E";
    console.log("Rover is now facing East.");
    break;
    case: "S";
    rover.direction = "W";
    console.log("Rover is now facing West.");
    break;
    case: "E"
    rover.direction = "S";
    console.log("Rover is now facing South.");
    break;
    case: "W"
    rover.direction = "N";
    console.log("Rover is now facing North.");
    break;
   }
  }
  
  function turnLeft() {
    switch (rover.direction) {
      case: "N";
      rover.direction = "W";
      console.log("Rover is now facing West.");
      break;
      case: "E";
      rover.direction = "N";
      console.log("Rover is now facing North.");
      break;
      case: "S";
      rover.direction = "E";
      console.log("Rover is now facing East.");
      break;
      case: "W";
      rover.direction = "S";
      console.log("Rover is now facing South.");
      break;
    }
  }
  
  function moveForward(rover){
    console.log("Rover moving forward");
    if (rover.direction === "N" && rover.posY > 0 && rover.posY < 9){
      rover.posY -= 1;  
    } else if (rover.direction === "S" && rover.posY > 0 && rover.posY < 9) {
      rover.posY += 1;
    } else if (rover.direction === "E" && rover.posX > 0 && rover.posX < 9) {
      rover.posX += 1;
    } else if (rover.direction === "W" && rover.posX > 0 && rover.posX < 9) {
      rover.posX -= 1;
    } else {
        console.log("Warning!! Rover cannot move off grid")
  }
}

    function moveBackWard(rover){
        console.log("Rover is backing up");
        if(rover.direction === "N" && rover.posY < 9 && rover.posY > 0){
            rover.posY += 1;
        } else if (rover.direction === "E" && rover.posX < 9 && rover.posX > 0){
            rover.posX += 1;
        } else if (rover.direction === "S" && rover.posY < 9 && rover.posY > 0){
            rover.posY -= 1;
        } else if (rover.direction === "W" && rover.posX < 9 && rover.posY > 0){
            rover.posX -= 1;
        } else {
            console.log("WARNING!! Rover cannot move off grid!!")
        }

    }

  function roverCommand(command){
  for(var i = 0;i < command.length; i++){
    if(i === 'f'){
      moveForward(rover);
    } else if (i === 'r'){
      turnRight(rover);
    } else if (i === 'l') {
      turnLeft(rover);
    } else if (i === 'b'){
        moveBackWard(rover);
    } else {
        console.log("Invalid Rover Command");
    }
   }
  }
  
  
  roverCommand(l)