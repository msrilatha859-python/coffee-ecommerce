import Hersection from "../components/hero-section.jsx"
import Products from "../components/products.jsx"
import WhyChooseUs from "../components/why-choose-us.jsx"
import About from "../components/about.jsx"
function Home({products, addToCart}) {
    return (
        <>            
            <Hersection/>
            <About/>
            <Products products={products} addToCart={addToCart}/>
            <WhyChooseUs/>
            
        </>
    )
}
export default Home