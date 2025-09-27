import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    // <footer className="bg-primary text-primary-foreground">
    <footer className="bg-[#1C3458] text-primary-foreground">

      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6" id='footer-logo'>
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                {/* <span className="text-accent-foreground font-bold text-xl">V</span> */}
                 <img
                src="/Images/IMG_4396.jpg"
                alt="VisoMatix Logo"
                // className="w-10 h-10 object-contain"
                className="w-10 h-10"
              />
              </div>
              <span className="text-2xl font-bold">Visiomatix Media</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 mt-2">
              Innovating with Technology for a Smarter Future. We blend human-centric thinking with technology to create media strategies that connect with your audience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/visiomatix-media/about/-For" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/digital-marketing" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/smm" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/services/website-development" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Website Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-8 w-8 mt-0.5 text-primary-foreground" />
                <span className="text-primary-foreground/80">
                  Office No. 03,Om Sai Apartment, Davkhar nagar,<br/>
                  Chandawd , Nashik – 423101, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground" />
                <span className="text-primary-foreground/80">+91 8999 101916</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground" />
                <span className="text-primary-foreground/80">info@visiomatixmedia.net</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Visiomatix Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer