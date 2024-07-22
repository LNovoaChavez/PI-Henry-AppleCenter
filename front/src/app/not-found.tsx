import Link from "next/link"

const notFound = () =>{
    return (
        <div>

            <div>
                <h3>Ups1 This page doesn´t exist</h3>
                <span>But we´ve more products for you...</span>
            </div>
            <Link href={"/"}>Home</Link>
        </div>
    )
}

export default notFound