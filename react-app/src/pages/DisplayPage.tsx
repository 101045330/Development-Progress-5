import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Import necessary components and styles
import Layout from '../components/Layout/Layout';
import Article from '../components/Article/Article';
import Form1 from '../components/Forms/Form1/Form1';


const DisplayPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    // Fetch data based on the `id` parameter
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <section id="article_section">
        <Article
          title={data.title}
          content={data.description}
          imageSrc="/png/no-image.png"
          linkText="Continue Reading"
          linkHref={`/display.html?id=${id}`}
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
            <h3><a href="#">Book a demo</a></h3>
            <p>Live in-person demo to clear confusion</p>
          </div>
          <div>
            <h3><a href="#">Order here</a></h3>
            <p>Order available services if you liked the demo</p>
          </div>
          <div>
            <h3><a href="#">Let's Collaborate</a></h3>
            <p>Please share requirements for collaboration</p>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default DisplayPage;
