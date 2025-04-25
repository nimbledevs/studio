'use client';

import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const handleSubscribeClick = () => {
    alert("Subscription functionality will be implemented soon!");
  };

  return (
    <div className="flex h-screen bg-secondary">
      <DashboardSidebar />
      <div className="flex-1 p-4">
        <div className="container py-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Example Subscription Card */}
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>Basic Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Next Payment: July 20, 2024</p>
                <p>Amount: $9.99</p>
                <Button onClick={handleSubscribeClick}>Subscribe Now</Button>
              </CardContent>
            </Card>

            {/* Example Subscription Card */}
            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Pro Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Next Payment: July 25, 2024</p>
                <p>Amount: $29.99</p>
                <Button onClick={handleSubscribeClick}>Subscribe Now</Button>
              </CardContent>
            </Card>

            {/* Example Subscription Card */}
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>Basic Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Next Payment: August 1, 2024</p>
                <p>Amount: $11.99</p>
                <Button onClick={handleSubscribeClick}>Subscribe Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
