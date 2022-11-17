import {tileIsEmptyOrOcuppiedByOpponent} from "../rules/GeneralRules";

export function knightMove(
    initialPosition,
    desiredPosition,
    team,
    boardState,
  ){
      //MOVING LOGIC FOR THE KNIGHT
      //8 DIFFERENT MOVING PATTERNS 
      for(let i=-1; i < 2 ; i+=2){
        for(let j=-1;j<2;j+=2){
        //TOP AND BOTTOM SIDE MOVEMENT
        if(desiredPosition.y - initialPosition.y === 2*i){
          if(desiredPosition.x - initialPosition.x === j){
            if(tileIsEmptyOrOcuppiedByOpponent(
              desiredPosition,
              boardState,
              team
            )){
              return true;
            }
          } 
        }
        //RIGHT AND LEFT SIDE MOVEMENT
        if(desiredPosition.x - initialPosition.x === 2*i){
          if(desiredPosition.y - initialPosition.y === j){
            if(tileIsEmptyOrOcuppiedByOpponent(
              desiredPosition,
              boardState,
              team
            )){
              return true;
            }
          }
        }
        }
      }
    return false;
  }
  
  export const getPossibleKnightMoves = (knight, boardState) => {
    const possibleMoves = [];

    for(let i=-1; i < 2 ; i+=2){
      for(let j=-1;j<2;j+=2){
        const verticalMove = {x: knight.position.x + j, y: knight.position.y + i*2};
        const horizontalMove = {x: knight.position.x + i*2, y: knight.position.y + j};

        if(tileIsEmptyOrOcuppiedByOpponent(verticalMove, boardState, knight.team)){
          possibleMoves.push(verticalMove);
        }
        if(tileIsEmptyOrOcuppiedByOpponent(horizontalMove, boardState, knight.team)){
          possibleMoves.push(horizontalMove);
        }
      }
    }

    return possibleMoves;
  }