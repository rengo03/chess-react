import { samePosition } from "../../../Constants";
import {tileIsOccupiedByOpponent,tileIsOccupied,} from "./GeneralRules"; 

export function pawnMove(
    initialPosition,
    desiredPosition,
    team,
    boardState,
    ){
        const specialRow = team === "OUR" ? 1 : 6;
        const pawnDirection = team === "OUR" ? 1 : -1;
  
        // MOVEMENT LOGIC
        if(initialPosition.x === desiredPosition.x && 
          initialPosition.y === specialRow && 
          desiredPosition.y-initialPosition.y === 2*pawnDirection)
          {
          if(!tileIsOccupied(
            desiredPosition,
            boardState) && 
            !tileIsOccupied(
              {x: desiredPosition.x, y:desiredPosition.y-pawnDirection},
              boardState)){
            return true;
          }
        }else if(initialPosition.x === desiredPosition.x 
          && desiredPosition.y - initialPosition.y === pawnDirection)
          {
          if(!tileIsOccupied(
            desiredPosition,
            boardState)){
            return true;
          }
        }
        //ATTACK LOGIC
        else if(desiredPosition.x - initialPosition.x === -1 && desiredPosition.y - initialPosition.y === pawnDirection){
          //ATTACK IN UPPER OR BOTTOM LEFT CORNER
          if(tileIsOccupiedByOpponent(desiredPosition,boardState,team)){
            return true;
          }
        }else if(desiredPosition.x-initialPosition.x === 1 && desiredPosition.y - initialPosition.y === pawnDirection){
          //ATTACK IN UPPER OR BOTTOM RIGHT N CORNER
          if(tileIsOccupiedByOpponent(desiredPosition,boardState,team)){
            return true;
          }
        }
        return false;
      }


export const getPossiblePawnMoves = (pawn,boardState) => {
  const possibleMoves= [];

  const specialRow = pawn.team === "OUR" ? 1 : 6;
  const pawnDirection = pawn.team === "OUR" ? 1 : -1;

  const normalMove = {x: pawn.position.x, y: pawn.position.y + pawnDirection};
  const specialMove = {x: normalMove.x, y: normalMove.y + pawnDirection};
  const upperLeftAttack = {x: pawn.position.x -1, y: pawn.position.y + pawnDirection};
  const upperRightAttack = {x: pawn.position.x +1, y: pawn.position.y + pawnDirection};
  const leftPosition = {x: pawn.position.x -1, y: pawn.position.y };
  const rightPosition = {x: pawn.position.x +1, y: pawn.position.y };

  if(!tileIsOccupied(normalMove,boardState)){
    possibleMoves.push(normalMove);
    if(pawn.position.y === specialRow && 
      !tileIsOccupied(specialMove,boardState)){
        possibleMoves.push(specialMove);
      }
  }
  if(tileIsOccupiedByOpponent(upperLeftAttack,boardState,pawn.team)){
    possibleMoves.push(upperLeftAttack)
  }else if(!tileIsOccupied(upperLeftAttack,boardState)){
    const leftPiece = boardState.find(p => samePosition(p.position, leftPosition));
    if(leftPiece != null && leftPiece.enPassant){
      possibleMoves.push(upperLeftAttack);
    }
  }
  if(tileIsOccupiedByOpponent(upperRightAttack,boardState,pawn.team)){
    possibleMoves.push(upperRightAttack)
  }else if(!tileIsOccupied(upperRightAttack,boardState)){
    const rightPiece = boardState.find(p => samePosition(p.position, rightPosition));
    if(rightPiece != null && rightPiece.enPassant){
      possibleMoves.push(upperRightAttack);
    }
  }

  return possibleMoves;
}