
import { NextRequest, NextResponse } from 'next/server';
import { processPayPalPayment, PaymentDetails } from '@/services/paypal';

export async function POST(req: NextRequest) {
  try {
    const paymentDetails: PaymentDetails = await req.json();
    const paymentResult = await processPayPalPayment(paymentDetails);

    return NextResponse.json(paymentResult);
  } catch (error) {
    console.error("PayPal payment processing error:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
