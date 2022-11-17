import {samePosition} from "../../../Constants"

export function tileIsEmptyOrOcuppiedByOpponent(
    position,
    boardState,
    team){
      return (
        !tileIsOccupied(position,boardState) ||
        tileIsOccupiedByOpponent(position,boardState,team)
      );
  }

export function tileIsOccupied(position,boardState){
    const piece = boardState.find(
      (p) => samePosition(p.position, position) )
    
    if(piece){
      return true;
    }else{
      return false;
    }
  }

export function tileIsOccupiedByOpponent(position,boardState,team){
    
    const piece = boardState.find(
      (p) => samePosition(p.position, position) && p.team!==team);
    
    if(piece){
      return true;
    }else{
      return false;
    }
  }
