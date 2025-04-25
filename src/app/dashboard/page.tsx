

import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-secondary">
      <DashboardSidebar />
      <div className="flex-1 p-4">
        <div className="container py-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Example Subscription Card */}
            <Card>
              <CardHeader>
                <CardTitle>Acme Software</CardTitle>
                <CardDescription>Basic Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Next Payment: July 20, 2024</p>
                <p>Amount: $9.99</p>
                <Button variant="secondary">Manage</Button>
              </CardContent>
            </Card>

            {/* Example Subscription Card */}
            <Card>
              <CardHeader>
                <CardTitle>Stark Industries</CardTitle>
                <CardDescription>Pro Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Next Payment: July 25, 2024</p>
                <p>Amount: $29.99</p>
                <Button variant="secondary">Manage</Button>
              </CardContent>
            </Card>

            {/* Example Subscription Card */}
            <Card>
              <CardHeader>
                <CardTitle>Wayne Enterprises</CardTitle>
                <CardDescription>Basic Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Next Payment: August 1, 2024</p>
                <p>Amount: $11.99</p>
                <Button variant="secondary">Manage</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

