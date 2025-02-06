import {
  ArrowSquareOut, CloudCheck, DeviceMobile, FileText,
  GithubLogo, Globe, HandWaving, Keyhole, Play,
  PuzzlePiece, ScribbleLoop, Swatches, TwitterLogo, UserCirclePlus
} from '@phosphor-icons/react'
import { Button } from '../../components/Buttons'
import { AppLogoEmbossed, FloatGlassButton, imageProductHuntLogo } from './common'
import { WrapGlobalDownloadButton } from '../Downloads'
import { useAppState, useModalsState } from '../../state'
import { openLiveDemo } from '../../components/utils'
import { Link } from 'react-router-dom'

export function FooterDescCard (props: any) {
  const { icon, title, desc } = props
  return (
    <div className="item pb-4 sm:p-2 flex items-stretch justify-stretch">
      <div className="inner flex flex-1 opacity-90 backdrop-blur-lg">
        <div className="w-[40px] h-[40px] flex items-center justify-center">
          {icon}
        </div>

        <div className="flex-1 pl-2">
          <h2 className="text-sm font-semibold">{title}</h2>
          <h3 className="text-xs pt-1">{desc}</h3>
        </div>
      </div>
    </div>
  )
}

export function FeaturesBoards () {
  return (
    <div className={'app-features-boards'}>
      <div className="board-item hidden sm:block">
        <div className="inner">
          <div className="l info-wrap flex-1">
            <strong><CloudCheck size={38} weight={'duotone'}/></strong>
            <h1>Logseq 同步<sup>BETA</sup></h1>
            <h2>
              <span>在所有设备之间</span> <br/>
              <span className="text-logseq-50/80">保持笔记始终最新。</span>
            </h2>
            <h3 className="hidden sm:block">
              <span
                className="text-logseq-50/80">通过加密文件同步, 你的笔记能够随时备份 </span>
              <span>并在任何设备上安全实时地访问。 </span>
            </h3>
          </div>

          <div className="r img-wrap flex-1 hidden sm:block"></div>
        </div>
      </div>

      <div className="board-item hidden sm:block">
        <div className="inner whiteboard">
          <div className="l img-wrap flex-1 hidden sm:flex"></div>

          <div className="r info-wrap flex-1">
            <strong><ScribbleLoop size={38} weight={'duotone'}/></strong>
            <h1>白板 <sup>BETA</sup></h1>

            <h2>
              <span>这是一块新的画布</span> <br/>
              <span className="text-logseq-50/80">为你的思维而生。</span>
            </h2>

            <h3 className="hidden sm:block">
              <span className="text-logseq-50/80">将知识库中的任何思维，或是新的思维，<br/>
              放置在彼此相邻的地方，在这无限的画布上，</span> <br/>
              <span>以新的方式连接、关联、理解。</span>
            </h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export function FeaturesBoardsDL () {
  const appState = useAppState()

  const itemWhiteboard = (
    <div className="board-item whiteboard flex-1">
      <div className="inner">
        <div className="r info-wrap flex-1">
          <strong><ScribbleLoop size={38} weight={'duotone'}/></strong>
          <h1>Whiteboards <sup>BETA</sup></h1>

          {appState.sm.get() ?
            (
              <h2>
                <span>A new canvas </span> <br/>
                <span className="text-logseq-50/80">for your thoughts.</span>
              </h2>
            ) : (
              <h2>
                <span>A new canvas </span>
                <span className="text-logseq-50/80">for your<br/>thoughts.</span>
              </h2>
            )}
        </div>

      </div>
    </div>
  )

  return (
    <div className={'app-features-boards dl-page hidden sm:block'}>
      <div className="board-item-wrap">

        <div className="board-item file-sync">
          <div className="inner">
            <div className="l info-wrap flex-1">
              <strong><CloudCheck size={38} weight={'duotone'}/></strong>
              <h1>Logseq Sync <sup>BETA</sup></h1>
              <h2>
                <span>Always up-to-date notes</span> <br/>
                <span className="text-logseq-50/80">between all your devices.</span>
              </h2>
            </div>
          </div>
        </div>

        {appState.sm.get() && (itemWhiteboard)}

        <div className="board-item rtc-collaboration">
          <div className="inner">
            <div className="l info-wrap flex-1">
              <strong><UserCirclePlus size={38} weight={'duotone'}/></strong>
              <h1>Real-time collaboration<sup> COMING SOON</sup></h1>
              <h2>
                <span className="text-logseq-50/80">
                  Great knowledge is
                </span> <br/>
                <span>
                  a result of collaboration.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {!appState.sm.get() && (
        <div className="board-item-wrap flex w-full">
          {itemWhiteboard}
        </div>
      )}
    </div>
  )
}

export function LandingFooterDesc (props: {
  downloadsPage?: boolean,
  hideFeaturesSection?: boolean
}) {
  const appState = useAppState()

  return (
    <div className="app-landing-footer-desc">
      {!props.hideFeaturesSection &&
        (<div className="bg-radial from-logseq-800 via-logseq-800/50 to-logseq-800/0">
          {props.downloadsPage ?
            <>
              <h1
                className="text-4xl -mt-[230px] leading-9 tracking-wide pb-2 sm:mt-0 sm:leading-[1em] sm:text-6xl sm:text-center sm:pt-20 sm:pb-15">
                <span className="text-logseq-50/80">Get ready for</span><br/>
                <strong className="font-semibold">knowledge work reimagined.</strong>
              </h1>

              <h2 className="text-lg leading-9 tracking-wide sm:text-[32px] sm:px-60 sm:py-6 sm:text-center">
              <span className="text-logseq-50/80">
                By downloading Logseq, you are embarking on a journey. We are
                constantly trying to make it even more useful for all kinds of
                workflows.
              </span>
                {' '}
                <strong className="font-normal">
                  These exciting features are coming soon:
                </strong>
              </h2>

            </> :
            <>
              <h1
                className="text-4xl -mt-[230px] leading-9 pb-2 sm:mt-0 sm:text-6xl sm:text-center sm:py-10 bg-radial">
                <strong className="font-semibold">一个安全的空间 </strong>
                <span className="text-logseq-50/80">存放你的思维。</span>
              </h1>

              <h2 className="text-lg sm:text-[24px] sm:px-60 sm:text-center">
                <span className="text-logseq-50/80">专为轻松存储你的 </span>
                <strong className="font-normal">兴趣、问题、想法、喜爱的名言、提醒事项、阅读和会议笔记 </strong>
                <span className="text-logseq-50/80">而设计 并且具备面向未来的可持续性:</span>
              </h2>
            </>}
        </div>)}

      {/*  descriptions */}
      {!props.hideFeaturesSection &&
        (props.downloadsPage ?
          null :
          <div className="cards">
            {[
              [<GithubLogo size={34} weight={'duotone'}/>, '开源', '个人使用永久免费'],
              [<Keyhole size={34} weight={'duotone'}/>, '隐私优先', '你永远拥有本地数据'],
              [<DeviceMobile weight={'duotone'} size={34}/>, '移动应用', '支持 iOS 和 Android'],
              [<FileText size={34} weight={'duotone'}/>, 'Markdown 文件', '可以在其他工具中打开你的笔记'],
              [<HandWaving size={34} weight={'duotone'}/>, '强大的社区', (
                <span className="flex space-x-2 items-center">
              <i className="w-[6px] h-[6px] bg-green-600 rounded-2xl"></i>
              <span className="opacity-50">{appState.discord?.approximate_presence_count.get() || '-'} 当前在线人数</span>
            </span>)],
              [<Globe size={34} weight={'duotone'}/>, '本地化', '支持多种语言'],
              [<PuzzlePiece size={34} weight={'duotone'}/>, '150+ 插件', '根据需求扩展功能'],
              [<Swatches size={34} weight={'duotone'}/>, '30+ 主题', '自定义外观和体验'],
            ].map(([icon, title, desc]) => {
              if (typeof desc === 'string') {
                desc = (<span className="opacity-50">{desc}</span>)
              }
              return (
                <FooterDescCard key={title} icon={icon} title={title} desc={desc}/>
              )
            })}
          </div>)}

      {/* features */}
      {
        !props.hideFeaturesSection &&
        (props.downloadsPage ? <FeaturesBoardsDL/> : <FeaturesBoards/>)
      }

      {/* downloads */}
      <div className="actions">
        <h1 className="text-4xl leading-10 sm:leading-normal sm:text-6xl tracking-wide">
          <span className="opacity-70">思绪更快, </span>
          <strong className="font-semibold">思考更清晰!</strong>
        </h1>

        <h2 className="text-lg mt-4 sm:mt-0 sm:text-3xl sm:text-center sm:tracking-wide">
          <strong className="opacity-70 font-normal">通过在 Logseq 中思考和记录,  </strong><br/>
          <span className="">你将对自己的知识更有信心 <br/>
          不再担心忘记任何重要的 </span>
          <strong className="opacity-70 font-normal">事情</strong>.
        </h2>

        <div className="actions-4 sm:flex sm:space-x-4 pt-10 pb-1">
          <WrapGlobalDownloadButton
            className="is-super-button"
          >
            {({ active, leftIconFn, rightIconFn }: any) => {
              const leftIcon = leftIconFn?.({ weight: 'bold', size: 18 })
              const rightIcon = rightIconFn?.({ size: 18 })

              return (
                <Button
                  leftIcon={leftIcon}
                  rightIcon={rightIcon}
                  className={'w-full sm:w-auto'}
                >
                  下载 {active?.[0]}
                </Button>
              )
            }}
          </WrapGlobalDownloadButton>

          <Button
            leftIcon={<Play size={18} weight={'duotone'}/>}
            rightIcon={<ArrowSquareOut size={18} className={'opacity-70'}/>}
            className={'w-full bg-logseq-600 mt-4 sm:w-auto sm:mt-0'}
            href={'https://demo.logseq.com'}
          >
            在线演示
          </Button>
        </div>
      </div>
    </div>
  )
}

export function LandingFooterNav () {
  const appState = useAppState()

  const links = (
    <div className="links flex flex-col justify-center">
      <p className="flex space-x-4 text-xs text-gray-300/90 pb-1">
        <Link to={"/privacy-policy"}>隐私协议</Link>
        <Link to={"/terms"}>用户条款</Link>
        <a href="mailto:hi@logseq.com">联系我们</a>
        <a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=r4rUMf0Wewr789CtIhZvL9RazuOUe58W&authKey=MbT27JUj%2FR0plJYdwR%2F6PWrqyOJVerAOiwdtpyYpGbKSlYyOiB3hufKc264ODySY&noverify=0&group_code=1022112042">QQ群：1022112042</a>
      </p>
      <p className="text-xs opacity-40 py-1">
        © {(new Date()).getFullYear()} Logseq, Inc.
      </p>
    </div>
  )

  return (
    <div className="app-landing-footer-navs">
      <div className="flex flex-1 justify-between">
        <div className="flex space-x-4">
          <AppLogoEmbossed className="w-16 h-16"/>

          {appState.sm.get() ? null : links}
        </div>

        <div className="flex space-x-4 pl-[14px] py-[8px] sm:pr-[14px]">
          <a
            href="https://github.com/logseq/logseq"
            className="glass-btn !px-3"
            aria-label="GitHub (opens a new window)"
            target="_blank"
          >
            <GithubLogo size={26} weight={'duotone'}/>
          </a>

          <a
            href="https://twitter.com/logseq"
            className="glass-btn !px-3"
            aria-label="Twitter (opens a new window)"
            target="_blank"
          >
            <TwitterLogo size={26} weight={'duotone'}/>
          </a>
        </div>
      </div>

      <div className="pt-4 sm:pt-0 sm:flex sm:space-x-4">
        <Button
          leftIcon={<img className="w-10" src={imageProductHuntLogo} alt="image"/>}
          rightIcon={<ArrowSquareOut className="opacity-50"/>}
          className="w-full !py-1 !px-3 bg-transparent border-2 border-logseq-400"
          href="https://www.producthunt.com/products/logseq"
        >
          <span className="opacity-90">
            Review us on ProductHunt
            <span className="sr-only"> (opens a new window)</span>
          </span>
        </Button>
      </div>

      {appState.sm.get() ? links : null}
    </div>
  )
}
