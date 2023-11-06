import Image from 'next/image';
import {BASE_PATH_NAME, URL} from '@/const/config';
import {TbBrandGithub, TbBrandX} from 'react-icons/tb';

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <Image
        src={`${BASE_PATH_NAME}/favicon.ico`}
        alt="tomatommy"
        width={200}
        height={200}
      />
      <p>@tomatommy</p>
      <div className="flex space-x-4 text-4xl">
        <a href={URL.github} className="">
          <TbBrandGithub className="animate-delay-[250ms] animate-fade animate-once" />
        </a>
        <a href={URL.twitter} className="">
          <TbBrandX className="animate-delay-[500ms] animate-fade animate-once" />
        </a>
      </div>
    </main>
  );
}
