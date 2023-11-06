import {URL} from '@/const/config';
import {TbBrandGithub, TbBrandX} from 'react-icons/tb';

interface Props {}

const SNS: React.FC = () => {
  return (
    <>
      <div className="flex space-x-4 text-4xl">
        <a href={URL.github} className="">
          <TbBrandGithub className="animate-delay-[250ms] animate-fade animate-once" />
        </a>
        <a href={URL.twitter} className="">
          <TbBrandX className="animate-delay-[500ms] animate-fade animate-once" />
        </a>
      </div>
    </>
  );
};

export default SNS;
