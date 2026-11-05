import ProductCard from "./component/ProductCard";

const App = () => {
    return (
        <>
            <div>
                <h1>Product Details</h1>

                <ProductCard
                    name="Laptop"
                    price="5000"
                    category="Electronics"
                    availability="Available"
                />

                <ProductCard
                    name="Mobile"
                    price="2000"
                    category="Electronics"
                    availability="Available"
                />

                <ProductCard
                    name="Headphone"
                    price="500"
                    category="Accessories"
                    availability="Not Available"
                />
            </div>
        </>
    )
}

export default App