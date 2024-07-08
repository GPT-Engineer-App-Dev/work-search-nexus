import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";

const applicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  resume: z.instanceof(File).refine(file => file.size > 0, "Resume is required"),
  coverLetter: z.string().min(1, "Cover letter is required"),
});

const JobListings = () => {
  const [salaryRange, setSalaryRange] = useState([0, 100]);
  const [selectedJob, setSelectedJob] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <aside className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Job Type</label>
              <Input placeholder="e.g., Full-time, Part-time" />
            </div>
            <div>
              <label className="block mb-2">Location</label>
              <Input placeholder="e.g., New York, San Francisco" />
            </div>
            <div>
              <label className="block mb-2">Salary Range</label>
              <Slider
                value={salaryRange}
                onValueChange={setSalaryRange}
                max={200}
                step={10}
              />
              <div className="flex justify-between text-sm">
                <span>${salaryRange[0]}k</span>
                <span>${salaryRange[1]}k</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Job Listings */}
        <main className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
          <div className="grid grid-cols-1 gap-6">
            {[1, 2, 3, 4, 5].map((job) => (
              <Card key={job}>
                <CardHeader>
                  <CardTitle>Software Engineer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Company: Tech Corp</p>
                  <p>Location: San Francisco, CA</p>
                  <p>Salary: $120k - $150k</p>
                  <p className="mt-2">Brief description of the job listing...</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="primary" onClick={() => setSelectedJob(job)}>Apply Now</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Apply for Software Engineer</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                          <label className="block mb-2">Name</label>
                          <Input {...register("name")} placeholder="Your name" />
                          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block mb-2">Email</label>
                          <Input {...register("email")} placeholder="Your email" />
                          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div>
                          <label className="block mb-2">Resume</label>
                          <Input type="file" {...register("resume")} />
                          {errors.resume && <p className="text-red-500">{errors.resume.message}</p>}
                        </div>
                        <div>
                          <label className="block mb-2">Cover Letter</label>
                          <Textarea {...register("coverLetter")} placeholder="Your cover letter" />
                          {errors.coverLetter && <p className="text-red-500">{errors.coverLetter.message}</p>}
                        </div>
                        <Button type="submit" variant="primary">Submit Application</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobListings;