import Image from 'next/image'

export default function Home() {
  return (
      <main className='flex flex-col lg:flex-row max-w-5xl mt-10 lg:mt-0 h-screen lg:items-center mx-auto gap-10 lg:gap-6 p-8'>
        <div className='flex flex-col content-evenly gap-6 lg:flex-1 lg:flex-grow'>
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
        <div className='flex flex-col gap-4 lg:flex-1 lg:flex-grow'>
          <div className='bg-blue text-white py-4 px-20 lg:px-0 text-center rounded-lg shadow'>
            <span className='font-semibold'>Try it free 7 days</span> then $20/mo. thereafter
          </div>
          <div className='bg-white p-6 lg:p-10 rounded-lg shadow'>
            <form className=''>
              <input type="text" name="" id="" placeholder='First Name' className='block' />
              <input type="text" name="" id="" placeholder='Last Name' className='block' />
              <input type="text" name="" id="" placeholder='Email Address' className='block' />
              <input type="text" name="" id="" placeholder='Password' className='block' />
              <button className='bg-green text-white shadow-sm block'>Claim your free trial</button>
            </form>
            <span>By clicking the button, you are agreeing to our Terms and Services</span>
          </div>
        </div>
      </main>
  )
}
