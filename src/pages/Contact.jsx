const Contact = () => {
  return (
    <div className='page-container'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-2xl'>Contact</h1>
        <p>Feel free to reach out for feedback, suggestions.</p>
      </div>

      <div>
        <h2 className='font-semibold text-lg'>Developer</h2>
        <p>Yashwanth</p>
      </div>

      <div>
        <h2 className='font-semibold text-lg'>Email</h2>
        <p>yashwanthclass1996@gmail.com</p>
      </div>

      <div>
        <h2 className='font-semibold text-lg'>GitHub</h2>
        <a href='https://github.com/yashwanths1101'>
          https://github.com/yashwanths1101
        </a>
      </div>

      <div>
        <h2 className='font-semibold text-lg'>LinkedIn</h2>
        <a href='https://www.linkedin.com/in/yashwanth101/'>
          https://www.linkedin.com/in/yashwanth101/
        </a>
      </div>
    </div>
  )
}

export default Contact
