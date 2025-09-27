import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import {
  Lightbulb,
  Users,
  TrendingUp,
  Palette
} from "lucide-react"

const Careers = () => {
  const navigate = useNavigate();

  const whyJoinReasons = [
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Innovative Culture",
      description: "Work on cutting-edge projects that redefine industries and create real-world impact."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Collaborative Team",
      description: "Be part of a diverse team that thrives on creativity, teamwork, and shared success."
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Learning & Growth",
      description: "Upskill with training, mentorship, and career advancement opportunities."
    }
  ]

  const jobOpenings = 
    [
  {
    id: "graphic-designer",
    icon: <Palette className="h-8 w-8" />,
    title: "Graphic Designer",
    Company: "Visiomatix Media",
    location: "Remote",
    experience: "Minimum 1 year",
    type: "Full-time",
    employment: "Full-time",
    about: "Visiomatix Media is a fast-growing and innovative digital agency specializing in design, strategy, and marketing. We are dedicated to building impactful digital solutions and cultivating a positive, growth-oriented workplace culture.",
    joboverview: "We are seeking a proactive and people-oriented HR Executive with 1+ year of experience to join our team. The HR Executive will play a vital role in recruitment, employee engagement, performance management, and ensuring smooth HR operations.",
    description: "Create compelling visuals for digital and print media.",
    responsibilities: [
      "Design creative visual assets for digital and print marketing campaigns",
      "Develop brand guidelines and maintain visual consistency across all platforms",
      "Create engaging social media graphics, web banners, and promotional materials",
      "Collaborate with marketing team to bring creative concepts to life",
      "Stay updated with design trends and industry best practices",
      "Work on packaging design and product photography direction"
    ],
    skills: ["Adobe Creative Suite", "Photoshop", "Illustrator", "InDesign", "Figma", "Brand Design"],
    Preferred: ["Adobe Creative Suite", "Photoshop", "Illustrator", "InDesign", "Figma", "Brand Design"],
    qualification: [
      "Bachelor's degree in Graphic Design, Visual Communication, or related field",
      "Minimum 1+ years of professional graphic design experience",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Strong portfolio showcasing creative design work",
      "Understanding of design principles, typography, and color theory",
      "Excellent attention to detail and ability to meet deadlines"
    ],
    whatWeOffer: [
      "Competitive salary package with performance bonuses",
      "Health insurance and medical benefits",
      "Flexible working hours and remote work options",
      "Professional development and training opportunities",
      "Creative freedom and opportunity to work on diverse projects",
      "Collaborative and supportive work environment"
    ],
    whyjoin: [
      "Opportunity to work in a creative, fast-paced environment.",
      "Exposure to diverse roles and responsibilities.",
      "A collaborative workplace that values innovation, teamwork, and growth."
    ],
    howapply: [
      "Interested candidates can share their portfolio and resume at visiomatixmedia@gmail.com",
      "with the subject line 'Human Resources (HR) Executive– Visiomatix Media'."
    ]
  },
  {
    id: "marketing-executive",
    icon: <Palette className="h-8 w-8" />,
    title: "Marketing Executive",
    Company: "Visiomatix Media",
    location: "Remote",
    experience: "Minimum 1 year",
    type: "Full-time",
    employment: "Full-time",
    about: "Visiomatix Media is a dynamic and innovative digital agency specializing in design, strategy, and creative storytelling. We help brands grow through impactful marketing campaigns, engaging content, and cutting-edge digital solutions.",
    joboverview: "We are seeking an energetic and results-driven Marketing Executive with 1+ year of experience to join our team. The Marketing Executive will be responsible for planning and executing marketing strategies, managing campaigns, and supporting the overall growth of our clients and agency.",
    description: "Plan and execute marketing campaigns and support overall growth of clients and agency.",
    responsibilities: [
      "Plan and execute marketing campaigns across digital and offline platforms.",
      "Assist in developing strategies to increase brand awareness and market presence.",
      "Coordinate with the design and content teams to create impactful promotional materials.",
      "Manage social media platforms, email campaigns, and online advertising efforts.",
      "Conduct market research to identify trends, opportunities, and competitor activities.",
      "Build and maintain strong relationships with clients and stakeholders.",
      "Track, analyze, and report on the effectiveness of marketing campaigns."
    ],
    skills: ["Adobe Creative Suite", "Photoshop", "Illustrator", "InDesign", "Figma", "Brand Design"],
    Preferred: [
      "Experience with Google Ads, Facebook Ads, and other paid advertising platforms.",
      "Knowledge of CRM tools and email marketing software.",
      "Basic understanding of graphic design and content creation."
    ],
    qualification: [
      "Bachelor’s degree in Marketing, Business Administration, or a related field.",
      "At least 1 year of proven experience in marketing, preferably in a digital or creative agency.",
      "Strong knowledge of digital marketing tools, SEO, and social media strategies.",
      "Excellent communication, interpersonal, and organizational skills.",
      "Ability to work both independently and collaboratively in a fast-paced environment.",
      "Creative mindset with strong problem-solving abilities.",
      "Proficiency in MS Office and marketing software/tools."
    ],
    whatWeOffer: [
      "Competitive salary package with performance bonuses",
      "Health insurance and medical benefits",
      "Flexible working hours and remote work options",
      "Professional development and training opportunities",
      "Creative freedom and opportunity to work on diverse projects",
      "Collaborative and supportive work environment"
    ],
    whyjoin: [
      "Be part of a young, creative, and ambitious team.",
      "Opportunity to work on diverse projects with reputed brands.",
      "Supportive environment that encourages learning and growth."
    ],
    howapply: [
      "Interested candidates can share their portfolio and resume at visiomatixmedia@gmail.com",
      "with the subject line “Application for Marketing Executive – Visiomatix Media”."
    ]
  },
  

]


  const handleApplyNow = (job: typeof jobOpenings[0]) => {
    // Pass all job data including the new fields
    const jobData = {
      id: job.id,
      title: job.title,
      Company: job.Company,
      location: job.location,
      experience: job.experience,
      type: job.type,
      employment: job.employment,
      about: job.about,
      joboverview: job.joboverview,
      description: job.description,
      responsibilities: job.responsibilities,
      skills: job.skills,
      Preferred: job.Preferred,
      qualification: job.qualification,
      whatWeOffer: job.whatWeOffer,
      whyjoin: job.whyjoin,
      howapply: job.howapply
    };
    navigate(`/apply/${job.id}`, { state: { jobDetails: jobData } });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="section-padding text-primary-foreground bg-cover bg-center relative h-[75vh]"
        style={{
          backgroundImage: "linear-gradient(rgba(29,56,88,0.6), rgba(29,56,88,0.6)), url('/Images/careers.jpg')",
        }}
      >
        <div className="container-width text-center relative z-10 flex flex-col justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up">
            Build your career with Visiomatix and shape the future of digital innovation
          </p>
        </div>
      </section>

      {/* Why Join Visiomatix */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Join Visiomatix?</h2>
            <p className="text-xl text-muted-foreground">Discover what makes us different</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyJoinReasons.map((reason, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-6 flex justify-center">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground">Find your perfect role and start your journey with us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="card-hover cursor-pointer"
                onClick={() => handleApplyNow(job)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-primary">
                      {job.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{job.title}</h3>
                  <p className="text-muted-foreground mb-6">{job.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApplyNow(job);
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Have questions about our open positions or want to learn more about working at Visiomatix?
                We'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-primary mb-2">Manager</h4>
                  <p className="text-muted-foreground">Pooja Patil</p>
                </div>
              </div>
            </div>
            {/* <div className="text-center">
              <div className="aspect-square bg-gradient-primary rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <Users className="h-20 w-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Join Us</h3>
                  <p className="opacity-80">Your Future Starts Here</p>
                </div>
              </div>
            </div> */}


<div className="text-center">
  <div
    className="
      w-[90%] max-w-[40rem]   /* full width on mobile, max 40rem on large screens */
      h-[20rem] md:h-[30rem]   /* smaller height on mobile, bigger on desktop */
      rounded-2xl p-4 flex items-center justify-center
      bg-contain bg-no-repeat bg-center mx-auto
    "
    style={{ backgroundImage: "url('/Images/Get-in-touch.png')" }}
  >
    <div className="text-center text-primary-foreground">
    
    </div>
  </div>
</div>







          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers