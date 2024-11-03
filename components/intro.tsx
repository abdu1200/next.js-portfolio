import Image from 'next/image'
import authorImage from '@/public/images/authors/karim.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Karim.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a Backend Heavy Full Stack Engineer based in Ethiopia. I
          specialize in React, Next.js, and Django to create powerful web
          solutions. I turn complex challenges into seamless, efficient
          applications that drive business growth.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='karim moh'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
