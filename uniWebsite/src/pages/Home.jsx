//pages/Home.jsx
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Welcome to Evergreen University</h1>
          <p>Empowering Minds, Enriching Futures</p>
          <div className="hero-buttons">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/courses" className="btn btn-secondary">Explore Programs</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Excellence in Education</h3>
              <p>Ranked among the top universities nationwide with world-class faculty and innovative teaching approaches.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Research Opportunities</h3>
              <p>Engage in groundbreaking research with access to state-of-the-art facilities and collaborative projects.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Perspective</h3>
              <p>Join a diverse community of students from over 80 countries and gain international experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Career Advancement</h3>
              <p>97% of our graduates secure employment or continue to higher education within six months of graduation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <h2>University Highlights</h2>
          <div className="highlight-content">
            <div className="highlight-text">
              <h3>A Legacy of Excellence</h3>
              <p>For over five decades, Evergreen University has cultivated minds, fostered innovation, and championed progress. Our community of scholars, researchers, and students work together to address the world's most pressing challenges.</p>
              <p>With a wide range of undergraduate, graduate, and doctoral programs across various disciplines, we provide a collaborative and supportive environment where students can thrive academically and personally.</p>
              <Link to="/about" className="text-link">Learn more about our history</Link>
            </div>
            <div className="highlight-image">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="University Campus Architecture" 
                className="university-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Students Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <p>"My experience at Evergreen University transformed my perspective and prepared me for the challenges of the real world. The professors are dedicated mentors who truly care about student success."</p>
              <div className="testimonial-author">
                <span className="author-name">Sarah Johnson</span>
                <span className="author-program">Business Administration, Class of 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Begin Your Journey With Us</h2>
          <p>Take the first step toward a transformative educational experience at Evergreen University.</p>
          <Link to="/admissions" className="btn btn-primary">Apply Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;