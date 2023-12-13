import Swaraj from '../assets/images/Swaraj.jpg'
const Sidebar = () => {
  return (
    <>
      <div className='bg-stone-800 min-h-screen p-3 text-white'>
        <div className='flex justify-center mt-2'>
          <img src={Swaraj} alt="Swaraj" className='w-36 h-36 rounded-full' />
        </div>
        <p className='font-semibold text-left mt-3 text-2xl'>Contact</p>
        <hr className='bg-white mb-2' />
        <div className='flex item-center gap-1 mb-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
          </svg>
          <p>028swarajkumar@gmail.com</p>
        </div>
        <div className="flex items-center gap-1 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <p>+917992470659</p>
        </div>
        <div className="flex items-center gap-1 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <p>Patna, Bihar</p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
          <a href="https://github.com/swaraj29" target="_blank" rel="noreferrer" className="text-gray-100">github.com/swaraj29</a>
        </div>
        <p className='font-semibold text-left mt-3 text-2xl'>Skills</p>
        <hr className='bg-white mb-2' />
        <div>
          <div>
            <div className='mb-1 text-base font-medium'>HTML</div>
            <div className='w-full bg-gray-700 h-1.5 rounded-full mb-2'>
              <div className='bg-yellow-600 h-1.5 rounded-full w-5/6'></div>
            </div>
          </div>
          <div>
            <div className='mb-1 text-base font-medium'>CSS</div>
            <div className='w-full bg-gray-700 h-1.5 rounded-full mb-2'>
              <div className='bg-yellow-600 h-1.5 rounded-full w-3/4'></div>
            </div>
          </div>
          <div>
            <div className='mb-1 text-base font-medium'>Javascript</div>
            <div className='w-full bg-gray-700 h-1.5 rounded-full mb-2'>
              <div className='bg-yellow-600 h-1.5 rounded-full w-5/6'></div>
            </div>
          </div>
          <div>
            <div className='mb-1 text-base font-medium'>ReactJS</div>
            <div className='w-full bg-gray-700 h-1.5 rounded-full mb-2'>
              <div className='bg-yellow-600 h-1.5 rounded-full w-2/5'></div>
            </div>
          </div>
          <div>
            <div className='mb-1 text-base font-medium'>Node js</div>
            <div className='w-full bg-gray-700 h-1.5 rounded-full mb-2'>
              <div className='bg-yellow-600 h-1.5 rounded-full w-3/5'></div>
            </div>
          </div>

          <div>
            <div className='mb-1 text-base font-medium'>Express js</div>
            <div className='w-full bg-gray-700 h-1.5 rounded-full mb-2'>
              <div className='bg-yellow-600 h-1.5 rounded-full w-3/5'></div>
            </div>
          </div>

          
          <div>
            <div className='mb-1 text-base font-medium'>Mongodb</div>
            <div className='w-full bg-gray-700 h-1.5 rounded-full mb-2'>
              <div className='bg-yellow-600 h-1.5 rounded-full w-3/5'></div>
            </div>
          </div>
        </div>    
      </div>
    </>
  )
}

export default Sidebar