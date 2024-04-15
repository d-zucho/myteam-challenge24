import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'
import { FooterSocials } from '../Socials'

const Footer = () => {
  return (
    <footer>
      <MaxWidthWrapper>
        <div id='footer-container' className='flex flex-col items-center'>
          <div>
            <div>
              <Image
                src={'/assets/logo.svg'}
                height={40}
                width={160}
                alt='logo'
              />
            </div>
            <div className='flex font-semibold justify-between my-6'>
              <Link href='/'>home</Link>
              <Link href='/'>about</Link>
            </div>
          </div>
          <div className='flex flex-col text-center md:text-right text-white/60 mb-10'>
            <span>987 Hillcrest Lane</span>
            <span>Irvine, CA</span>
            <span>California 92714</span>
            <span>Call Us: 949-833-7432</span>
          </div>
          <div className='flex justify-between'>
            {/* social icons */}
            <div className='flex flex-col justify-between'>
              <FooterSocials classNames='' />
              <div className='text-white/60 mt-4'>
                Copyright 2020. All Rights Reserved FF
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
