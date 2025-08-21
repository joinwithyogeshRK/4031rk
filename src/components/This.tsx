import React from 'react';
import main from '@/assets/images/main-1755429000700.png';
import { cn } from '@/lib/utils';

export const This = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="relative h-full w-full">
          <img 
            src={main} 
            alt="Background pattern" 
            className={cn(
              "object-cover object-center w-full h-full",
              "transform scale-110 rotate-6",
              "animate-[pulse_8s_ease-in-out_infinite]"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 to-secondary-50/80 backdrop-blur-sm"></div>
        </div>
      </div>
    </div>
  );
};