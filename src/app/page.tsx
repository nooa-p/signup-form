import Image from 'next/image'

export default function Home() {
  return (
      <main className='flex flex-col lg:flex-row max-w-6xl mt-10 lg:mt-0 lg:h-screen lg:items-center mx-auto gap-10 lg:gap-6 p-8 pb-0'>
        <div className='flex flex-col content-evenly gap-6 lg:flex-1 lg:flex-grow'>
          <h1 className='text-center lg:text-left text-white text-3xl lg:text-5xl font-bold'>
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
              <input type="text" className='block w-full p-3.5 pl-7 rounded mb-4 border border-gray-light placeholder:text-dark-light placeholder:font-semibold' name="" id="" placeholder='First Name' />
              <input type="text" className='block w-full p-3.5 pl-7 rounded mb-4 border border-gray-light placeholder:text-dark-light placeholder:font-semibold' name="" id="" placeholder='Last Name' />
              <input type="text" className='block w-full p-3.5 pl-7 rounded mb-4 border border-gray-light placeholder:text-dark-light placeholder:font-semibold' name="" id="" placeholder='Email Address' />
              <input type="text" className='block w-full p-3.5 pl-7 rounded mb-4 border border-gray-light placeholder:text-dark-light placeholder:font-semibold' name="" id="" placeholder='Password'  />
              <button className='bg-green text-white shadow-sm block w-full p-3 rounded'>Claim your free trial</button>
            </form>
            <span>By clicking the button, you are agreeing to our Terms and Services</span>
          </div>
        </div>
      </main>
  )
}
