import React, { useState } from 'react';

const Form1: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    message: '',
    details: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    const isCheckbox = (el: EventTarget): el is HTMLInputElement =>
      (el as HTMLInputElement).type === 'checkbox';

    setFormData((prevData) => ({
      ...prevData,
      [name]: isCheckbox(e.target) ? (e.target as HTMLInputElement).checked : value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form className="block bb hello_form" onSubmit={handleSubmit}>
      <fieldset>
        <legend></legend>
        <div className="fRow bb form_group">
          <label htmlFor="first_name">
            <span>FIRST NAME</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <g opacity="0.32">
                <path d="M18.75 24.9966C23.9277 24.9966 28.125 20.7993 28.125 15.6216C28.125 10.4439 23.9277 6.24658 18.75 6.24658C13.5723 6.24658 9.375 10.4439 9.375 15.6216C9.375 20.7993 13.5723 24.9966 18.75 24.9966Z" fill="#B08E8E" />
                <path d="M3.125 43.7466C3.125 43.7466 0 43.7466 0 40.6216C0 37.4966 3.125 28.1216 18.75 28.1216C34.375 28.1216 37.5 37.4966 37.5 40.6216C37.5 43.7466 34.375 43.7466 34.375 43.7466H3.125Z" fill="#B08E8E" />
                <path d="M34.375 10.9341C34.375 10.0711 35.0746 9.37158 35.9375 9.37158H48.4375C49.3004 9.37158 50 10.0711 50 10.9341C50 11.797 49.3004 12.4966 48.4375 12.4966H35.9375C35.0746 12.4966 34.375 11.797 34.375 10.9341Z" fill="#B08E8E" />
                <path d="M35.9375 18.7466C35.0746 18.7466 34.375 19.4461 34.375 20.3091C34.375 21.172 35.0746 21.8716 35.9375 21.8716H48.4375C49.3004 21.8716 50 21.172 50 20.3091C50 19.4461 49.3004 18.7466 48.4375 18.7466H35.9375Z" fill="#B08E8E" />
                <path d="M42.1875 28.1216C41.3246 28.1216 40.625 28.8211 40.625 29.6841C40.625 30.547 41.3246 31.2466 42.1875 31.2466H48.4375C49.3004 31.2466 50 30.547 50 29.6841C50 28.8211 49.3004 28.1216 48.4375 28.1216H42.1875Z" fill="#B08E8E" />
                <path d="M42.1875 37.4966C41.3246 37.4966 40.625 38.1961 40.625 39.0591C40.625 39.922 41.3246 40.6216 42.1875 40.6216H48.4375C49.3004 40.6216 50 39.922 50 39.0591C50 38.1961 49.3004 37.4966 48.4375 37.4966H42.1875Z" fill="#B08E8E" />
              </g>
            </svg>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="last_name">
            <span>LAST NAME</span>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="fRow aa form_group">
          <label htmlFor="message">
            <span>TOPIC</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <g opacity="0.2">
                <path d="M42.1822 2.47969L42.6452 2.01672C44.1183 0.543581 46.5068 0.543581 47.9799 2.01672C49.453 3.48986 49.453 5.87829 47.9799 7.35143L47.5169 7.8144C49.1611 9.65502 49.0996 12.4817 47.3327 14.2486L15.1674 46.4139C14.9671 46.6142 14.7162 46.7562 14.4415 46.8249C14.0243 46.9154 13.5287 46.9656 13.147 46.9656C12.8475 46.9656 12.6004 46.9154 12.3866 46.8249L13.2637 43.8982L25 28.1844L46.847 13.1744V12.49661L12.3637 23.9629C13.2114 24.2331 13.7242 24.288 32.1877 24.1103L43.0214 19.9587L40.0323 31.1689C39.9043 31.6486 40.0129 32.1527 40.3237 32.5228L47.8425 41.4756L36.4356 41.7365C35.91 41.7485 35.4184 42.032 35.1355 42.4862L29.1338 52.1215L24.8848 41.1005C24.717 40.6652 24.355 40.3394 23.9044 40.2183Z" fill="#444444" />
              </g>
            </svg>
            <input
              type="text"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="fRow bb form_group">
          <label htmlFor="details">
            <span>DETAILS</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <g opacity="0.4">
                <path d="M6.25 3.12158C4.52411 3.12158 3.125 4.52069 3.125 6.24658L3.125 31.2466C3.125 32.9725 4.52411 34.3716 6.25 34.3716H36.2056C37.8632 34.3716 39.4529 35.0301 40.625 36.2022L46.875 42.4522V6.24658C46.875 4.52069 45.4759 3.12158 43.75 3.12158L6.25 3.12158ZM43.75 -0.00341797C47.2018 -0.00341797 50 2.7948 50 6.24658V46.2244C50 47.6164 48.317 48.3135 47.3326 47.3292L38.4153 38.4119C37.8292 37.8258 37.0344 37.4966 36.2056 37.4966H6.25C2.79822 37.4966 0 34.6984 0 31.2466L0 6.24658C0 2.7948 2.79822 -0.00341797 6.25 -0.00341797L43.75 -0.00341797Z" fill="#B08E8E" />
                <path d="M15.625 18.7466C15.625 20.4725 14.2259 21.8716 12.5 21.8716C10.7741 21.8716 9.375 20.4725 9.375 18.7466C9.375 17.0207 10.7741 15.6216 12.5 15.6216C14.2259 15.6216 15.625 17.0207 15.625 18.7466Z" fill="#B08E8E" />
                <path d="M28.125 18.7466C28.125 20.4725 26.7259 21.8716 25 21.8716C23.2741 21.8716 21.875 20.4725 21.875 18.7466C21.875 17.0207 23.2741 15.6216 25 15.6216C26.7259 15.6216 28.125 17.0207 28.125 18.7466Z" fill="#B08E8E" />
                <path d="M40.625 18.7466C40.625 20.4725 39.2259 21.8716 37.5 21.8716C35.7741 21.8716 34.375 20.4725 34.375 18.7466C34.375 17.0207 35.7741 15.6216 37.5 15.6216C39.2259 15.6216 40.625 17.0207 40.625 18.7466Z" fill="#B08E8E" />
              </g>
            </svg>

            <textarea
              rows={3}
              cols={25}
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
            />


          </label>
        </div>

        <div className="fRow aa form_group">
          <input
            type="checkbox"
            className="forCheckbox"
            name="agree"
            id="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label htmlFor="agree" className="checkboxLabel">
            I agree to the terms
          </label>
        </div>

        <div className="fRow bb form_group">
          <button className="btn_submit" type="submit">
            Send
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form1;
