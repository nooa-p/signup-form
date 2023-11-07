import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex-row'>
      <div className='flex-col'>
        <h1 className='text-center lg:text-left'>
          Learn to code by watching others
        </h1>
        <p className='text-center lg:text-left'>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
          but understanding how developers think is invaluable.
        </p>
      </div>
      <div>
        Try it free 7 days then $20/mo. thereafter

        First Name 
        Last Name 
        Email Address
        Password

        Claim your free trial 

        By clicking the button, you are agreeing to our Terms and Services
      </div>
      
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/nooa-p">Nooa Peltokangas</a>.
    </main>
  )
}
