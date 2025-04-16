// src/components/SliderSection.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css'; // Import your CSS file

const Slider: React.FC = () => {
  return (
    <section id="slider_section">
      <div className="container">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} className="previous controls">
                &lang;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label} className="next controls">
                &rang;
              </button>
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <li
              className={`dot ${isSelected ? 'active' : ''}`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            >
            </li>
          )}
        >
          <div>
            <img src="https://unsplash.it/750/350?image=839" alt="UI Automation" className="carousel-image" />
            <div className="carousel-caption">
              <h3>UI Automation</h3>
              <p>This is a description for UI Automation.</p>
            </div>
          </div>
          <div>
            <img src="https://unsplash.it/750/350?image=838" alt="UX Research" title="UX Research" className="carousel-image" />
            <div className="carousel-caption">
              <h3>UX Research</h3>
              <p>This is a description for UX Research.</p>
            </div>
          </div>
          <div>
            <img src="https://unsplash.it/750/350?image=837" alt="Web Scripting"  title="Web Scripting" className="carousel-image" />
            <div className="carousel-caption">
              <h3>Web Scripting</h3>
              <p>This is a description for Web Scripting.</p>
            </div>
          </div>
          <div>
            <img src="https://unsplash.it/750/350?image=836" alt="Interface Design"  title="Interface Design"  className="carousel-image" />
            <div className="carousel-caption">
              <h3>Interface Design</h3>
              <p>This is a description for Interface Design.</p>
            </div>
          </div>
          <div>
            <img src="https://unsplash.it/750/350?image=832" alt="Prototyping"  title="Prototyping"  className="carousel-image" />
            <div className="carousel-caption">
              <h3>Prototyping</h3>
              <p>This is a description for Prototyping.</p>
            </div>
          </div>
          <div>
            <img src="https://unsplash.it/750/350?image=823" alt="Devops"  title="Devops"  className="carousel-image" />
            <div className="carousel-caption">
              <h3>Devops</h3>
              <p>This is a description for Devops.</p>
            </div>
          </div>
          <div>
            <img src="https://unsplash.it/750/350?image=822" alt="AI Marketing"  title="AI Marketing"  className="carousel-image" />
            <div className="carousel-caption">
              <h3>AI Marketing</h3>
              <p>This is a description for AI Marketing.</p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
