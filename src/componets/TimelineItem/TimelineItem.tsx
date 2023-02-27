import { Timeline } from 'flowbite-react';
import { useState } from 'react';
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
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in;
  }

  @keyframes fade-in {
    0% { opacity: 0 },
    100% { opacity: 1 },
  }
`;

const TimelineItem: React.FC<ITimelineItemProps> = ({ business, period, projects }) => {
  const [hidden, setHidden] = useState(true);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setHidden(!hidden);
  };

  return (
    <StyledTimelineItem>
      <Timeline.Item>
        <Timeline.Point icon={CalendarIcon} />
        <Timeline.Content>
          <div
            className="flex justify-between items-center p-2 rounded-md cursor-pointer hover:bg-nord-5 dark:hover:bg-nord-3"
            onClick={handleClick}>
            <Timeline.Title>{business}</Timeline.Title>
            <Timeline.Time className="dark:text-nord-6 text-nord-3">{period}</Timeline.Time>
          </div>
          <div className={`${hidden ? 'hidden' : ''} ${hidden ? '' : 'item-animation'}`}>
            {projects.map((project) => (
              <TimelineProject key={project.id} {...project} />
            ))}
          </div>
        </Timeline.Content>
      </Timeline.Item>
    </StyledTimelineItem>
  );
};

export default TimelineItem;
