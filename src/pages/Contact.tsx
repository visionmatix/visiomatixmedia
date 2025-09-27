import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "",
    phoneNo: "",
    serviceInterested: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ for button disable



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare FormData
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("countryCode", form.countryCode);
      formData.append("phoneNo", form.phoneNo);
      formData.append("serviceInterested", form.serviceInterested);
      formData.append("message", form.message);

      const response = await axios.post(
        "http://localhost:8084/api/contact/send",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // important
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Sent Application Successfully!",
      });

      setForm({
        name: "",
        email: "",
        countryCode: "",
        phoneNo: "",
        serviceInterested: "",
        message: "",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error saving contact!",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      {/* <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-width text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up">
            Ready to transform your digital presence? Let's start the conversation.
          </p>
        </div>
      </section> */}

      <section
        className="section-padding text-primary-foreground bg-cover bg-center relative h-[70vh]"
        style={{
          backgroundImage: "linear-gradient(rgba(29,52,88,0.6), rgba(29,52,88,0.6)), url('/Images/conatctusBanner.png')",
        }}
      >
        <div className="container-width text-center relative z-10 flex flex-col justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up">
            Ready to transform your digital presence? Let's start the conversation.
          </p>
        </div>
      </section>


      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Office No. 03,<br></br>
                      Om Sai Apartment, Davkhar nagar,<br></br>
                      Chandawd , Nashik<br></br>
                      – 423101, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 8999 101916</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@visiomatixmedia.net</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose VisoMatix?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Expert team with 5+ years experience</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">100% client satisfaction guarantee</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">24/7 support and maintenance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Competitive pricing and transparent billing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-hover animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Country Code */}
                  <div className="space-y-2">
                    <Label htmlFor="countryCode">Country Code *</Label>
                    <Select
                      value={form.countryCode}
                      onValueChange={(value) =>
                        setForm((prev) => ({ ...prev, countryCode: value }))
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="-- Select Country Code --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">+91 India</SelectItem>
                        <SelectItem value="+1">+1 USA</SelectItem>
                        <SelectItem value="+44">+44 UK</SelectItem>
                        <SelectItem value="+61">+61 Australia</SelectItem>
                        {/* Add more as needed */}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phoneNo">Phone No *</Label>
                    <Input
                      id="phoneNo"
                      placeholder="Enter your phone number"
                      value={form.phoneNo}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Services Interested */}
                  <div className="space-y-2">
                    <Label htmlFor="serviceInterested">Services Interested *</Label>
                    <Select
                      value={form.serviceInterested}
                      onValueChange={(value) =>
                        setForm((prev) => ({ ...prev, serviceInterested: value }))
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="-- Select a Service --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                        <SelectItem value="SMM">Social Media Marketing</SelectItem>
                        <SelectItem value="Content Marketing">Content Marketing</SelectItem>
                        <SelectItem value="PPC">PPC</SelectItem>
                        <SelectItem value="SEO">SEO</SelectItem>
                        <SelectItem value="Web Development">Website Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full flex justify-center items-center"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">Visit our office for a face-to-face consultation</p>
          </div>

          <Card className="card-hover overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">📍 View on Google Maps</h3>
                <p className="text-muted-foreground">
                  Office No. 03,Om Sai Apartment, Davkhar nagar,
                  Chandawd , Nashik – 423101, Maharashtra, India
                </p>

                <a
                  href="https://www.google.com/maps/search/Office+No.+03,Om+Sai+Apartment,+Davkhar+nagar,+Chandawd+,+Nashik+%E2%80%93+423101,+Maharashtra,+India/@20.3291312,74.2336096,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="mt-4">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </Card>


        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. We're here to help you succeed.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Schedule a Call
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Portfolio
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default ContactForm