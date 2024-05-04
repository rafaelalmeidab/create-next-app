import productList from "@/data/productList";

export default function Repetition2(){

    const border = {
        border : "1px solid #FFF"
    }

    function renderList(){
        return productList.map(product => {
            return (
                <tr key={product.id}>
                    <td style={border}>{product.id}</td>
                    <td style={border}>{product.name}</td>
                    <td style={border}>{product.price}</td>
                </tr>
            )
        })
    }

    return(
        <div>
            <table style={border}>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    );
}