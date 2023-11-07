import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className='flex flex-col lg:flex-row'>
        <div className='flex flex-col'>
          <h1 className='text-center lg:text-left text-white'>
            Learn to code by watching others
          </h1>
          <p className='text-center lg:text-left text-white'>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable.
          </p>
        </div>
        <div className='flex flex-col'>
          <div className='bg-blue text-white'>
            Try it free 7 days then $20/mo. thereafter
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
      <footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/nooa-p">Nooa Peltokangas</a>.
      </footer>
    </>
  )
}
