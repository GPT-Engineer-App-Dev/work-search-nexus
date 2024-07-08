import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Briefcase } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import JobListings from "./pages/JobListings.jsx"; // Import JobListings page
import JobPosting from "./pages/JobPosting.jsx"; // Import JobPosting page

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Job Listings",
    to: "/jobs",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Post a Job",
    to: "/post-job",
    icon: <Briefcase className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="jobs" element={<JobListings />} />
              <Route path="post-job" element={<JobPosting />} /> {/* Add JobPosting route */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;