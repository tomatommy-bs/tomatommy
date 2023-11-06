import Image from 'next/image';
import {BASE_PATH_NAME, URL} from '@/const/config';
import {TbBrandGithub, TbBrandX} from 'react-icons/tb';
import SNS from '../components/SNS';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <Image
        src={`${BASE_PATH_NAME}/favicon.ico`}
        alt="tomatommy"
        width={200}
        height={200}
      />
      <SNS />
      <Skills />
    </main>
  );
}
