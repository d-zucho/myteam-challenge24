import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'
import { FooterSocials } from '../Socials'

const Footer = () => {
  return (
    <footer className='py-14 bg-darkGreen'>
      <MaxWidthWrapper>
        <div
          id='footer-container'
          className='flex flex-col items-center md:space-y-0 space-y-6 md:items-start md:flex-row md:justify-between'
        >
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

          <div className='flex flex-col text-center text-white/60'>
            <span>987 Hillcrest Lane</span>
            <span>Irvine, CA</span>
            <span>California 92714</span>
            <span>Call Us: 949-833-7432</span>
          </div>
          <div className='flex items-end'>
            {/* social icons */}
            <div className=''>
              <FooterSocials classNames='' />

              <div className='text-white/60 mt-4 md:mt-12'>
                <p>Copyright 2020. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
