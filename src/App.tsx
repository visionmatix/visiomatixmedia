import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SMM from "./pages/services/SMM";
import ContentMarketing from "./pages/services/ContentMarketing";
import PaidMedia from "./pages/services/PaidMedia";
import SEO from "./pages/services/SEO";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/smm" element={<SMM />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/paid-media" element={<PaidMedia />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
