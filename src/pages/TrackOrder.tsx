import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useOrders } from '@/hooks/useOrders';
import { useToast } from '@/hooks/use-toast';
import { Search, Package, Truck, ArrowRight } from 'lucide-react';

const TrackOrder = () => {
  const [trackingInput, setTrackingInput] = useState('');
  const { trackOrder, orders } = useOrders();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingInput.trim()) {
      toast({
        title: "Please enter a tracking number",
        description: "Enter your order ID or tracking number to track your order.",
        variant: "destructive",
      });
      return;
    }

    const order = trackOrder(trackingInput.trim());
    
    if (order) {
      navigate(`/order-status/${order.id}`);
    } else {
      toast({
        title: "Order not found",
        description: "We couldn't find an order with this tracking number. Please check and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Track Order</span>
        </nav>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Truck className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Order</h1>
          <p className="text-gray-600">Enter your order ID or tracking number to check the status</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tracking">Order ID / Tracking Number</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="tracking"
                  value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value)}
                  placeholder="e.g. ORD-1234567890 or TRK-ABCD1234"
                  className="pl-10 h-12"
                />
              </div>
            </div>
            <Button type="submit" className="w-full h-12 text-base">
              Track Order
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>

        {/* Recent Orders (if any) */}
        {orders.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Recent Orders</h2>
            <div className="space-y-3">
              {orders.slice(0, 3).map((order) => (
                <Link
                  key={order.id}
                  to={`/order-status/${order.id}`}
                  className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-4 hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-500 capitalize">{order.status}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6 text-center">
          <p className="text-gray-600 mb-2">Can't find your order?</p>
          <p className="text-sm text-gray-500">
            Check your email for the order confirmation or{' '}
            <Link to="/contact" className="text-primary hover:underline">
              contact our support team
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TrackOrder;
