import { Logo } from '@/components/global/Logo'

import { HomePageAnimation } from './HomePage.animation'
import { homeStyles } from './HomePage.styles'

export function HomePage() {
  const { base, left, right, leftInner, logo, content, heading, footer } =
    homeStyles()

  return (
    <main className={base()}>
      <div className={left()}>
        <div className={leftInner()}>
          <div className={logo()}>
            <Logo />
          </div>
          <div className={content()}>
            <h1 className={heading()}>
              Every foundational tool that software companies need for
              hyper-scale, backed by open source.
            </h1>
          </div>
          <div className={footer()}>Footer</div>
        </div>
      </div>
      <div className={right()}>
        <HomePageAnimation />
      </div>
    </main>
  )
}
