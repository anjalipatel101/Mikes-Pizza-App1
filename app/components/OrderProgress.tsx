import { FaPizzaSlice } from 'react-icons/fa';

type OrderStatus = 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered';

interface OrderProgressProps {
  status: OrderStatus;
}

export default function OrderProgress({ status }: OrderProgressProps) {
  const steps: OrderStatus[] = ['confirmed', 'preparing', 'out-for-delivery', 'delivered'];
  const currentStep = steps.indexOf(status);

  const getStepIcon = (step: OrderStatus) => {
    switch (step) {
      case 'confirmed':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
        );
      case 'preparing':
        return <FaPizzaSlice className="w-5 h-5" />;
      case 'out-for-delivery':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 3a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        );
      case 'delivered':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        );
    }
  };

  return (
    <div className="my-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex-1 flex flex-col items-center relative">
            {index < steps.length - 1 && (
              <div className="absolute w-full h-1 top-5 left-1/2">
                <div className="absolute h-full w-full bg-gray-200" />
                {/* Progress line */}
                {index < currentStep && (
                  <div className="absolute h-full bg-blue-600" style={{ 
                    width: index + 1 <= currentStep ? '100%' : 
                           index === currentStep ? '50%' : '0%'
                  }} />
                )}
              </div>
            )}
            
            {/* Icon */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 ${
              index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              {getStepIcon(step)}
            </div>
            
            {/* Label */}
            <p className={`mt-2 text-sm ${
              index <= currentStep ? 'text-gray-900' : 'text-gray-400'
            }`}>
              {step.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 