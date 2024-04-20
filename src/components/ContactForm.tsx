import { Button } from './ui/button'

const ContactForm = () => {
  return (
    <form className='w-[90%] mx-auto pt-12 pb-20 '>
      <div className='flex flex-col gap-8 max-w-lg mx-auto'>
        <input
          type='text'
          placeholder='Name'
          className='bg-transparent border-b py-4 placeholder:font-semibold placeholder-gray-400 pl-3 outline-none lg:text-lg'
        />
        <input
          type='email'
          placeholder='Email Address'
          className='bg-transparent border-b py-4 placeholder:font-semibold placeholder-gray-400 pl-3 outline-none lg:text-lg'
        />
        <input
          placeholder='Title'
          type='text'
          className='bg-transparent border-b py-4 placeholder:font-semibold placeholder-gray-400 pl-3 outline-none lg:text-lg'
        />
        <input
          placeholder='Message'
          type='text'
          className='bg-transparent border-b py-4 placeholder:font-semibold placeholder-gray-400 pl-3 outline-none lg:text-lg'
        />
        <Button
          type='submit'
          variant={'outline'}
          className='text-jungleGreen font-semibold text-lg mt-8 rounded-full py-6 px-8 w-fit'
        >
          submit
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
