import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const jobPostingSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company name is required"),
  location: z.string().min(1, "Location is required"),
  salaryRange: z.tuple([z.number().min(0), z.number().min(0)]),
  description: z.string().min(1, "Job description is required"),
});

const JobPosting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(jobPostingSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const salaryRange = watch("salaryRange", [0, 100]);

  return (
    <div className="container mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle>Post a Job</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-2">Job Title</label>
              <Input {...register("title")} placeholder="Job title" />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>
            <div>
              <label className="block mb-2">Company Name</label>
              <Input {...register("company")} placeholder="Company name" />
              {errors.company && <p className="text-red-500">{errors.company.message}</p>}
            </div>
            <div>
              <label className="block mb-2">Location</label>
              <Input {...register("location")} placeholder="Location" />
              {errors.location && <p className="text-red-500">{errors.location.message}</p>}
            </div>
            <div>
              <label className="block mb-2">Salary Range</label>
              <Slider
                value={salaryRange}
                onValueChange={(value) => setValue("salaryRange", value)}
                max={200}
                step={10}
              />
              <div className="flex justify-between text-sm">
                <span>${salaryRange[0]}k</span>
                <span>${salaryRange[1]}k</span>
              </div>
              {errors.salaryRange && <p className="text-red-500">{errors.salaryRange.message}</p>}
            </div>
            <div>
              <label className="block mb-2">Job Description</label>
              <Textarea {...register("description")} placeholder="Job description" />
              {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>
            <Button type="submit" variant="primary">Post Job</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobPosting;