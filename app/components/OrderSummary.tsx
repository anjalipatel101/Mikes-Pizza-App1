import Link from 'next/link';

interface OrderSummaryProps {
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  onCheckout: () => void;
}

export default function OrderSummary({
  subtotal,
  deliveryFee,
  tax,
  total,
  onCheckout
}: OrderSummaryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow sticky top-4">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg pt-3 border-t">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button 
        onClick={onCheckout}
        className="w-full bg-[#0069a7] text-white py-3 rounded mt-6 hover:bg-[#005286] transition-colors"
      >
        Proceed to Checkout
      </button>
      <Link 
        href="/menu" 
        className="block text-center mt-4 text-[#0069a7] hover:text-[#005286] text-sm"
      >
        Continue Shopping
      </Link>
    </div>
  );
} 