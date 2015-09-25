var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];
function setSquare(player, row, col) {
    checkerboard[row][col]=player;
}

function getPieceAt(row, col) {
    return checkerboard[row][col];
}

function clearBoard() {
    checkerboard.map(function (row){
        for (var i=0;i<row.length;i++) {
            row[i]=null;
        }
        return row;
    });
}

function setUpRed() {
    for (var i=0;i<3;i++) {
        for (var j=0;j<checkerboard[i].length;j++) {
            if ((i+j)%2===0) {
                setSquare("R",i,j);
            }
        }
    }
}

function setUpBlack() {
    for (var i=checkerboard.length-3;i<checkerboard.length;i++) {
        for (var j=0;j<checkerboard[i].length;j++) {
            if ((i+j)%2===0) {
                setSquare("B",i,j);
            }
        }
    }
}

var pieces = {'red':[],'black':[]};
function getPieces() {
    for (var i=0;i<checkerboard.length;i++) {
        for (var j=0;j<checkerboard[i].length;j++) {
            if (getPieceAt(i,j)==='R') {
                pieces.red.push([i,j]);
            } else if (getPieceAt(i,j)==='B') {
                pieces.black.push([i,j]);
            }
        }
    }
}