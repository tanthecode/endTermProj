//pages/About.jsx
import React from 'react';
import '../styles/About.css';
import Map from '../components/Map';


const About = () => {
  const faculty = [
    {
      name: "Dr. Sarah Chen",
      position: "Dean of Computer Science",
      bio: "With over 15 years in tech education, Dr. Chen leads our CS department. She's passionate about making tech education accessible to everyone.",
      image: "faculty-1"
    },
    {
      name: "Prof. James Wilson",
      position: "Head of Business Studies",
      bio: "A former startup founder turned educator, Prof. Wilson brings real-world experience to the classroom and mentors student entrepreneurs.",
      image: "faculty-2"
    },
    {
      name: "Dr. Maria Rodriguez",
      position: "Director of Research",
      bio: "Dr. Rodriguez oversees our research initiatives. Her work in sustainable technology has earned international recognition.",
      image: "faculty-3"
    }
  ];

  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Evergreen University</h1>
          <p>A tradition of excellence in education since 1967</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>Founded in 1967, Evergreen University began as a small liberal arts college with a mission to provide accessible quality education to all. Over five decades later, we've evolved into a comprehensive research institution while staying true to our foundational values.</p>
              <p>Today, our campus spans over 200 acres of lush greenery, housing state-of-the-art facilities, research centers, and a vibrant community of scholars from around the globe. We're proud of our legacy and even more excited about our future.</p>
            </div>
            <div className="about-image">
              <div className="image-placeholder"></div>
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission-box">
            <h2>Our Mission</h2>
            <p>Evergreen University is dedicated to advancing knowledge, fostering innovation, and nurturing compassionate global citizens who contribute meaningfully to society. Through exceptional teaching, research, and service, we strive to address the complex challenges of our interconnected world.</p>
          </div>
          <div className="vision-box">
            <h2>Our Vision</h2>
            <p>To be a leading institution that transforms lives through inclusive education, groundbreaking research, and meaningful community engagement—creating a more just, sustainable, and enlightened world for future generations.</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2>Evergreen at a Glance</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Faculty Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">120+</div>
              <div className="stat-label">Degree Programs</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">80+</div>
              <div className="stat-label">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership">
        <div className="container">
          <h2>Meet Our Faculty</h2>
          <div className="faculty-grid">
            {faculty.map((member, index) => (
              <div key={index} className={`faculty-card ${member.image}`}>
                <div className="faculty-content">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="location">
        <div className="container">
          <h2>Our Location</h2>
          <div className="location-content">
            <div className="location-text">
              <p>Evergreen University is located in the heart of Bangalore's tech hub, providing students with access to India's Silicon Valley and numerous industry opportunities.</p>
              <p>14, 3rd Cross, Parappana Agrahar<br />
              Electronic City Road<br />
              Electronics City Phase 1<br />
              Electronic City, Bengaluru - 560100<br />
              Karnataka, India</p>
              <div className="contact-info">
                <p><strong>Phone:</strong> +91 80 4710 4545</p>
                <p><strong>Email:</strong> admissions@evergreen.edu</p>
              </div>
            </div>
            <div className="location-map">
              <Map />
            </div>
          </div>
        </div>
      </section>

      <section className="campus-gallery">
        <div className="container">
          <div className="gallery-grid">
            <div className="gallery-image"></div>
            <div className="gallery-image"></div>
            <div className="gallery-image"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;