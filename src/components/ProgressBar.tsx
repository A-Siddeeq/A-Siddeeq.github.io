interface ProgressBarProps {
  label: string;
  percentage: number;
}

const ProgressBar = ({ label, percentage }: ProgressBarProps) => {
  return (
    <div className="mb-4 px-8 md:px-0 fredoka">
      {/* Label */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-white">{label}</span>
      </div>

      {/* Progress Bar */}
      <div className="relative bg-gray-800 border rounded-full">
        <div
          className="bg-blue-400 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Percentage Text */}
        <div
          className="absolute -top-2.5 -right-4 flex items-center justify-center bg-blue-500 text-white text-xs font-medium rounded-full w-8 h-8"
          style={{ left: `calc(${percentage}% - 1rem)` }} // Adjust position based on percentage
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
