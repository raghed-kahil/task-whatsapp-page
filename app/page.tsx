
import GooglePlayImage from '@/assets/googleplay.png';
import AppStoreImage from '@/assets/appstore.png';

import BgGreenImage from '@/assets/bg-green.png';
import IPhoneWhatsappImage from '@/assets/iPhone Whatsapp.png';
import GreenCheckFillImage from '@/assets/green-check-fill.png';

import FutureAuthImg from '@/assets/f-auth.png';
import FutureVoiceImg from '@/assets/f-voice.png';
import FutureMessageImg from '@/assets/f-message.png';
import FutureContactImg from '@/assets/f-contact.png';

import BrandImg0 from '@/assets/Brands/image-0.png';
import BrandImg1 from '@/assets/Brands/image-1.png';
import BrandImg2 from '@/assets/Brands/image-2.png';
import BrandImg3 from '@/assets/Brands/image-3.png';


import AutomationImage1 from '@/assets/auto/image1.png';
import AutomationImage2 from '@/assets/auto/image2.png';
import AutomationImage3 from '@/assets/auto/image3.png';

import { Button } from "@/components/ui/button";
import UnderlineWord from "@/components/UnderlineWord";
import Image from "next/image";


import FutureCard from "@/components/FutureCard";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import clsx from 'clsx';

const automationData = [
  {
    title: 'Attract Customers Fast With AI-Powered Whatsapp Ads',
    image: AutomationImage1,
    futures: [
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
    ]
  },
  {
    title: 'Attract Customers Fast With AI-Powered Whatsapp Ads',
    image: AutomationImage2,
    futures: [
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
    ]
  },
  {
    title: 'Attract Customers Fast With AI-Powered Whatsapp Ads',
    image: AutomationImage3,
    futures: [
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
      'Right Click-To-Whatsapp Ads (CTWA) directly from the platform',
    ]
  }
]


export default function Home() {
  return (
    <>
      <section className="flex justify-center items-center min-h-96 md:px-12 mb-4"
        style={{
          backgroundImage: `url('${BgGreenImage.src}')`,
          backgroundPosition: "-50% center",
          backgroundSize: "contain",
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="p-4 text-center md:text-left flex-1">
          <p className="text-3xl md:text-6xl mb-2">
            Your all-in-one platform for <UnderlineWord>automated</UnderlineWord> marketing, sales, and support
          </p>
          <p className="text-gray-500 mb-4">
            Boast sales and build stronger connections with the whatsapp business a platform that automates
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
            <Button variant="secondary" size="lg">Download</Button>
            <a href="#" className="underline underline-offset-1">Learn More</a>
          </div>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <button className="w-40 h-auto">
              <Image src={GooglePlayImage} alt="get it on google play" className="w-full" />
            </button>
            <button className="w-40 h-auto">
              <Image src={AppStoreImage} alt="get it on app store" className="w-full" />
            </button>
          </div>
        </div>
        <div className="hidden md:block text-center w-80">
          <Image src={IPhoneWhatsappImage} alt=""/>
        </div>
      </section>
      {/* Futures */}
      <section className='px-2 md:px-12 mb-8'>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl md:text-4xl max-w-96">The all-in-one toolkit for customer engagement</h2>
          <Button variant={'secondary'} size={'lg'}>
            Free Trial
          </Button>
        </div>
        {/* cards */}
        <div className='grid justify-center items-stretch grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {[
            {
              title: "User Authentication & Identity",
              description: "Protect your users with user authentication and identity management",
              image: FutureAuthImg
            },
            {
              title: "Voice Apis",
              description: "Automate and engage with your customers with voice and messaging",
              image: FutureVoiceImg
            },
            {
              title: "Contact Center",
              description: "Automate and engage with your customers with voice and messaging",
              image: FutureMessageImg
            },
            {
              title: "Messaging Platform",
              description: "Automate and engage with your customers with voice and messaging",
              image: FutureContactImg
            }
          ].map(f => (
            <FutureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* brands */}
      <section className='bg-primary/40 p-2 py-5 mb-12'>
        <Carousel>
          <CarouselContent>
            {
              [
                BrandImg0, BrandImg1, BrandImg2, BrandImg3
              ].map(b => (
                <CarouselItem key={b.src} className='basis-1/3 sm:basis-1/4'>
                  <Image src={b} alt="brand image" className="h-30" />
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
      </section>

      {/* Automation */}
      {automationData.map((f, ix) => (
        <section className={clsx('mb-12 flex flex-col-reverse items-center justify-between px-2 md:px-12', ix % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row')} key={ix}>
          <div className='flex-1'>
            <h2 className="text-xl md:text-4xl mb-4">{f.title}</h2>
            <ul className='list-none'>
              {f.futures.map((f, ix) => (
                <li key={ix} className='flex items-center gap-2 mb-4'>
                  <Image src={GreenCheckFillImage} alt='' className='size-8'/>
                  <span className='text-muted-foreground text-lg'>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-1'>
            <Image src={f.image} />
          </div>
        </section>
      ))}
    </>
  );
}
