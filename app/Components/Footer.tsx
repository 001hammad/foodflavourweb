const Footer = () => {

return (



<footer className='bg-pink-600 sm:mt-7 mt-8 text-white text-xs sm:text-sm h-full sm:h-auto p-7 sm:pt-32 w-auto'>

  <div className='sm:flex justify-between p-2 sm:p-8 mb-20'>
  <div className='sm:mb-0 mb-12'>
  <p className='underline mb-2'>Quick Links</p>
  <p><b>Tel:</b> +92 3172774237</p>
  <p><b>Email:</b> <a href="mailto:iamhammad224@gmail.com">iamhammad224@gmail.com</a></p>
  <p><b>LinkedIn:</b><a href="mailto:iamhammad224@gmail.com"></a> Click Me To Go </p>
  </div>
  <div className='sm:mb-0 mb-12'>
  <p className='underline mb-2'>Owner Info</p>
  <p><b>Owner:</b> Hammad Hafeez</p>
  <p><b>Province:</b> Sindh</p>
  <p><b>Passion:</b> Programming</p>
  </div>
  <div  className='sm:mb-0 mb-12'>
  <p className='underline mb-2'>Web About</p>
  <p><b>Html-Used:</b> 40%</p>
  <p><b>Tailwind-Used:</b> 30%</p>
  <p><b>Next.js-Used</b> 30%</p>
  </div>
  <div className='sm:mt-0 mt-14'>
  <label htmlFor="subscribe" className='mr-2 bg-pink-900 border-2 border-pink-500 p-2 rounded-lg font-bold hover:bg-pink-700 cursor-pointer duration-200'>Subscribe</label>
  <input type="text" placeholder='Here your message box' className='h-7 rounded-lg border-2 border-pink-900 text-black'/>
  </div>
  </div>



  <div className='flex justify-center items-center pt-12'>
      <p>&copy; 2024 All Right Reserved. Hammad PandaWeb</p>
  </div>
</footer>
)
}

export default Footer;
