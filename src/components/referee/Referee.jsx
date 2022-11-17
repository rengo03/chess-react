import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { initialBoardState, samePosition } from '../../Constants';
import Chessboard from '../Chessboard'
import { getPossibleBishopMoves, bishopMove } from './rules/Bishop';
import { getPossibleKingMoves, kingMove } from './rules/KingMove';
import { getPossibleKnightMoves, knightMove } from './rules/KnightMove';
import { getPossiblePawnMoves, pawnMove } from './rules/Pawn';
import { getPossibleQueenMoves, queenMove } from './rules/QueenMove';
import { getPossibleRookMoves, rookMove } from './rules/RookMove';

export default function Referee() {

    const [pieces, setPieces] = useState(initialBoardState);
    const [promotionPawn, setPromotionPawn] = useState();
    const modalRef = useRef(null);

    useEffect(() => {
        updatePossibleMoves();
    }, []);

    function updatePossibleMoves() {
        setPieces((currentPieces) => {
            return currentPieces.map(p => {
                p.possibleMoves = getValidMoves(p, currentPieces);
                return p;
            });
        });

    }

    function playMove(playedPiece, destination) {
        const validMove = isValidMove(
            playedPiece.position,
            destination,
            playedPiece.type,
            playedPiece.team,
        );

        const EnPassantMove = isEnPassantMove(
            playedPiece.position,
            destination,
            playedPiece.type,
            playedPiece.team,
        );

        const pawnDirection = playedPiece.team === "OUR" ? 1 : -1;

        if (EnPassantMove) {
            const updatedPieces = pieces.reduce((results, piece) => {
                if (samePosition(piece.position, playedPiece.position)) {
                    piece.enPassant = false;
                    piece.position.x = destination.x;
                    piece.position.y = destination.y;
                    results.push(piece);
                } else
                    if (!(samePosition(piece.position, { x: destination.x, y: destination.y - pawnDirection }))) {
                        if (piece.type === "PAWN") {
                            piece.enPassant = false;
                        }
                        results.push(piece);
                    }

                return results;
            }, []);

            updatePossibleMoves();
            setPieces(updatedPieces);
        } else if (validMove) {
            // UPDATES THE PIECE POSITION
            // AND IF A PIECE IS ATTACKED, REMOVES IT  
            const updatedPieces = pieces.reduce((results, piece) => {
                if (samePosition(piece.position, playedPiece.position)) {
                    //SPECIAL MOVE
                    piece.enPassant =
                        Math.abs(playedPiece.position.y - destination.y) === 2 && piece.type === "PAWN";
                    piece.position.x = destination.x;
                    piece.position.y = destination.y;

                    let promotionRow = piece.team === "OUR" ? 7 : 0;

                    if (destination.y === promotionRow && piece.type === "PAWN") {
                        modalRef.current?.classList.remove("hidden");
                        setPromotionPawn(piece);
                    }
                    results.push(piece);
                } else if (!(samePosition(piece.position, { x: destination.x, y: destination.y }))) {
                    if (piece.type === "PAWN") {
                        piece.enPassant = false;
                    }
                    results.push(piece);
                }

                return results;
            }, []);

            updatePossibleMoves();
            setPieces(updatedPieces);
        } else {
            return false;
        }
        return true;
    }

    function isEnPassantMove(
        initialPosition,
        desiredPosition,
        type,
        team,
    ) {
        const pawnDirection = team === "OUR" ? 1 : -1;

        if (type === "PAWN") {
            if ((desiredPosition.x - initialPosition.x === -1 || desiredPosition.x - initialPosition.x === 1) &&
                desiredPosition.y - initialPosition.y === pawnDirection) {
                const piece = pieces.find(
                    (p) =>
                        p.position.x === desiredPosition.x &&
                        p.position.y === desiredPosition.y - pawnDirection &&
                        p.enPassant);
                if (piece) {
                    return true;
                }
            }
        }

        return false;
    }

    function isValidMove(
        initialPosition,
        desiredPosition,
        type,
        team,
    ) {
        let validMove = false;
        switch (type) {
            case "PAWN":
                validMove = pawnMove(initialPosition, desiredPosition, team, pieces);
                break;
            case "KNIGHT":
                validMove = knightMove(initialPosition, desiredPosition, team, pieces);
                break;
            case "BISHOP":
                validMove = bishopMove(initialPosition, desiredPosition, team, pieces);
                break;
            case "ROOK":
                validMove = rookMove(initialPosition, desiredPosition, team, pieces);
                break;
            case "QUEEN":
                validMove = queenMove(initialPosition, desiredPosition, team, pieces);
                break;
            case "KING":
                validMove = kingMove(initialPosition, desiredPosition, team, pieces);
        }
        return validMove;
    }

    function getValidMoves(piece, boardState) {

        switch (piece.type) {
            case "PAWN":
                return getPossiblePawnMoves(piece, boardState);
            case "KNIGHT":
                return getPossibleKnightMoves(piece, boardState);
            case "BISHOP":
                return getPossibleBishopMoves(piece, boardState);
            case "ROOK":
                return getPossibleRookMoves(piece, boardState);
            case "QUEEN":
                return getPossibleQueenMoves(piece, boardState);
            case "KING":
                return getPossibleKingMoves(piece, boardState);
            default:
                return [];
        }
    }

    function promotePawn(pieceType) {
        if (promotionPawn === undefined) {
            return;
        }
        const updatedPieces = pieces.reduce((results, piece) => {
            if (samePosition(piece.position, promotionPawn.position)) {
                piece.type = pieceType;
                const teamType = piece.team === "OUR" ? "w" : "b";
                let image = "";

                switch (pieceType) {
                    case "ROOK":
                        image = "rook";
                        break;
                    case "KNIGHT":
                        image = "knight";
                        break;
                    case "BISHOP":
                        image = "bishop";
                        break;
                    case "QUEEN":
                        image = "queen";
                        break;
                }
                piece.image = `../images/${image}_${teamType}.png`;
            }
            results.push(piece);
            return results;
        }, []);
        setPieces(updatedPieces);
        updatePossibleMoves();
        modalRef.current?.classList.add("hidden");
    }
    function promotionTeamType() {
        return (promotionPawn?.team === "OUR") ? "w" : "b";
    }

    return (
        <Container>
            <div id="pawn-promotion-modal" className='hidden' ref={modalRef}>
                <div className="modal-body">
                    <img onClick={() => promotePawn("ROOK")} src={`../images/rook_${promotionTeamType()}.png`} alt="" />
                    <img onClick={() => promotePawn("KNIGHT")} src={`../images/knight_${promotionTeamType()}.png`} alt="" />
                    <img onClick={() => promotePawn("BISHOP")} src={`../images/bishop_${promotionTeamType()}.png`} alt="" />
                    <img onClick={() => promotePawn("QUEEN")} src={`../images/queen_${promotionTeamType()}.png`} alt="" />
                </div>
            </div>
            <Chessboard
                playMove={playMove}
                pieces={pieces}
            />
        </Container>
    )
}

const Container = styled.div`
    #pawn-promotion-modal{
        position:absolute;
        top:0px;
        right:0px;
        bottom:0px;
        left:0px;
        .modal-body{
            position: absolute; 
            display: flex;
            justify-content: space-around;
            align-items:center;
            top:36%; //top:calc(50%-150px); -> not working!
            left:calc(50%-400px);
            height:300px;
            width:800px;
            background-color: rgba(0, 0, 0, 0.8);
            img{
                height:120px;
                padding:20px;
                border-radius: 50%;
            }
            img:hover{
                cursor: pointer;
                background-color:rgba(255, 255, 255, 0.3)
            }
        }
        
    }
    #pawn-promotion-modal.hidden{
        display:none;
    }
`;