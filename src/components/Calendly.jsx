import { InlineWidget } from "react-calendly";

const CalendlyScheduler = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <InlineWidget url="https://calendly.com/your-calendly-link" />
    </div>
  );
};

export default CalendlyScheduler;
