import Image from 'next/image'
import Link from 'next/link'

import { Logo } from '@/components/global/Logo'
import { Button } from '@/components/ui'
import { GITHUB_URL } from '@/constants'

import { HomePageNewsletter } from './HomePage.newsletter'
import { homeStyles } from './HomePage.styles'

export function HomePage() {
  const {
    base,
    left,
    right,
    rightImage,
    leftInner,
    heading,
    footer,
    githubMobile,
  } = homeStyles()

  return (
    <main className={base()}>
      <div className={left()}>
        <div className={leftInner()}>
          <div>
            <Logo />
          </div>
          <div>
            <h1 className={heading()}>
              Every foundational tool that software companies need for
              hyper-scale, backed by open source.
            </h1>
            <HomePageNewsletter />
          </div>
          <div className={footer()}>
            <Button variant="secondary" asChild>
              <Link href={GITHUB_URL} target="_blank">
                Get involved on GitHub{' '}
                <Image
                  src="/icons/github.svg"
                  width={13}
                  height={13}
                  alt="Get involved on GitHub"
                />
              </Link>
            </Button>
          </div>
          <div className={githubMobile()}>
            <Button variant="secondary" size="icon" asChild>
              <Link href={GITHUB_URL} target="_blank">
                <Image
                  src="/icons/github.svg"
                  width={13}
                  height={13}
                  alt="Get involved on GitHub"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className={right()}>
        <Image
          src="/images/landing-page-bg.png"
          fill
          alt=""
          className={rightImage()}
        />
      </div>
    </main>
  )
}
