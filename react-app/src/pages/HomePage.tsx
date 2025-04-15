import React from 'react';
import Layout from '../components/Layout/Layout';
import Article from '../components/Article/Article';
import Slider from '../components/Slider/Slider';
import Testimonial from '../components/Testimonial/Testimonial';
import Form1 from '../components/Forms/Form1/Form1';

const HomePage: React.FC = () => {
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
