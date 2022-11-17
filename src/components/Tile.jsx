import React from 'react'
import styled from "styled-components";

export default function Tile(props) {
    let { number, image, highlight } = props;

    const className = [
        "tile",
        number % 2 === 0 && "black-tile",
        number % 2 !== 0 && "white-tile",
        highlight && "tile-highlight",
        image && "chess-piece-tile"
    ].filter(Boolean).join(' ');

    return (
        <Container>
            <div className={className} >
                {image && <div className='chess-piece' style={{ backgroundImage: `url(${image})` }}
                ></div>}
            </div>
        </Container >
    )
}

const Container = styled.div`
    .white-tile{
        background-color: #ffce9e;
    }
    .black-tile{
        background-color: #d18b47;
    }
    .tile{
        display: grid;
        place-content: center;
        width: 100px;
        height: 100px;
        .chess-piece{
            width: 80px;
            height: 80px;
            background-repeat: no-repeat;
            background-size: contain;
            background-size: cover;
        }
        .chess-piece:hover{
            cursor: grab;
        }
        .chess-piece:active{
            cursor: grabbing;
        }
    }
    .tile-highlight:not(.chess-piece-tile)::before{
        content: " ";
        width:24px;
        height:24px;
        border-radius:50%;
        background-color: rgba(0, 0, 0, 0.4)
    }
    .tile-highlight.chess-piece-tile::before{
        position:absolute;
        content: " ";
        width:90px;
        height:90px;
        border: 5px solid rgba(0, 0, 0, 0.4);
        border-radius:50%;
       
    }
`;
