import Image from 'next/image'

export default function Home() {
  return (
      <main className='flex flex-col lg:flex-row max-w-5xl mt-10 lg:mt-0 h-screen lg:items-center mx-auto gap-10 lg:gap-6 p-8'>
        <div className='flex flex-col content-evenly gap-6'>
          <h1 className='text-center lg:text-left text-white text-2xl lg:text-4xl font-bold'>
            Learn to code by watching others
          </h1>
          <p className='text-center lg:text-left text-white'>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable.
          </p>
          <p className='text-center lg:text-left text-white text-xs'>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/nooa-p">Nooa Peltokangas</a>.
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='bg-blue text-white py-4 px-20 lg:px-0 text-center rounded-lg'>
            <span className='font-semibold'>Try it free 7 days</span> then $20/mo. thereafter
          </div>
          <div className='bg-white'>
            <form>
              <input type="text" name="" id="" placeholder='First Name' />
              <input type="text" name="" id="" placeholder='Last Name' />
              <input type="text" name="" id="" placeholder='Email Address' />
              <input type="text" name="" id="" placeholder='Password' />
              <button className='bg-green text-white'>Claim your free trial</button>
            </form>
            By clicking the button, you are agreeing to our Terms and Services
          </div>
        </div>
      </main>
  )
}
