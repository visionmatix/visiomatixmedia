import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Swal from "sweetalert2"

import {
    MapPin, DollarSign, Clock, Upload, CheckCircle, Briefcase, Send, Users, ArrowLeft,
    Palette, PenTool, Video, FileText, BarChart3, Zap, Smartphone, Code, UserCheck, Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea"


interface JobDetails {
    id: string;
    title: string;
      Company: string;
        about: string;
  joboverview: string;
    Preferred: string[];
      qualification: string[];
  whatWeOffer: string[];
 whyjoin: string[];
  howapply: string[];


    description: string;
    emoji: string;
    location: string;
    salary: string;
    experience: string;
    type: string;
    skills: string[];
    responsibilities: string[];
}

const JobApplication = () => {
    const { jobId } = useParams();
    const location = useLocation();
      const [isSubmitting, setIsSubmitting] = useState(false);

    // const [formData, setFormData] = useState({
    //     firstName: "",
    //     lastName: "",
    //     jobApplyingFor: "",
    //     contactNo: "",
    //     resume: null as File | null,
    // });


    const [formData, setFormData] = useState({
        name: "",
        contactNo: "",
        email: "",
        experience: "",
        currentCTC: "",
        expectedCTC: "",
        countryCode:"",
        countryName:"",
        location: "",
        notes: "",
        resume: null as File | null,
    })

    const { toast } = useToast();

    // Get job details from navigation state or set default
    const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);

    // Function to get icon based on job ID
    const getJobIcon = (jobId: string) => {
        const iconMap: Record<string, React.ReactNode> = {
            "graphic-designer": <Palette className="h-8 w-8" />,
            "ui-ux-designer": <PenTool className="h-8 w-8" />,
            "video-editor": <Video className="h-8 w-8" />,
            "content-strategist": <FileText className="h-8 w-8" />,
            "marketing-executive": <BarChart3 className="h-8 w-8" />,
            "performance-marketer": <Zap className="h-8 w-8" />,
            "social-media-marketer": <Smartphone className="h-8 w-8" />,
            "php-developer": <Code className="h-8 w-8" />,
            "hr": <UserCheck className="h-8 w-8" />,
            "freelancer": <Globe className="h-8 w-8" />
        };
        return iconMap[jobId] || <Briefcase className="h-8 w-8" />;
    };

    useEffect(() => {
        if (location.state?.jobDetails) {
            const job = location.state.jobDetails as JobDetails;
            setJobDetails(job);
            setFormData(prev => ({ ...prev, jobApplyingFor: job.title }));
        } else {
            // Fallback job details if accessed directly
            // setJobDetails({
            //     id: jobId || "general",
            //     title: "General Position",
            //     description: "Join our team and contribute to innovative projects.",
            //     emoji: "💼",
            //     location: "Nashik, Maharashtra, India",
            //     salary: "Competitive",
            //     experience: "As per role",
            //     type: "Full-time",
            //     skills: ["Communication", "Teamwork", "Problem Solving"],
            //     responsibilities: [
            //         "Contribute to team projects and company objectives",
            //         "Maintain high standards of work quality",
            //         "Collaborate effectively with team members",
            //         "Stay updated with industry trends and best practices"
            //     ]
            // });
            // setFormData(prev => ({ ...prev, jobApplyingFor: "General Position" }));
        }
    }, [jobId, location.state]);

    const availableJobs = [
        "Graphic Designer",
        "UI/UX Designer",
        "Video Editor",
        "Content Strategist",
        "Marketing Executive",
        "Performance Marketer",
        "Social Media Marketer",
        "PHP Developer",
        "HR",
        "Freelancer",
    ];

    const handleInputChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value })
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData({ ...formData, resume: e.target.files[0] })
        }
    }


    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true) // start loader

  const formPayload = new FormData()
  formPayload.append("name", formData.name)
  formPayload.append("contactNumber", formData.contactNo)
  formPayload.append("email", formData.email)
  formPayload.append("experience", formData.experience)
  formPayload.append("currentCTC", formData.currentCTC)
  formPayload.append("expectedCTC", formData.expectedCTC)
  formPayload.append("location", formData.location)
  formPayload.append("countryName", formData.countryName || "")
  formPayload.append("countryCode", formData.countryCode || "")
  formPayload.append("notes", formData.notes || "")
  if (formData.resume) {
    formPayload.append("resume", formData.resume)
  }

  try {
    const response = await fetch("http://localhost:8084/api/applications/apply", {
      method: "POST",
      body: formPayload,
    })

    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Application submitted successfully!",
      })

      setFormData({
        name: "",
        contactNo: "",
        email: "",
        experience: "",
        currentCTC: "",
        expectedCTC: "",
        location: "",
        countryName: "",
        countryCode: "",
        notes: "",
        resume: null,
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Failed to submit. Please try again.",
      })
    }
  } catch (error) {
    console.error(error)
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error submitting form",
    })
  } finally {
    setIsSubmitting(false) // stop loader
  }
}

 
    if (!jobDetails) {
        return <div>Loading...</div>;
    }

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
                    <Link to="/careers" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 self-start">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Careers
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Apply Now</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up">
                        Ready to take your career to the next level? Join our team for the {jobDetails.title} position.
                    </p>
                </div>
            </section>

            {/* Job Application Content */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Job Details Section */}
                        <div className="animate-slide-up">
                            <h2 className="text-4xl font-bold mb-8">Job Details</h2>
{/* 
                            <Card className="card-hover mb-8">
                                <CardHeader>
                                    <CardTitle className="text-3xl font-bold text-primary flex items-center gap-3">
                                        <div className="text-primary">{getJobIcon(jobDetails.id)}</div>
                                        {jobDetails.title}
                                        <span className="text-2xl ml-2">{jobDetails.emoji}</span>
                                    </CardTitle>
                                    <CardDescription className="text-lg">
                                        {jobDetails.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                                <MapPin className="h-6 w-6 text-primary-foreground" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Location</h3>
                                                <span className="text-muted-foreground">{jobDetails.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                                <DollarSign className="h-6 w-6 text-accent-foreground" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Salary</h3>
                                                <span className="text-muted-foreground">{jobDetails.salary}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Clock className="h-6 w-6 text-primary-foreground" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Experience</h3>
                                                <span className="text-muted-foreground">{jobDetails.experience}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Users className="h-6 w-6 text-accent-foreground" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Type</h3>
                                                <Badge variant="secondary">{jobDetails.type}</Badge>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Required Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {jobDetails.skills.map((skill, index) => (
                                                <Badge key={index} variant="outline" className="bg-secondary/50 border-primary/20">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <Separator />

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Roles & Responsibilities</h3>
                                        <ul className="space-y-3">
                                            {jobDetails.responsibilities.map((responsibility, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-muted-foreground">{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card> */}

                            <Card className="card-hover mb-8">
  <CardHeader>
    <CardTitle className="text-3xl font-bold text-primary flex items-center gap-3">
      <div className="text-primary">{getJobIcon(jobDetails.id)}</div>
      {jobDetails.title}
      <span className="text-2xl ml-2">{jobDetails.emoji}</span>
    </CardTitle>
    <CardDescription className="text-lg">
      {jobDetails.description}
    </CardDescription>
  </CardHeader>

  <CardContent className="space-y-6">
    {/* Company Info */}
    <div>
      <h3 className="text-xl font-semibold">Company</h3>
      <p className="text-muted-foreground">{jobDetails.Company}</p>
    </div>

    {/* About Company */}
    <div>
      <h3 className="text-xl font-semibold">About</h3>
      <p className="text-muted-foreground">{jobDetails.about}</p>
    </div>

    {/* Job Overview */}
    <div>
      <h3 className="text-xl font-semibold">Job Overview</h3>
      <p className="text-muted-foreground">{jobDetails.joboverview}</p>
    </div>

    {/* Job Details Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
          <MapPin className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-semibold">Location</h3>
          <span className="text-muted-foreground">{jobDetails.location}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
          <DollarSign className="h-6 w-6 text-accent-foreground" />
        </div>
        <div>
          <h3 className="font-semibold">Salary</h3>
          <span className="text-muted-foreground">{jobDetails.salary || "Not Specified"}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
          <Clock className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-semibold">Experience</h3>
          <span className="text-muted-foreground">{jobDetails.experience}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
          <Users className="h-6 w-6 text-accent-foreground" />
        </div>
        <div>
          <h3 className="font-semibold">Type</h3>
          <Badge variant="secondary">{jobDetails.type}</Badge>
        </div>
      </div>
    </div>

    <Separator />

    {/* Skills */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Required Skills</h3>
      <div className="flex flex-wrap gap-2">
        {jobDetails.skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="bg-secondary/50 border-primary/20">
            {skill}
          </Badge>
        ))}
      </div>
    </div>

    <Separator />

    {/* Qualifications */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Qualifications</h3>
      <ul className="space-y-3">
        {jobDetails.qualification.map((qual, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-muted-foreground">{qual}</span>
          </li>
        ))}
      </ul>
    </div>

    <Separator />

    {/* Responsibilities */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Roles & Responsibilities</h3>
      <ul className="space-y-3">
        {jobDetails.responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-muted-foreground">{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>

    <Separator />

    {/* What We Offer */}
    <div>
      <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
      <ul className="space-y-3">
        {jobDetails.whatWeOffer.map((offer, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-muted-foreground">{offer}</span>
          </li>
        ))}
      </ul>
    </div>

    <Separator />

    {/* Why Join */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Why Join Us</h3>
      <ul className="space-y-3">
        {jobDetails.whyjoin.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-muted-foreground">{point}</span>
          </li>
        ))}
      </ul>
    </div>

    <Separator />

    {/* How to Apply */}
    <div>
      <h3 className="text-xl font-semibold mb-4">How to Apply</h3>
      <ul className="space-y-3">
        {jobDetails.howapply.map((apply, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-muted-foreground">{apply}</span>
          </li>
        ))}
      </ul>
    </div>
  </CardContent>
</Card>


                            {/* Why Join Us */}
                            <Card className="card-hover">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Why Join Visiomatix?</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                                            <span className="text-muted-foreground">Competitive salary and benefits package</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                                            <span className="text-muted-foreground">Flexible working hours and remote options</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                                            <span className="text-muted-foreground">Professional growth and learning opportunities</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                                            <span className="text-muted-foreground">Work with cutting-edge technologies</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Application Form Section */}
                        <Card className="card-hover animate-scale-in">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6">Apply Now</h3>
                                {/* <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name *</Label>
                                            <Input
                                                id="firstName"
                                                value={formData.firstName}
                                                onChange={(e) => handleInputChange("firstName", e.target.value)}
                                                placeholder="Enter your first name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name *</Label>
                                            <Input
                                                id="lastName"
                                                value={formData.lastName}
                                                onChange={(e) => handleInputChange("lastName", e.target.value)}
                                                placeholder="Enter your last name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="jobApplyingFor">Job Applying For *</Label>
                                        <Select value={formData.jobApplyingFor} onValueChange={(value) => handleInputChange("jobApplyingFor", value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="-- Select a Position --" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {availableJobs.map((job) => (
                                                    <SelectItem key={job} value={job}>
                                                        {job}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="experience">Years of Experience *</Label>
                                        <select
                                            id="experience"
                                            // value={formData.experience}
                                            onChange={(e) => handleInputChange("experience", e.target.value)}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                                        >
                                            <option value="">Select years</option>
                                            <option value="0-1">0-1 years</option>
                                            <option value="1-3">1-3 years</option>
                                            <option value="3-5">3-5 years</option>
                                            <option value="5-10">5-10 years</option>
                                            <option value="10+">10+ years</option>
                                        </select>
                                    </div>


                                    <div className="space-y-2">
                                        <Label htmlFor="contactNo">Contact Number *</Label>
                                        <Input
                                            id="contactNo"
                                            type="tel"
                                            value={formData.contactNo}
                                            onChange={(e) => handleInputChange("contactNo", e.target.value)}
                                            placeholder="+91 98765 43210"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="resume">Resume Upload</Label>
                                        <div className="flex items-center justify-center w-full">
                                            <label
                                                htmlFor="resume"
                                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-border border-dashed rounded-lg cursor-pointer bg-secondary/30 hover:bg-secondary/50 transition-colors"
                                            >
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                                                    <p className="mb-2 text-sm text-muted-foreground">
                                                        <span className="font-semibold">Click to upload</span> your resume
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (MAX. 10MB)</p>
                                                </div>
                                                <input
                                                    id="resume"
                                                    type="file"
                                                    className="hidden"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileUpload}
                                                />
                                            </label>
                                        </div>
                                        {formData.resume && (
                                            <p className="text-sm text-accent font-medium flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4" />
                                                {formData.resume.name} uploaded
                                            </p>
                                        )}
                                    </div>

                                    <Button variant="default" size="lg" className="w-full">
                                        <Send className="mr-2 h-5 w-5" />
                                        Submit Application
                                    </Button>
                                </form> */}

                     <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Country Code + Contact Number */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="countryCode">Country Code *</Label>
          <select
            id="countryCode"
            value={formData.countryCode}
            onChange={(e) => handleInputChange("countryCode", e.target.value)}
            className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-primary"
            required
          >
            <option value="">Select</option>
            <option value="+91">🇮🇳 +91 (India)</option>
            <option value="+1">🇺🇸 +1 (USA)</option>
            <option value="+44">🇬🇧 +44 (UK)</option>
            <option value="+61">🇦🇺 +61 (Australia)</option>
            <option value="+971">🇦🇪 +971 (UAE)</option>
          </select>
        </div>
        <div className="col-span-2 space-y-2">
          <Label htmlFor="contactNo">Contact Number *</Label>
          <Input
            id="contactNo"
            type="tel"
            value={formData.contactNo}
            onChange={(e) => handleInputChange("contactNo", e.target.value)}
            placeholder="9876543210"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Experience */}
      <div className="space-y-2">
        <Label htmlFor="experience">Experience *</Label>
        <Input
          id="experience"
          value={formData.experience}
          onChange={(e) => handleInputChange("experience", e.target.value)}
          placeholder="e.g. 3 years"
          required
        />
      </div>

      {/* Current & Expected CTC */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="currentCTC">Current CTC</Label>
          <Input
            id="currentCTC"
            value={formData.currentCTC}
            onChange={(e) => handleInputChange("currentCTC", e.target.value)}
            placeholder="Enter current CTC"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="expectedCTC">Expected CTC</Label>
          <Input
            id="expectedCTC"
            value={formData.expectedCTC}
            onChange={(e) => handleInputChange("expectedCTC", e.target.value)}
            placeholder="Enter expected CTC"
          />
        </div>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          value={formData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
          placeholder="Enter your location"
        />
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => handleInputChange("notes", e.target.value)}
          placeholder="Any additional information"
        />
      </div>

      {/* Resume Upload */}
      <div className="space-y-2">
        <Label htmlFor="resume">Resume Upload *</Label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="resume"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-border border-dashed rounded-lg cursor-pointer bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
              <p className="mb-2 text-sm text-muted-foreground">
                <span className="font-semibold">Click to upload</span> your resume
              </p>
              <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (MAX. 10MB)</p>
            </div>
            <input
              id="resume"
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              required
            />
          </label>
        </div>
        {formData.resume && (
          <p className="text-sm text-accent font-medium flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            {formData.resume.name} uploaded
          </p>
        )}
      </div>

      {/* Submit Button with Loader */}
      <Button
        type="submit"
        variant="default"
        size="lg"
        className="w-full flex justify-center items-center"
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
          <>
            <Send className="mr-2 h-5 w-5" />
            Submit Application
          </>
        )}
      </Button>
    </form>



                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-subtle">
                <div className="container-width text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                        Join our team and be part of something amazing. We're excited to hear from you!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/careers">
                            <Button variant="outline" size="lg">
                                View All Jobs
                            </Button>
                        </Link>
                        <Button size="lg">
                            Contact HR
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobApplication;