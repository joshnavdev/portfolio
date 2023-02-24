import { Tooltip } from 'flowbite-react';
import { StarIcon } from '../icons';

interface ISkillLevelProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: number;
}

const SkillLevel: React.FC<ISkillLevelProps> = ({ level = 0 }) => {
  const tooltipsContent = [
    'Has knowledge but can not perform',
    'Can perform with supervision',
    'Can perform with limited supervision',
    'Can perform without supervision',
    'Can teach others',
  ];

  return (
    <div className="flex">
      {[...Array(5)].map((_, idx) => (
        <Tooltip key={idx} content={tooltipsContent[idx]}>
          <StarIcon filled={idx < level} />
        </Tooltip>
      ))}
    </div>
  );
};

export default SkillLevel;
