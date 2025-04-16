import React from 'react';
import Layout from '../components/Layout/Layout';
import Article from '../components/Article/Article';
import Form1 from '../components/Forms/Form1/Form1';

const ServicesPage: React.FC = () => {

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
      <section>
        <Article
          title="Let’s transform work with Necessity driven design..."
          content="Welcome to my personal website where every visitor smiles with a gaze at an interesting offer to collaborate and discover how profitable necessity driven design, automation and marketing is going to be..."
          imageSrc="/png/no-image.png"
          linkText="Continue Reading"
          linkHref="/display.html?id=2"
        />
      </section>

      <section>
        <Article
          title="Marketing Automation"
          content="Transform your marketing strategy with cutting-edge automation service at affordable rates! Harness the power of Google, Facebook and Bing Analytics to gain valuable insights and inform the content generated by ChatGPT..."
          imageSrc="/png/generativeart.png"
          linkText="Continue Reading"
          linkHref="/display.html?id=1"
        />
      </section>

      <section>
        <Article
          title="Web Automation"
          content="Transform your web development workflow with our advanced web automation services! By leveraging full-stack JavaScript libraries like React, Node.js, and MongoDB, combined with AI tools such as ChatGPT, MidJourney, and Google Gemini, we create dynamic, data-driven, and visually stunning web applications..."
          imageSrc="/png/uiuxdesign.png"
          linkText="Continue Reading"
          linkHref="/display.html?id=2"
        />
      </section>

      <section>
        <Article
          title="Office Automation"
          content="Revolutionize your office automation and minimize operational costs with our cutting-edge solution! By integrating ChatGPT, Google Gemini, and Office 365, we automate monotonous tasks in Word and Excel, transforming your workflow..."
          imageSrc="/png/ref-rig.png"
          linkText="Continue Reading"
          linkHref="/display.html?id=3"
        />
      </section>

      <section>
        <Article
          title="Design Automation"
          content="Let’s transform work with Necessity driven design and optimization. Welcome to my personal website where every visitor smiles with a gaze at an interesting offer to collaborate and discover how profitable necessity driven design, automation and marketing is going to be..."
          imageSrc="/png/no-image.png"
          linkText="Continue Reading"
          linkHref="/display.html?id=5"
        />
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
    </Layout>
  );
};

export default ServicesPage;
