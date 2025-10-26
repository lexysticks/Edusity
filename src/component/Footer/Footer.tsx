import './Footer.css'

function Footer(){
    return(
        <div>
            <footer className="footer">
      <div className="footerContainer">
        
        {/* About */}
        <div className="footerCol">
          <h3>About Us</h3>
          <p>
            We provide modern web solutions, user-friendly dashboards, 
            and responsive designs. Reach out to us for your next project.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footerCol">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footerCol">
          <h3>Contact</h3>
          <p><i className="fa-solid fa-phone"></i> +1 123-456-7890</p>
          <p><i className="fa-solid fa-envelope"></i> info@example.com</p>
          <p><i className="fa-solid fa-location-dot"></i> Cambridge, MA 02139</p>
        </div>

        {/* Social Media */}
        <div className="footerCol">
          <h3>Follow Us</h3>
          <div className="socialIcons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>

        </div>
    )
}

export default Footer