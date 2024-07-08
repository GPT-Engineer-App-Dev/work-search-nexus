import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Search, UserCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Dream Job</h1>
          <p className="text-xl mb-8">Search for jobs by title and location</p>
          <div className="flex justify-center space-x-4">
            <Input placeholder="Job title" className="w-1/3" />
            <Input placeholder="Location" className="w-1/3" />
            <Button variant="primary" className="px-6">Search</Button>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((job) => (
            <Card key={job}>
              <CardHeader>
                <CardTitle>Software Engineer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Company: Tech Corp</p>
                <p>Location: San Francisco, CA</p>
                <p className="mt-2">Brief description of the job listing...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <p className="font-semibold">Search</p>
              <p>Find the job that suits you best</p>
            </div>
            <div className="text-center">
              <Briefcase className="h-12 w-12 mx-auto mb-4" />
              <p className="font-semibold">Apply</p>
              <p>Submit your application</p>
            </div>
            <div className="text-center">
              <UserCheck className="h-12 w-12 mx-auto mb-4" />
              <p className="font-semibold">Get Hired</p>
              <p>Start your new career</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial}>
              <CardContent>
                <p>"I found my dream job thanks to JobFinder!"</p>
                <p className="mt-2 font-semibold">- Happy User</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;