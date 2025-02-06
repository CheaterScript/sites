import {
  fullBgImageB, fullBgImageBMobile,
  HeadShowcase, LandingFooterDesc,
  LandingFooterNav, promiseImages,
  TutorialShowcase,
  TutorialTips,
} from './Landing'
import { AnimateInTurnStage } from '../components/Animations'
import cx from 'classnames'
import { DailyShowcase } from './Landing/DailyShowcase'
import { useAppState } from '../state'

export function HomePage () {
  const appState = useAppState()

  // useEffect(() => {
  //   setTimeout(() => {
  //     // @ts-ignore
  //     particlesJS.load('particles-bg', './particlesjs-config.json', () => {
  //     })
  //   }, 1000)
  // }, [])

  return (
    <div className={'app-page min-h-screen'}>
      <div className="page-inner">
        <HeadShowcase/>
        <TutorialShowcase/>
        <TutorialTips/>
      </div>

      <div className="page-inner-full-wrap a">
        <div className="page-inner">
          {appState.sm.get() ?
            <img src={fullBgImageBMobile} className="w-full" alt="image"/> :
            <img src={fullBgImageB} className="w-full" alt="image"/>
          }

          {/* text slogan  */}
          <AnimateInTurnStage
            ticks={[500, 600]}
            className="text-slogan">
            {(t: Array<any>) => {
              return (
                <>
                  <h1
                    className={cx(
                      'text-4xl sm:text-[60px] sm:flex sm:flex-col justify-center sm:text-center pb-6 invisible',
                      t[0] && 'ani-slide-in-from-bottom')}
                  >
                    <span
                      className="text-logseq-50/80">你是否感到不堪重负</span>
                    <strong className="opacity-90">总是害怕遗忘自己的想法？</strong>
                  </h1>

                  <h2
                    className={
                      cx(
                        'sm:flex flex-col justify-center sm:text-center text-2xl tracking-wide invisible',
                        t[1] && 'ani-fade-in')}>
                    <span className="text-logseq-50/80">每天你都被信息淹没。</span>
                    <span className="text-logseq-50/80">你零散的笔记会导致在需要时缺少上下文</span>
                    <strong className="font-normal">
                      这会让未来的你陷入困境。
                    </strong>
                  </h2>
                </>
              )
            }}

          </AnimateInTurnStage>
        </div>
      </div>

      <div className="page-inner">
        <DailyShowcase/>
      </div>

      <div className="page-inner-full-wrap b relative">
        {/* particles background */}
        {/*<div id="particles-bg" className="particles-bg"></div>*/}

        <div className="page-inner footer-desc">
          <LandingFooterDesc/>
        </div>

        <div className="page-inner footer-nav">
          <div className="page-inner">
            <LandingFooterNav/>
          </div>
        </div>
      </div>
    </div>
  )
}
