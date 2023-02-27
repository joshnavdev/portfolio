import { Timeline } from 'flowbite-react';

export interface ITimelineProjectProps {
  id: string;
  name: string;
  role: string;
  period: string;
  responsibilities: string[];
}

const TimelineProject: React.FC<ITimelineProjectProps> = ({ name, role, period, responsibilities }) => {
  return (
    <div className="mt-3 px-1">
      <div className="mb-2">
        <Timeline.Title className="text-sm">
          {name} - {role}
        </Timeline.Title>
        <Timeline.Time>{period}</Timeline.Time>
      </div>
      {responsibilities.map((responsibility, idx) => (
        <Timeline.Body
          key={idx}
          className="font-thin pl-5 relative before:content-['▹'] before:absolute before:left-0 before:text-nord-8 mx-5">
          {responsibility}
        </Timeline.Body>
      ))}
    </div>
  );
};

export default TimelineProject;
