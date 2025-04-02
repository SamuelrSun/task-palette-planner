
import React from 'react';
import { Share2 } from 'lucide-react';

// Mock data for the schedule
const days = ['Monday, 3/31', 'Tuesday, 4/1', 'Wednesday, 4/2', 'Thursday, 4/3', 'Friday, 4/4'];
const hours = [
  '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', 
  '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM'
];

// Mock tasks data
const tasks = [
  { 
    id: 1, 
    employeeColor: 'bg-purple-400', 
    startHour: 9, 
    duration: 2, 
    day: 0 
  },
  { 
    id: 2, 
    employeeColor: 'bg-blue-400', 
    startHour: 10, 
    duration: 3, 
    day: 1 
  },
  { 
    id: 3, 
    employeeColor: 'bg-teal-400', 
    startHour: 11, 
    duration: 3, 
    day: 2 
  },
  { 
    id: 4, 
    employeeColor: 'bg-teal-400', 
    startHour: 13, 
    duration: 2, 
    day: 2 
  },
];

const ProductionSchedule: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center">
            Caramel Crack Production Schedule
            <button className="ml-2 p-1 text-gray-500 hover:text-gray-700">
              <Share2 className="w-5 h-5" />
            </button>
          </h2>
        </div>
        
        <div className="flex border-b border-gray-200 pb-2">
          <div className="w-16"></div> {/* Empty space for time labels */}
          {days.map((day, index) => (
            <div key={index} className="flex-1 text-center font-medium">
              {day}
            </div>
          ))}
        </div>
        
        <div className="relative overflow-y-auto" style={{ height: "calc(100vh - 240px)" }}>
          {hours.map((hour, hourIndex) => (
            <div key={hourIndex} className="flex border-b border-gray-100">
              <div className="w-16 py-4 pr-4 text-right text-sm text-gray-500 sticky left-0 bg-white">
                {hour}
              </div>
              
              {days.map((_, dayIndex) => (
                <div 
                  key={`${hourIndex}-${dayIndex}`} 
                  className="flex-1 h-10 border-l border-gray-100 relative"
                >
                  {tasks
                    .filter(task => task.day === dayIndex && task.startHour === hourIndex)
                    .map(task => (
                      <div 
                        key={task.id}
                        className={`absolute w-[95%] rounded-md ${task.employeeColor}`}
                        style={{ 
                          height: `${task.duration * 40}px`,
                          top: 0,
                          left: '2.5%',
                        }}
                      ></div>
                    ))
                  }
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionSchedule;
