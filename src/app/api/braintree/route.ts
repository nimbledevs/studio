
import { NextRequest, NextResponse } from 'next/server';
import { processBraintreePayment, PaymentDetails } from '@/services/braintree';

export async function POST(req: NextRequest) {
  try {
    const paymentDetails: PaymentDetails = await req.json();
    const paymentResult = await processBraintreePayment(paymentDetails);

    return NextResponse.json(paymentResult);
  } catch (error) {
    console.error("Braintree payment processing error:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
