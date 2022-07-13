import React, { useState } from 'react'
import "./TicTacToe.css"
const TicTacToe = () => {

    const [change, setChange] = useState("X");
    const [cell, setCell] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();


    const win = (square) => {

        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            updown: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diag: [
                [0, 4, 8],
                [2, 4, 6]
            ],
        };

        for (let winn in combos)
            combos[winn].forEach((element) => {

                if (
                    square[element[0]] === '' ||
                    square[element[1]] === '' ||
                    square[element[2]] === ''

                ) {
                    //nothing
                } else if
                    (square[element[0]] === square[element[1]] &&
                    square[element[1]] === square[element[2]]) {
                    setWinner(square[element[0]]);
                }

            });
    }

    const Box = ({ num }) => {
        return <td onClick={() => handleClick(num)}>{cell[num]}</td>
    }

    const handleClick = ((num) => {


        let square = [...cell];
        if (cell[num] !== "") {
            alert("Already clicked!!")
            return;
        }
        // alert(num);
        if (change === "X") {
            square[num] = 'X';
            setChange("O")
        } else {
            square[num] = 'O';
            setChange("X")
        }

        win(square);
        setCell(square)


    })
    const handleStart = () => {
        setWinner(null);
        setCell(Array(9).fill(''));
    }

    return (
        <>
            <h2>TicTacToe</h2>

            <div className='container'>

                <table>
                    <tbody>
                        <tr>
                            <Box num={0} />
                            <Box num={1} />
                            <Box num={2} />

                        </tr>
                        <tr>
                            <Box num={3} />
                            <Box num={4} />
                            <Box num={5} />
                        </tr>
                        <tr>
                            <Box num={6} />
                            <Box num={7} />
                            <Box num={8} />
                        </tr>
                    </tbody>
                </table>
                {winner && (
                    <>
                        <h4>{winner} is the Winner!!</h4>
                        <button onClick={() => handleStart()}>Start again</button>
                    </>
                )

                }

            </div>
        </>
    )
}

export default TicTacToe