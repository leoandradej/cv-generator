
import './reset.css'

function App() {
  

  return (
    <>
      <aside>
        <div className="form-container">
          <h2>Personal Information</h2>
          <form className='form form-personal'>
            <div className="form-input-field">
              <label htmlFor="name">Full Name</label>
              <input type="text" id='name'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="about">About Me</label>
              <textarea id="about"></textarea>
            </div>
            <div className="form-input-field">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id='phone'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id='email'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="linkedin">LinkedIn</label>
              <input type="url" id='linkedin'/>
            </div>
            <div className="buttons">
              <button className="btn save">Save</button>
              <button className="btn cancel">Cancel</button>
              <button className="btn delete">Delete</button>
            </div>
          </form>
        </div>
        <div className="form-container">
          <h2>Education Experience</h2>
          <form className='form form-education'>
            <div className="form-input-field">
              <label htmlFor="school">School</label>
              <input type="text" id='school'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="degree">Degree</label>
              <input type="text" id='degree'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="start-date">Start Date</label>
              <input type="date" id='start-date'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="end-date">End Date</label>
              <input type="date" id='end-date'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="location">Location</label>
              <input type="text" id='location'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="skills">Skills</label>
              <textarea id='skills'/>
            </div>
            <div className="form-input-field achievement">
              <label htmlFor="achievement">Achievement</label>
              <input type="text" id='achievement'/>
              <label htmlFor="achievement-location">Location</label>
              <input type="text" id='achievement-location'/>
              <label htmlFor="achievement-date">Date</label>
              <input type="date" id='achievement-date'/>
            </div>
            <div className="buttons">
              <button className="btn save">Save</button>
              <button className="btn cancel">Cancel</button>
              <button className="btn delete">Delete</button>
            </div>
          </form>
        </div>
        <div className="form-container">
          <h2>Work Experience</h2>
          <form className='form form-work'>
            <div className="form-input-field">
              <label htmlFor="company">Company Name</label>
              <input type="text" id='company'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="position">Position Title</label>
              <input type="text" id='position'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="job-description">Job Description</label>
              <textarea id='job-description'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="start-date">Start Date</label>
              <input type="date" id='start-date'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="end-date">End Date</label>
              <input type="date" id='end-date'/>
            </div>
            <div className="form-input-field">
              <label htmlFor="location">Location</label>
              <input type="text" id='location'/>
            </div>
            <div className="buttons">
              <button className="btn save">Save</button>
              <button className="btn cancel">Cancel</button>
              <button className="btn delete">Delete</button>
            </div>
          </form>
        </div>
      </aside>
      <main>
        <div className="cv-display">
          <section className="cv-header">
            <h1>FULL NAME</h1>
            <p>Position Title</p>
          </section>
          <section className="cv-about">
            <div className="about-text">
              <h2>ABOUT ME</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti consectetur sint quibusdam officiis pariatur blanditiis veritatis aspernatur laboriosam.</p>
            </div>
            <div className="contact-icons">
                <div className="contact-icon">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <p>123-456-7890</p>
                </div>
                <div className="contact-icon">
                  <i className="fa-regular fa-envelope"></i>
                  <p>person@gmail.com</p>
                </div>
                <div className="contact-icon">
                <i className="fa-brands fa-linkedin"></i>
                  <p>linkedin.com/person</p>
                </div>
              </div>
          </section>
          <section className='cv-education'>
            <h2 className='section-title'>EDUCATION</h2>
            <div className="wrapper">
              <div className="section-item">
                <h3>Master Degree in XX</h3>
                <p>Jun 2010 - March 2012</p>
                <ul>
                  <li>School</li>
                  <li>Location</li>
                </ul>
              </div>
              <div className="section-item">
                <h2>SKILLS</h2>
                <ul>
                  <li>Time Management</li>
                  <li>Communication</li>
                  <li>Critical Thinking</li>
                  <li>Analytics</li>
                  <li>Seo</li>
                  <li>Project Management</li>
                </ul>
              </div>
              <div className="section-item">
                <h2>ACHIEVEMENTS</h2>
                <div className="achievement-item">
                  <h3>Your Achievement</h3>
                  <div>
                    <p>Location</p>
                    <p>Date</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="cv-work">
            <h2 className='section-title'>WORK EXPERIENCE</h2>
            <div className="section-item company-item">
              <div className="company-heading">
                <div className="">
                  <h3>COMPANY</h3>
                  <p>Indicate your role/position in the company</p>
                </div>
                <div className="">
                  <p>Location</p>
                  <p>Date</p>
                </div>
              </div>
              <p className="company-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere qui consectetur soluta voluptatem, iste tempora corrupti praesentium eveniet suscipit dolor quis id magni, ullam error.
              </p>
              <ul className="company-skills">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
