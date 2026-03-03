import Hersection from "../components/hero-section.jsx"
import Products from "../components/products.jsx"
import WhyChooseUs from "../components/why-choose-us.jsx"
import About from "../components/about.jsx"
import Testimonials from "../components/testimonials.jsx"
import Newsletter from "../components/newsletter.jsx"
import Footer from "../components/footer.jsx"
function Home({products, addToCart}) {
    return (
        <>            
            <Hersection/>
            <About/>
            <Products products={products} addToCart={addToCart}/>
            <WhyChooseUs/>
            <Testimonials/>
            <Newsletter/>
            
        </>
    )
}
export default Home