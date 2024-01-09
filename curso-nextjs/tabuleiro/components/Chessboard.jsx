import Line from "./Line"

export default function Chessboard(){
    return (
        <div>
            <Line />
            <Line black/>
            <Line />
            <Line black/>
            <Line />
            <Line black/>
            <Line />
            <Line black/>
        </div>
    )
}