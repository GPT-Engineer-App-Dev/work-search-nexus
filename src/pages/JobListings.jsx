import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const JobListings = () => {
  const [salaryRange, setSalaryRange] = useState([0, 100]);

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