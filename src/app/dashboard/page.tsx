
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
                <CardTitle>Netflix</CardTitle>
                <CardDescription>Premium Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Next Payment: July 20, 2024</p>
                <p>Amount: $15.99</p>
                <Button variant="secondary">Manage</Button>
              </CardContent>
            </Card>

            {/* Example Subscription Card */}
            <Card>
              <CardHeader>
                <CardTitle>Spotify</CardTitle>
                <CardDescription>Family Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Next Payment: July 25, 2024</p>
                <p>Amount: $14.99</p>
                <Button variant="secondary">Manage</Button>
              </CardContent>
            </Card>

            {/* Example Subscription Card */}
            <Card>
              <CardHeader>
                <CardTitle>YouTube Premium</CardTitle>
                <CardDescription>Individual Plan</CardDescription>
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
