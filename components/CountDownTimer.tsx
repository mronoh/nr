interface CountDownTimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDownTimer = ({ days, hours, minutes, seconds }:CountDownTimerProps) => {
  return (
    <div className="grid grid-flow-col sm:gap-6 gap-2 text-center auto-cols-max justify-center">
      <div className="flex flex-col sm:p-4 p-3 bg-gray-800 rounded-lg text-white text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span>{String(days).padStart(2, '0')}</span>
        </span>
        days
      </div> 
      <div className="flex flex-col sm:p-4 p-3 bg-gray-800 rounded-lg text-white text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span>{String(hours).padStart(2, '0')}</span>
        </span>
        hours
      </div> 
      <div className="flex flex-col sm:p-4 p-3 bg-gray-800 rounded-lg text-white text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span>{String(minutes).padStart(2, '0')}</span>
        </span>
        min
      </div> 
      <div className="flex flex-col sm:p-4 p-3 bg-gray-800 rounded-lg text-white text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span>{String(seconds).padStart(2, '0')}</span>
        </span>
        sec
      </div>
    </div>
  )
}

export default CountDownTimer;