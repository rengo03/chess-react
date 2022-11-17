import {tileIsEmptyOrOcuppiedByOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";

export function queenMove(
    initialPosition,
    desiredPosition,
    team,
    boardState,
){
    //queen movement
    if(initialPosition.x === desiredPosition.x){  
      for(let i=1;i<8;i++){
        let multiplier = (desiredPosition.y < initialPosition.y) ? -1 : 1;
  
        let passedPosition = {
          x:initialPosition.x,
          y: initialPosition.y+(i*multiplier)
        };
        if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
          if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
            return true;
          }
        }else{
          if(tileIsOccupied(passedPosition, boardState)){
            break; 
          }
        }
      }
    }
      if(initialPosition.y === desiredPosition.y){
        for(let i=1;i<8;i++){
          let multiplier = (desiredPosition.x < initialPosition.x) ? -1 : 1;
  
          let passedPosition = {
            x:initialPosition.x + (i*multiplier),
            y: initialPosition.y
          };
          if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
            if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
              return true;
            }
          }else{
            if(tileIsOccupied(passedPosition, boardState)){
              break; 
            }
          }
        }
      } 

     //Movement and attack logic for the queen 
     for(let i=1;i<8;i++)
     {
       // Up right movement 
       if(desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y){
         let passedPosition = {
           x: initialPosition.x + i,
           y: initialPosition.y + i
         };
         //Check if the tile is the destination
         if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
           //Dealing with destination tile
           if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
             return true;
           }
         } else{
           //Dealing with passing tile
           if(tileIsOccupied(passedPosition, boardState)){
             break;
           }
         }
       }
       // Bottom right movement 
       if(desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y){
         let passedPosition = {
           x: initialPosition.x + i,
           y: initialPosition.y - i
         };
         //Check if the tile is the destination
         if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
           //Dealing with destination tile
           if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
             return true;
           }
         } else{
           //Dealing with passing tile
           if(tileIsOccupied(passedPosition, boardState)){
             break;
           }
         }
       }
       // Bottom left movement 
       if(desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y){
         let passedPosition = {
           x: initialPosition.x - i,
           y: initialPosition.y - i
         };
         //Check if the tile is the destination
         if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
           //Dealing with destination tile
           if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
             return true;
           }
         } else{
           //Dealing with passing tile
           if(tileIsOccupied(passedPosition, boardState)){
             break;
           }
         }
       }
       // Top left movement 
       if(desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y){
         let passedPosition = {
           x: initialPosition.x - i,
           y: initialPosition.y + i
         };
         //Check if the tile is the destination
         if(passedPosition.x === desiredPosition.x && passedPosition.y === desiredPosition.y){
           //Dealing with destination tile
           if(tileIsEmptyOrOcuppiedByOpponent(passedPosition, boardState, team)){
             return true;
           }
         } else{
           //Dealing with passing tile
           if(tileIsOccupied(passedPosition, boardState)){
             break;
           }
         }
       }
     } 
   return false;
}

export const getPossibleQueenMoves = (queen, boardState) => {
  const possibleMoves = [];

  //upper right movement
  for(let i = 1;i < 8;i++){
    const destination = {x: queen.position.x + i, y: queen.position.y + i};
    
    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //bottom right movement
  for(let i = 1;i < 8;i++){
    const destination = {x: queen.position.x + i, y: queen.position.y - i};
    
    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //bottom left movement
  for(let i = 1;i < 8;i++){
    const destination = {x: queen.position.x - i, y: queen.position.y - i};
    
    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //upper left movement
  for(let i = 1;i < 8;i++){
    const destination = {x: queen.position.x - i, y: queen.position.y + i};
    
    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }

  //Top Movement
  for(let i=1;i<8;i++){
    const destination = {x: queen.position.x, y:queen.position.y+i};

    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //Bottom Movement
  for(let i=1;i<8;i++){
    const destination = {x: queen.position.x, y:queen.position.y-i};

    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //Right Movement
  for(let i=1;i<8;i++){
    const destination = {x: queen.position.x+i, y:queen.position.y};

    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }
  //Left Movement
  for(let i=1;i<8;i++){
    const destination = {x: queen.position.x-i, y:queen.position.y};

    if(!tileIsOccupied(destination, boardState)){
      possibleMoves.push(destination);
    }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
      possibleMoves.push(destination);
      break;
    }else{
      break;
    }
  }

  return possibleMoves;
}