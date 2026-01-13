import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useOrders } from '@/hooks/useOrders';
import { useToast } from '@/hooks/use-toast';
import { User, Package, MapPin, LogOut, ChevronRight, Edit2, Save } from 'lucide-react';

const Profile = () => {
  const { user, isAuthenticated, updateProfile, logout } = useAuth();
  const { orders } = useOrders();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: { pathname: '/profile' } }} replace />;
  }

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  const recentOrders = orders.slice(0, 3);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-gray-900">My Account</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <Button variant="outline" onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit
                  </>
                )}
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input value={user?.email || ''} disabled className="bg-gray-50" />
              </div>

              <div className="space-y-2">
                <Label>Full Name</Label>
                {isEditing ? (
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                ) : (
                  <Input value={formData.name || 'Not set'} disabled className="bg-gray-50" />
                )}
              </div>

              <div className="space-y-2">
                <Label>Phone Number</Label>
                {isEditing ? (
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter phone number"
                  />
                ) : (
                  <Input value={formData.phone || 'Not set'} disabled className="bg-gray-50" />
                )}
              </div>

              <div className="space-y-2">
                <Label>Address</Label>
                {isEditing ? (
                  <Input
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Enter address"
                  />
                ) : (
                  <Input value={formData.address || 'Not set'} disabled className="bg-gray-50" />
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <Link
              to="/orders"
              className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-4 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">My Orders</p>
                  <p className="text-sm text-gray-500">{orders.length} orders</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>

            <Link
              to="/track-order"
              className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-4 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Track Order</p>
                  <p className="text-sm text-gray-500">Track your delivery</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          </div>
        </div>

        {/* Recent Orders */}
        {recentOrders.length > 0 && (
          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
              <Link to="/orders" className="text-primary font-medium hover:underline">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <Link
                  key={order.id}
                  to={`/order-status/${order.id}`}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                      order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                      order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                      order.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status}
                    </span>
                    <span className="font-medium text-gray-900">₹{order.total.toLocaleString()}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
