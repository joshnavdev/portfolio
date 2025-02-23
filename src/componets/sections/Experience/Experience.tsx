import { Timeline } from 'flowbite-react';
import TimelineItem from '../../TimelineItem/TimelineItem';
import jobs from '../../../data/jobs';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-[900px] flex justify-center flex-col mx-auto">
      <h2 className="section-title text-2xl after:bg-nord-6">Where I've Worked</h2>
      <div>
        <Timeline>
          {jobs.map((job) => (
            <TimelineItem key={job.id} {...job} />
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;
