import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Tile from './Tile';
import {
    VERTICAL_AXIS,
    HORIZONTAL_AXIS,
    GRID_SIZE,
    samePosition,
} from '../Constants';

export default function Chessboard(props) {

    let { playMove, pieces } = props;

    const [activePiece, setActivePiece] = useState(null);
    const [grabPosition, setGrabPosition] = useState({ x: -1, y: -1 });
    const chessboardRef = useRef(null);

    function grabPiece(e) {
        const element = e.target;
        const chessboard = chessboardRef.current;
        if (element.classList.contains("chess-piece") && chessboard) {
            const grabX = Math.floor((e.clientX - chessboard.offsetLeft) / GRID_SIZE);
            const grabY = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / GRID_SIZE));

            setGrabPosition({
                x: grabX,
                y: grabY
            })
            const x = e.clientX - GRID_SIZE / 2;
            const y = e.clientY - GRID_SIZE / 2;
            element.style.position = "absolute";
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;

            setActivePiece(element);
        }
    }


    function movePiece(e) {
        const chessboard = chessboardRef.current;
        // -----------------info-----------------
        // offsetLeft + offsetRight + clientWidth = window.innerWidth;
        // offset L/R = window.innerWidth - selected block;
        // ///////////////////////////////////////////////
        if (activePiece && chessboard) {
            const minX = chessboard.offsetLeft - 10;
            const minY = chessboard.offsetTop - 10;
            const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
            const maxY = chessboard.offsetTop + chessboard.clientHeight - 75;

            const x = e.clientX - GRID_SIZE / 2;
            const y = e.clientY - GRID_SIZE / 2;
            activePiece.style.position = "absolute";

            if (x < minX) {
                activePiece.style.left = `${minX}px`;
            } else if (x > maxX) {
                activePiece.style.left = `${maxX}px`;
            } else {
                activePiece.style.left = `${x}px`;
            }

            if (y < minY) {
                activePiece.style.top = `${minY}px`;
            } else if (y > maxY) {
                activePiece.style.top = `${maxY}px`;
            } else {
                activePiece.style.top = `${y}px`;
            }
        }
    }

    function dropPiece(e) {
        const chessboard = chessboardRef.current;
        if (activePiece && chessboard) {
            const x = Math.floor((e.clientX - chessboard.offsetLeft) / GRID_SIZE);
            const y = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / GRID_SIZE));

            const currentPiece = pieces.find((p) => samePosition(p.position, grabPosition));

            if (currentPiece) {
                let succes = playMove(currentPiece, { x, y });

                if (!succes) {
                    //RESETS THE PIECE POSITION
                    activePiece.style.position = "relative";
                    activePiece.style.removeProperty("top");
                    activePiece.style.removeProperty("left");
                }
            }
            setActivePiece(null);
        }
    }

    let board = [];
    for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
        for (let i = 0; i <= HORIZONTAL_AXIS.length - 1; i++) {
            let number = j + i + 2;
            const piece = pieces.find((p) => samePosition(p.position, { x: i, y: j }));
            let image = piece ? piece.image : undefined;

            let currentPiece = activePiece != null ? pieces.find(p => samePosition(p.position, grabPosition)) : undefined;
            let highlight = currentPiece?.possibleMoves ?
                currentPiece.possibleMoves.some(p => samePosition(p, { x: i, y: j })) : false;

            board.push(
                <Tile key={`${j}, ${i}`} image={image} number={number} highlight={highlight} />
            );
        }
    }

    return (
        <Container>

            <div
                onMouseMove={e => { movePiece(e) }}
                onMouseDown={e => { grabPiece(e) }}
                onMouseUp={e => { dropPiece(e) }}
                ref={chessboardRef}
                className="board">
                {board}
            </div>
        </Container>
    )
}

const Container = styled.div`
    color:white;
   
    .board{
        width: 800px;
        height: 800px;
        background-color: #d18b47;

        display: grid;
        grid-template-columns: repeat(8,100px);
        grid-template-rows: repeat(8,100px);
    }
`;