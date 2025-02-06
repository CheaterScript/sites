import { useEffect, useRef, useState, useCallback } from 'react'
import cx from 'classnames'
import { ArrowSquareOut, CaretDown, DiscordLogo, TwitterLogo } from '@phosphor-icons/react'
import { AnimateInTurnStage } from '../../components/Animations'
import { useAppState } from '../../state'
import { slugify, navigateTabs } from '../../components/utils'

const IconImageRelations = new URL('assets/icon_relations.png', import.meta.url)
const IconImageDailyPlan = new URL('assets/icon_daily_plan.png', import.meta.url)
const IconImageJournals = new URL('assets/icon_journals.png', import.meta.url)
const IconImageDataControl = new URL('assets/icon_data_control.png', import.meta.url)

const showcases = [
  {
    label: '关系',
    iconUrl: IconImageRelations,
    descImgUrl: new URL('./assets/benefit-0.png', import.meta.url),
    refLink: 'https://discord.com/channels/725182569297215569/725188616695054356/1045646531090448436',
    userName: 'oskr',
    refType: 'discord',
    desc: (
      <p>
        优化沟通方式。<span className="opacity-70">掌控你的人际关系、对话和会议。</span>
      </p>),
    feedback: (
      <p>
        <span>“我主要用于工作：记录 </span>日常笔记和会议笔记。这是我找到的最好的任务管理解决方案
        <span> (而且我只使用了其中一小部分功能).”</span>
      </p>
    )
  },
  {
    label: '日常计划',
    iconUrl: IconImageDailyPlan,
    descImgUrl: new URL('./assets/benefit-1.png', import.meta.url),
    refLink: 'https://discord.com/channels/725182569297215569/918889676071374889/1050520429258887320',
    refType: 'discord',
    userName: 'breadchris',
    desc: (
      <p>
        <span>集中注意力, </span>
        减轻压力.
      </p>),
    feedback: (
      <p>
        <span>“我以前讨厌做笔记. </span>
        如果我告诉过去的自己，我不仅会喜欢上记笔记，还会对此上瘾，我是绝对不会相信的。
        <span> Logseq has changed my life 🔥🔥🔥”</span>
      </p>
    )
  },
  {
    label: '日记',
    iconUrl: IconImageJournals,
    descImgUrl: new URL('./assets/benefit-2.png', import.meta.url),
    refLink: 'https://discord.com/channels/725182569297215569/766475028978991104/965786173148627044',
    refType: 'discord',
    userName: 'Kiernan',
    desc: (
      <p>
        更好地了解自己。
      </p>),
    feedback: (
      <p>
        “在使用 Logseq 之前，我从不写日记，但现在我觉得它非常有意义”
      </p>
    )
  },
  {
    label: '数据隐私',
    iconUrl: IconImageDataControl,
    descImgUrl: new URL('./assets/benefit-3.png', import.meta.url),
    refLink: 'https://twitter.com/15777984/status/1522601138738151427',
    userName: '@b05crypto',
    desc: (
      <p>
        <span>在不受限制的情况下完成这一切。</span> <br/>
        且不会牺牲您的隐私。
      </p>),
    feedback: (
      <p>
        <span>“Logseq 记录我生活中的一切</span>
        做得比我用过的任何工具都要好, 包括 Roam，而且数据隐私有保障.”
      </p>
    )
  }
]

export function DailyShowcaseTabs(
  props: { activeShowcase: string, setActiveShowcase: any }
) {
  const { activeShowcase, setActiveShowcase } = props

  return (<div role="tablist" className="tabs flex justify-between space-x-8 px-6">
    {showcases.map(it => {
      const labelId = slugify(it.label)
      return (
        <button className={cx('it flex flex-col flex-1', { active: it.label === activeShowcase })}
             key={it.label}
             role="tab"
             aria-controls={labelId}
             aria-selected={activeShowcase === it.label}
             id={"tab-" + labelId}
             tabIndex={activeShowcase === it.label ? 0 : -1}
             onClick={() => {
               setActiveShowcase(it.label)
             }}
             onKeyDown={navigateTabs}
        >
          <div className="py-6 flex flex-col items-center">
            <span className="icon">
              <img src={it.iconUrl as any}  alt="" />
            </span>
            <strong className="pt-2.5 font-normal text-[20px] opacity-60 tracking-wide">
              {it.label}
            </strong>
          </div>
        </button>
      )
    })}
  </div>)
}

export function DailyShowcaseSelect(
  props: { activeShowcase: string, setActiveShowcase: any }
) {
  const { activeShowcase, setActiveShowcase } = props
  const activeIndex: number = showcases.findIndex(it => it.label === activeShowcase)
  const activeItem: any = showcases[activeIndex]

  return (
    <div className={cx('selects', `index-of-${activeIndex}`)}>
      <div className={'app-form-select-wrap'}>
        <span className="icon">
          <img alt={activeItem.label} src={activeItem.iconUrl}/>
        </span>

        <select className={'app-form-select w-full'}
                onChange={(e) => {
                  setActiveShowcase(
                    e.target.value
                  )
                }}
                value={activeShowcase}
                aria-label="Select your use case"
        >
          {showcases.map(it => {
            return (
              <option
                key={it.label}
                value={it.label}>
                {it.label}
              </option>
            )
          })}
        </select>

        <span className="arrow">
          <CaretDown weight={'bold'}/>
        </span>
      </div>
    </div>
  )
}

export function DailyShowcase() {
  const appState = useAppState()
  const [showcase, setShowcase] = useState(0)
  const [activeShowcase, setActiveShowcase] = useState(showcases[0].label)
  const [sizeCache, setSizeCache] = useState([0, 0])
  const [progress, setProgress] = useState(0)
  const bdRef = useRef<HTMLDivElement>(null)

  const nextShowcase = useCallback(() => {
    const total = showcases.length
    const currentIndex = showcases.findIndex((it) => it.label === activeShowcase)
    let nextIndex = currentIndex + 1
    if (nextIndex >= total) nextIndex = 0
    setActiveShowcase(showcases[nextIndex]?.label)
    setShowcase(nextIndex)
  }, [activeShowcase])

  useEffect(() => {
    setProgress(0)
  }, [activeShowcase])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((progress: number) => {
        let nextProgress = progress + 0.4
        if (nextProgress > 100) {
          nextShowcase()
          nextProgress = 0
        }
        return nextProgress
      })
    }, 60)

    return () => clearInterval(timer)
  }, [activeShowcase])

  useEffect(() => {
    const handler = () => setSizeCache([])
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <div className="app-daily-showcase">
      <AnimateInTurnStage
        ticks={[500, 500]}
        className="flex flex-col sm:justify-center sm:items-center pb-8">
        {(t: Array<string>) => {
          return (
            <>
              <h2
                className={cx('text-2xl sm:text-[36px] sm:leading-10 tracking-wide invisible', t[0] && 'ani-fade-in')}
              >
                <span className="text-logseq-50/80">Logseq 帮助你</span>
                <span> 将日常琐事变为有组织的信息.</span>
              </h2>

              <h1
                className={cx('text-4xl leading-10 sm:py-10 sm:text-6xl py-3 invisible', t[1] && 'ani-slide-in-from-bottom')}>
                <strong>在日常生活中</strong>
                <span className="text-logseq-50/80"> 理清思路:</span>
              </h1>
            </>
          )
        }}
      </AnimateInTurnStage>

      {/* Tabs */}
      {appState.sm.get() ?
        <DailyShowcaseSelect
          activeShowcase={activeShowcase}
          setActiveShowcase={setActiveShowcase}/> :
        <DailyShowcaseTabs
          activeShowcase={activeShowcase}
          setActiveShowcase={setActiveShowcase}/>}


      {/* Panels */}
      <div className="panels" ref={bdRef}>
        {showcases.map(it => {
          if (it.label !== activeShowcase) {
            return null
          }

          const labelId = slugify(it.label)

          return (
            <div className={'panel'} key={it.label} id={labelId} role='tabpanel' aria-labelledby={"tab-" + labelId}>
              <div className="desc">
                <div className="animate-in fade-in">
                  {it.desc}
                </div>
              </div>

              <div className="card sm:flex">
                <div className="l relative animate-in fade-in"
                     style={{
                       width: sizeCache[0] ? (sizeCache[0] + 'px') : 'auto',
                       height: sizeCache[1] ? (sizeCache[1] + 'px') : 'auto'
                     }}
                >
                  <img src={it.descImgUrl as any} alt="image"
                       onLoad={(e: any) => {
                         const { width, height } = e.target
                         !sizeCache?.[0] && setSizeCache([width, height])
                       }}
                       style={{width: "100%", objectFit: "cover"}}
                  />

                  <div className="ft absolute bottom-6 right-6">
                    {/*<FloatGlassButton*/}
                    {/*  onClick={() => {*/}
                    {/*    const src = bdRef.current!.querySelector('img')?.getAttribute('src')!*/}

                    {/*    openLightbox([{ src, width: 1000, height: 596 }])*/}
                    {/*  }}*/}
                    {/*>*/}
                    {/*  <FrameCorners*/}
                    {/*    className={'font-bold cursor-pointer'}*/}
                    {/*    size={26}*/}
                    {/*    weight={'duotone'}*/}
                    {/*  />*/}
                    {/*</FloatGlassButton>*/}
                  </div>
                </div>

                <div className="r">
                  <div className="inner">
                    <div className="t">
                      <div className="progress flex rounded-full bg-gray-700/50 w-full h-[6px] mt-1 overflow-hidden"
                           onClick={nextShowcase}
                      >
                        <span className="inner bg-logseq-100 rounded-full transition-all"
                              style={{
                                width: `${progress}%`
                              }}
                        ></span>
                      </div>
                    </div>

                    <div className="b">
                      <div className="fd">
                        {it.feedback}
                      </div>

                      <div className="ft">
                        <div className={'flex flex-col'}>
                          <strong className="font-normal opacity-60">用户反馈</strong>
                          <span><span className="font-normal opacity-60 pr-2">by</span>{it.userName}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="opacity-60">Via </span>
                          {(it.refType === 'discord') ?
                            (<><DiscordLogo className="mx-2" size={30} weight="duotone"/> <span
                              className="opacity-60">Discord</span></>) :
                            (<><TwitterLogo className="mx-2" size={30} weight="duotone"/> <span
                              className="opacity-60">Twitter</span></>)}
                          <span
                            className="border rounded p-1 border-gray-600 ml-3 bg-gray-500/20 cursor-pointer active:opacity-80">
                            <a target={'_blank'} href={it.refLink} aria-label={`${it.userName}'s comment in ${it.refType}`}>
                              <ArrowSquareOut size={18} weight={'duotone'}/>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
