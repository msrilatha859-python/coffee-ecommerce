function About(){
    return(
        <section className="about">
  <div className="about-container">
    <div className="about-image">
      <img src="/coffee-about.jpg" alt="Coffee beans" />
    </div>

    <div className="about-text">
      <h2>Crafted With Passion, Brewed to Perfection</h2>
      <p>
        At Brew Haven, coffee is more than just a drink — it’s a ritual,
        a comfort, and a daily inspiration. We source premium beans and
        roast them in small batches to ensure unmatched freshness and flavor.
      </p>

      <div className="about-highlights">
        <span>🌱 Premium Quality</span>
        <span>🔥 Freshly Roasted</span>
        <span>🚚 Fast Delivery</span>
      </div>

      <button>Discover Our Collection</button>
    </div>
  </div>
</section>
    )
}
export default About;