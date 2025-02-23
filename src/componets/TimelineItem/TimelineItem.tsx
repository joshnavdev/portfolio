import { Timeline } from 'flowbite-react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { CalendarIcon } from '../icons';
import TimelineProject, { ITimelineProjectProps } from '../TimelineProject/TimelineProject';

export interface ITimelineItemProps {
  id: string;
  business: string;
  period: string;
  projects: ITimelineProjectProps[];
}

const StyledTimelineItem = styled.div`
  .item-animation {
    -webkit-animation-name: fade-in;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in;
  }

  @keyframes fade-in {
    0% { opacity: 0 },
    100% { opacity: 1 },
  }

  .timeline-content {
    transition: max-height 0.5s ease-in-out;
    overflow: hidden;
  }

  .timeline-content-visible {
    max-height: 1000px;
  }

  .timeline-content-hidden {
    max-height: 0;
  }
`;

const TimelineItem: React.FC<ITimelineItemProps> = ({ business, period, projects }) => {
  const [hidden, setHidden] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setHidden(!hidden);
    setTimeout(() => {
      if (contentRef.current && hidden) {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 500);
  };

  const contentClasses = `timeline-content ${hidden ? 'timeline-content-hidden' : 'timeline-content-visible'}`;

  return (
    <StyledTimelineItem>
      <Timeline.Item>
        <Timeline.Point icon={CalendarIcon} />
        <Timeline.Content>
          <div
            className="flex justify-between items-center p-2 rounded-md cursor-pointer hover:bg-nord-3"
            onClick={handleClick}>
            <Timeline.Title>{business}</Timeline.Title>
            <Timeline.Time className="text-nord-6">{period}</Timeline.Time>
          </div>
          <div className={contentClasses}>
            {projects.map((project) => (
              <TimelineProject key={project.id} {...project} />
            ))}
          </div>
          <div ref={contentRef}></div>
        </Timeline.Content>
      </Timeline.Item>
    </StyledTimelineItem>
  );
};

export default TimelineItem;
