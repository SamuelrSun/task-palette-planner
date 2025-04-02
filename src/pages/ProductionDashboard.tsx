
import React from 'react';
import Sidebar from '@/components/Sidebar';
import ScheduleHeader from '@/components/ScheduleHeader';
import NewScheduleForm from '@/components/NewScheduleForm';
import ProductionSchedule from '@/components/ProductionSchedule';

const ProductionDashboard: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <ScheduleHeader title="Production" />
        
        <div className="flex flex-1 overflow-hidden">
          <NewScheduleForm />
          <ProductionSchedule />
        </div>
      </div>
    </div>
  );
};

export default ProductionDashboard;
