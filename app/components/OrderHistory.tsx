interface HistoryOrder {
  id: string;
  date: string;
  items: string[];
  status: 'delivered';
}

export default function OrderHistory() {
  const pastOrders: HistoryOrder[] = [
    {
      id: '#2025040',
      date: 'April 16, 2025',
      items: ['2x Margherita Pizza'],
      status: 'delivered'
    },
    {
      id: '#2025039',
      date: 'April 14, 2025',
      items: ['1x BBQ Chicken Pizza'],
      status: 'delivered'
    },
    {
      id: '#2025038',
      date: 'April 12, 2025',
      items: ['1x Supreme Pizza'],
      status: 'delivered'
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div className="space-y-2">
        {pastOrders.map((order) => (
          <div key={order.id} className="border rounded p-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-gray-600">Order {order.id}</p>
                <p className="text-gray-600">{order.date}</p>
              </div>
              <span className="text-green-600 font-medium">
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
            <div>
              {order.items.map((item, index) => (
                <p key={index} className="text-gray-800">{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 