import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Footer = () => {
  return (
    <footer>
      <MaxWidthWrapper className='flex justify-between'>
        <div>
          <Image src={'/assets/logo.svg'} height={24} width={96} alt='logo' />
        </div>
        <div className='flex flex-col text-right text-white/60'>
          <span>987 Hillcrest Lane</span>
          <span>Irvine, CA</span>
          <span>California 92714</span>
          <span>Call Us: 949-833-7432</span>
        </div>
        <div>
          {/* social icons */}
          <div className='flex gap-2'>
            <Image
              src={'/assets/icon-facebook.svg'}
              height={24}
              width={24}
              alt='facebook'
            />
            <Image
              src={'/assets/icon-pinterest.svg'}
              height={24}
              width={24}
              alt='pinterest'
            />
            <Image
              src={'/assets/icon-twitter.svg'}
              height={24}
              width={24}
              alt='twitter'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
