import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from './useCart';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
  };
  paymentMethod: string;
  trackingNumber?: string;
}

interface OrdersContextType {
  orders: Order[];
  createOrder: (order: Omit<Order, 'id' | 'createdAt' | 'status'>) => Order;
  getOrderById: (id: string) => Order | undefined;
  trackOrder: (trackingNumber: string) => Order | undefined;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const createOrder = (orderData: Omit<Order, 'id' | 'createdAt' | 'status'>): Order => {
    const order: Order = {
      ...orderData,
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
      trackingNumber: `TRK-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
    };
    setOrders(prev => [order, ...prev]);
    return order;
  };

  const getOrderById = (id: string) => {
    return orders.find(o => o.id === id);
  };

  const trackOrder = (trackingNumber: string) => {
    return orders.find(o => o.trackingNumber === trackingNumber || o.id === trackingNumber);
  };

  return (
    <OrdersContext.Provider value={{ orders, createOrder, getOrderById, trackOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}
