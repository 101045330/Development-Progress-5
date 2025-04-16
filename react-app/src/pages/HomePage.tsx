import React from 'react';
import Layout from '../components/Layout/Layout';
import Article from '../components/Article/Article';
import Slider from '../components/Slider/Slider';
import Testimonial from '../components/Testimonial/Testimonial';
import Form1 from '../components/Forms/Form1/Form1';

const HomePage: React.FC = () => {


  const handleBookDemo = () => {
    const formSection = document.getElementById("formSection");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleOrder = () => {
    alert("Redirecting to the order form...");
    // You can replace this with: window.location.href = "/order";
  };
  
  const handleCollaborate = () => {
    alert("Let's collaborate! Please fill out the form below.");
    const formSection = document.getElementById("formSection");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };
  


  return (
    <Layout>
      <section id="article_section">
        <Article
          title="Hi, Let me help you with a smile!"
          content="Let’s transform work with Necessity driven design..."
          imageSrc="/png/generativeart.png"
          linkText="Let's Collaborate"
          linkHref="/display.html?id=2"
        />
      </section>
      <section id="slider_section">
        <Slider />
      </section>

      <section id="formSection" className="aa">
        <Form1 />
        <article className="block aa information">
          <br />
          <div>
            <h2>Let's grow together</h2>
            <p>
              Please select a topic below related to your inquiry.
              <br />
              If you don't find what you need, fill out the form:
            </p>
          </div>
          <div>
            
            <h3><button onClick={handleBookDemo}>Book a demo</button></h3>
            <p>Live in-person demo to clear confusion</p>
          </div>
          <div>
            <h3><button onClick={handleOrder} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>Order here</button></h3>
            <p>Order available services if you liked the demo</p>
          </div>
          <div>
            <h3><button onClick={handleCollaborate} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>Let's Collaborate</button></h3>
            <p>Please share requirements for collaboration</p>
          </div>
        </article>
      </section>

      <section id="about">
        <Article
          title="Automate Digital Business, TODAY!"
          content="Transform your marketing strategy with cutting-edge automation service..."
          imageSrc="/png/footer.png"
          linkText="Continue Reading"
          linkHref="/display.html?id=2"
        />
      </section>
      <section className="fRow fCenter logo-track">
        {/* Logo track content */}
      </section>
      <section>
        <Testimonial />
      </section>
    </Layout>
  );
};

export default HomePage;
