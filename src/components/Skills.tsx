import {
  TbBrandBootstrap,
  TbBrandFigma,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandReact,
  TbBrandWebflow,
} from 'react-icons/tb';

interface Props {}

const Skills: React.FC = () => {
  return (
    <>
      <div className="grid">
        <div className="flex items-center space-x-2">
          <TbBrandReact className="text-4xl" />
          <span>react</span>
        </div>
        <div className="flex items-center space-x-2">
          <TbBrandNextjs className="text-4xl" />
          <span>next</span>
        </div>
        <div className="flex items-center space-x-2">
          <TbBrandPython className="text-4xl" />
          <span>python</span>
        </div>
        <div className="flex items-center space-x-2">
          <TbBrandBootstrap className="text-4xl" />
          <span>bootstrap</span>
        </div>
        <div className="flex items-center space-x-2">
          <TbBrandFigma className="text-4xl" />
          <span>figma</span>
        </div>
      </div>
    </>
  );
};

export default Skills;
