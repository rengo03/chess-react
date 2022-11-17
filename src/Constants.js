export const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const GRID_SIZE = 100;

export function samePosition(p1, p2){
    return p1.x === p2.x && p1.y===p2.y;
}

export const initialBoardState = [
    //BLACK PIECES
    {
        image: 'images/rook_b.png',
        position:{ 
            x: 7,
            y: 7,
        },
        type: "ROOK",
        team: "OPPONENT"
    },
    {
        image: 'images/rook_b.png',
        position:{ 
            x: 0,
            y: 7,
        },
        type: "ROOK",
        team: "OPPONENT"
    },
    {
        image: 'images/knight_b.png',
        position:{ 
            x: 1,
            y: 7,
        },
        type: "KNIGHT",
        team: "OPPONENT"
    },
    {
        image: 'images/knight_b.png',
        position:{ 
            x: 6,
            y: 7,
        },
        type: "KNIGHT",
        team: "OPPONENT"
    },
    {
        image: 'images/bishop_b.png',
        position:{ 
            x: 5,
            y: 7,
        },
        type: "BISHOP",
        team: "OPPONENT"
    },
    {
        image: 'images/bishop_b.png',
        position:{ 
            x: 2,
            y: 7,
        },
        type: "BISHOP",
        team: "OPPONENT"
    },
    {
        image: 'images/king_b.png',
        position:{ 
            x: 4,
            y: 7,
        },
        type: "KING",
        team: "OPPONENT"
    },
    {
        image: 'images/queen_b.png',
        position:{ 
            x: 3,
            y: 7,
        },
        type: "QUEEN",
        team: "OPPONENT"
    },
    //BLACK PAWNS
    {
        image: 'images/pawn_b.png',
        position:{ 
            x: 0,
            y: 6,
        },
        type: "PAWN",
        team: "OPPONENT"
    },
    {
        image: 'images/pawn_b.png',
        position:{ 
            x: 1,
            y: 6,
        },
        type: "PAWN",
        team: "OPPONENT"
    },
    {
        image: 'images/pawn_b.png',
        position:{ 
            x: 2,
            y: 6,
        },
        type: "PAWN",
        team: "OPPONENT"
    },
    {
        image: 'images/pawn_b.png',
        position:{ 
            x: 3,
            y: 6,
        },
        type: "PAWN",
        team: "OPPONENT"
    },
    {
        image: 'images/pawn_b.png',
        position:{ 
            x: 4,
            y: 6,
        },
        type: "PAWN",
        team: "OPPONENT"
    },
    {
        image: 'images/pawn_b.png',
        position:{ 
            x: 5,
            y: 6,
        },
        type: "PAWN",
        team: "OPPONENT"
    },
    {
        image: 'images/pawn_b.png',
        position:{ 
            x: 6,
            y: 6,
        },
        type: "PAWN",
        team: "OPPONENT"
    },
    {
        image: 'images/pawn_b.png',
        position:{ 
            x: 7,
            y: 6,
        },
        type: "PAWN",
        team: "OPPONENT"
    },
    //WHITE PIECES
    {
        image: 'images/rook_w.png',
        position:{ 
            x: 7,
            y: 0,
        },
        type: "ROOK",
        team: "OUR"
    },
    {
        image: 'images/rook_w.png',
        position:{ 
            x: 0,
            y: 0,
        },
        type: "ROOK",
        team: "OUR"
    },
    {
        image: 'images/knight_w.png',
        position:{ 
            x: 1,
            y: 0,
        },
        type: "KNIGHT",
        team: "OUR"
    },
    {
        image: 'images/knight_w.png',
        position:{ 
            x: 6,
            y: 0,
        },
        type: "KNIGHT",
        team: "OUR"
    },
    {
        image: 'images/bishop_w.png',
        position:{ 
            x: 5,
            y: 0,
        },
        type: "BISHOP",
        team: "OUR"
    },
    {
        image: 'images/bishop_w.png',
        position:{ 
            x: 2,
            y: 0,
        },
        type: "BISHOP",
        team: "OUR"
    },
    {
        image: 'images/king_w.png',
        position:{ 
            x: 4,
            y: 0,
        },
        type: "KING",
        team: "OUR"
    },
    {
        image: 'images/queen_w.png',
        position:{ 
            x: 3,
            y: 0,
        },
        type: "QUEEN",
        team: "OUR"
    },
    //WHITE PAWNS
    {
        image: 'images/pawn_w.png',
        position:{ 
            x: 0,
            y: 1,
        },
        type: "PAWN",
        team: "OUR"
    },
    {
        image: 'images/pawn_w.png',
        position:{ 
            x: 1,
            y: 1,
        },
        type: "PAWN",
        team: "OUR"
    },
    {
        image: 'images/pawn_w.png',
        position:{ 
            x: 2,
            y: 1,
        },
        type: "PAWN",
        team: "OUR"
    },
    {
        image: 'images/pawn_w.png',
        position:{ 
            x: 3,
            y: 1,
        },
        type: "PAWN",
        team: "OUR"
    },
    {
        image: 'images/pawn_w.png',
        position:{ 
            x: 4,
            y: 1,
        },
        type: "PAWN",
        team: "OUR"
    },
    {
        image: 'images/pawn_w.png',
        position:{ 
            x: 5,
            y: 1,
        },
        type: "PAWN",
        team: "OUR"
    },
    {
        image: 'images/pawn_w.png',
        position:{ 
            x: 6,
            y: 1,
        },
        type: "PAWN",
        team: "OUR"
    },
    {
        image: 'images/pawn_w.png',
        position:{ 
            x: 7,
            y: 1,
        },
        type: "PAWN",
        team: "OUR"
    },
];