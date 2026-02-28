import Hersection from "../components/hero-section.jsx"
import Products from "../components/products.jsx"
import WhyChooseUs from "../components/why-choose-us.jsx"
function Home({products, addToCart}) {
    return (
        <>            
            <Hersection/>
            <Products products={products} addToCart={addToCart}/>
            <WhyChooseUs/>
            
        </>
    )
}
export default Home