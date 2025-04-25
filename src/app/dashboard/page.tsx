'use client';

import {DashboardSidebar} from '@/components/dashboard/Sidebar';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {useState} from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const handleSubscribeClick = () => {
    setOpen(true);
  };

  const handlePayment = async (paymentMethod: string) => {
    setOpen(false);
    const paymentDetails = {
      amount: 9.99, // Example amount, adjust as needed
      currency: 'USD', // Example currency
      description: 'Subscription Payment',
    };

    try {
      const response = await fetch(`/api/${paymentMethod}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          alert(`Payment successful! Transaction ID: ${result.transactionId}`);
        } else {
          alert('Payment failed. Please try again.');
        }
      } else {
        alert('Payment processing error. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('An unexpected error occurred. Please try again.');
    }
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
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          {/* This trigger is not visible, it's just to manage the dialog state */}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Choose a payment method</AlertDialogTitle>
            <AlertDialogDescription>
              Select your preferred payment method to proceed with the subscription.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handlePayment('braintree')}>Braintree</AlertDialogAction>
            <AlertDialogAction onClick={() => handlePayment('paypal')}>PayPal</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
