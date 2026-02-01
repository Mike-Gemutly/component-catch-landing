'use client';

import { useState } from 'react';

interface PaymentButtonProps {
  tier?: 'pro';
  className?: string;
  children: React.ReactNode;
}

/**
 * PaymentButton Component
 *
 * A button that initiates the Component Catch Premium checkout flow.
 * Calls the EXTERNAL payment service API.
 *
 * Payment Service: https://payments.componentcatch.com
 */
export function PaymentButton({ tier = 'pro', className = '', children }: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      // Call EXTERNAL payment service (not local API routes)
      const paymentApiUrl = process.env.NEXT_PUBLIC_PAYMENT_API_URL || 'https://payments.componentcatch.com';
      const response = await fetch(`${paymentApiUrl}/api/v1/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Payment initiation failed');
      }

      // Redirect to Stripe Checkout
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else if (data.extPayUrl) {
        // ExtPay fallback - open in new tab
        window.open(data.extPayUrl, '_blank');
        setIsProcessing(false);
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setIsProcessing(false);
    }
  };

  return (
    <button
      onClick={handlePurchase}
      disabled={isProcessing}
      className={className}
    >
      {isProcessing ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </>
      ) : error ? (
        `Error - ${error}`
      ) : (
        children
      )}
    </button>
  );
}
