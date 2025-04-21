//pages/Courses.jsx
import '../styles/Courses.css';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/admissions');
  };

  const courses = [
    {
      title: "Computer Science",
      description: "Hey future coders! If you're into tech and love solving problems, this is the place to be. We've got awesome labs, cool projects, and professors who actually know their stuff. Plus, our CS club hosts hackathons that are super fun!",
      duration: "4 years",
      credits: "120",
      image: "cs-bg"
    },
    {
      title: "Business Administration",
      description: "Want to be your own boss someday? Our business program is pretty rad. You'll get to work with real companies, learn from people who've been there, and maybe even start your own thing.",
      duration: "4 years",
      credits: "120",
      image: "business-bg"
    },
    {
      title: "Biotechnology",
      description: "Science nerds, this one's for you! Our biotech labs are seriously cool, and you get to do real research from your first year. Whether you're into genetics or making new medicines, you'll find your people here.",
      duration: "4 years",
      credits: "120",
      image: "biotech-bg"
    },
    {
      title: "Mechanical Engineering",
      description: "Love building stuff? Same! Our mech eng program lets you get your hands dirty in the workshop from day one. The projects are challenging but super rewarding, and the professors are really supportive.",
      duration: "4 years",
      credits: "120",
      image: "mechanical-bg"
    },
    {
      title: "Psychology",
      description: "If you're always wondering why people do what they do, you'll love it here. The psych department is super friendly, and you get to do your own research projects. Plus, the counseling center internships are a great way to get real experience.",
      duration: "4 years",
      credits: "120",
      image: "psychology-bg"
    },
    {
      title: "Environmental Science",
      description: "Want to help save the planet? Join us! We do tons of field trips, work on real conservation projects, and the professors are super passionate about what they do. It's not just lectures - you actually get to make a difference!",
      duration: "4 years",
      credits: "120",
      image: "environment-bg"
    },
    {
      title: "Digital Media Arts",
      description: "Creative types, this is your spot! You'll get to work with all the latest software, create your own portfolio, and show off your work at our end-of-year exhibition. The studio spaces are amazing, and there's always someone to bounce ideas off.",
      duration: "4 years",
      credits: "120",
      image: "media-bg"
    },
    {
      title: "Data Science",
      description: "Into numbers and patterns? You'll fit right in! We work with real data from local companies, and the projects are actually interesting (not just boring stats). The job prospects are pretty good too!",
      duration: "4 years",
      credits: "120",
      image: "data-bg"
    }
  ];

  return (
    <div className="courses-page">
      <h1>Check Out Our Programs!</h1>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className={`course-item ${course.image}`}>
            <div className="course-content">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="course-details">
                <span className="duration">Duration: {course.duration}</span>
                <span className="credits">Credits: {course.credits}</span>
              </div>
              <button className="btn btn-secondary" onClick={handleApplyClick}>Let's Go!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
