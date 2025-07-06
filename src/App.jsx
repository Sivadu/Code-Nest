import React from 'react';
import './App.css';




function App() {
  return (   
  
    <div className="app-body">

      {/* logo part  */}
     <header className="top-header">
        <div className="logo-container">
          <img src="/logo.png" alt="CodeNest Logo" className="logo" />
        </div>
      </header>


      {/* Hero Section */}
      <div className="hero-wrapper  d-flex align-items-center justify-content-center text-center">
        <div className="content-container text-white mt-5">
          <h1 className="display">Web Development Bootcamp for Kids</h1>
          <h2 className="lead">
            Build your first website in just 12 days!
          </h2>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdszGKjRA0qZ4mGI_nORtrK65XehZXNJyixig5yEtgNKxUL2A/viewform" className="btn btn-primary mt-3">
            Register Now
          </a>
        </div>
      </div>

     {/* About Section */}
<section id="about" className="about-section">
  <h2 className="about-heading fs-1">📢 CodeNest Web Development Bootcamp – Schedule + Special Offer!</h2>
  <div className="about-card fs-3">
    <p>💻 <strong>Learn to Build and Host Your Own Website</strong> — from Scratch!</p>
    <p>👦 For Class 5 to 10 students – <strong>No prior coding needed!</strong></p>
    
    <h4 className="mt-4">🗓 New Class Schedule:</h4>
    <p>📅 <strong>Fridays, Saturdays & Sundays</strong></p>
    <p>⏰ <strong>1.5-hour online sessions</strong> (via Google Meet)</p>

    <h4 className="mt-4">🎓 What They Will Learn:</h4>
    <p>✅ HTML, CSS, JavaScript & Bootstrap</p>
    <p>✅ Build a complete website project</p>
    <p>✅ Host it live on GitHub — share it with family & friends!</p>

    <p className="note">🥳 <em>Fun. Creative. Interactive. Beginner-friendly!</em></p>
  </div>

</section>


      {/* Schedule & Fee Section */}
{/* Schedule & Fee Section */}
<section className="schedule-section text-white text-center py-5">
  <h2 className="section-title mb-4">📘 Schedule & Fee Details</h2>

  <p className="lead mb-3">We offer a 12-day course with 1.5 hours of class each day.</p>
  <p className="mb-5">⏰ Classes are conducted every <strong>Friday, Saturday, and Sunday</strong>.</p>

  <div className="d-flex justify-content-center flex-wrap gap-4">
     {/* With Laptop Card */}
  <div className="schedule-box p-4 rounded">
    <h4 className="mb-2">💻 Students with Laptop</h4>
    <p className="fs-4 fw-bold">
      <span className="strike-red">₹800</span> <span className="text-success">₹599</span>
    </p>
  </div>

  {/* Without Laptop Card */}
  <div className="schedule-box p-4 rounded">
    <h4 className="mb-2">📱 Students without Laptop</h4>
    <p className="fs-4 fw-bold">
      <span className="strike-red">₹600</span> <span className="text-success">₹499</span>
    </p>
  </div>
  </div>
</section>



      <section id="learn" className="learn-section">
  <h2 className="learn-heading">📘 What You’ll Learn</h2>
  <div className="learn-grid">

    <div className="learn-card">
      <div className="emoji">🌐</div>
      <h3>HTML Basics – Structure & Tags</h3>
      <p>Learn how to build the backbone of every webpage using tags, headings, lists, and more.</p>
    </div>

    <div className="learn-card">
      <div className="emoji">🎨</div>
      <h3>CSS Styling – Colors, Fonts & Layout</h3>
      <p>Make your website beautiful using colors, fonts, backgrounds, borders, and page layouts.</p>
    </div>

    <div className="learn-card">
      <div className="emoji">📱</div>
      <h3>Bootstrap – Make it Responsive</h3>
      <p>Use Bootstrap to make your websites look great on phones, tablets, and computers.</p>
    </div>

    <div className="learn-card">
      <div className="emoji">⚙️</div>
      <h3>JavaScript – Logic & Interaction</h3>
      <p>Add real interaction like buttons, image sliders, and input responses with JavaScript.</p>
    </div>

    <div className="learn-card">
      <div className="emoji">💻</div>
      <h3>What is GitHub? – Live Examples</h3>
      <p>Learn how to save, share, and manage code online using GitHub with real-time examples.</p>
    </div>

    <div className="learn-card">
      <div className="emoji">🚀</div>
      <h3>Final Project – Host Your Website In GitHub</h3>
      <p>Create and publish your own mini website from scratch using everything you've learned!</p>
    </div>

  </div>
</section>

 <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">
          📞 <span className="blue">Have Questions? Let’s Talk!</span>
        </h2>
        <p className="contact-subheading">
          Whether you're a parent or student, feel free to reach out. We’d love to help!
        </p>

        <a
          href="https://wa.me/918089432421"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success fw-bold shadow mb-4"
          style={{ padding: '14px 36px', fontSize: '1.2rem', borderRadius: '8px' }}
        >
          💬 Chat with us on <strong>WhatsApp</strong>
        </a>

        <p className="email-line">
          📧 Email us:{' '}
          <a             href="https://mail.google.com/mail/?view=cm&fs=1&to=meenakshy2421@gmail.com"
             className="email-link"
             target='_blank'
             rel='nooperner noreferres'>
            meenakshy2421@gmail.com
          </a>
        </p>
      </div>
    </section>
    </div>
  );
}


   
  


export default App;
