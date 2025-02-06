import {
  ArrowSquareOut,
  CircleWavyQuestion,
  Play,
} from "@phosphor-icons/react";
import { Button } from "../../components/Buttons";
import { GlassCard } from "../../components/Cards";
import { WrapGlobalDownloadButton } from "../Downloads";
import { useAppState } from "../../state";
import cx from "classnames";
import { useCallback, useState } from "react";
import { openLiveDemo } from "../../components/utils";

export function GlassCardRefs(props: any) {
  const { className, onRefMouseEnter, onRefMouseLeave, ...rest } = props;
  return (
    <GlassCard delay={2000} className={cx("d", className)} {...rest}>
      <div className="outliner-list-demo">
        <div className="outliner-list-item">
          <div className="content">
            <span>
              我的笔记{" "}
              <a
                data-ref={"book"}
                onMouseEnter={onRefMouseEnter}
                onMouseLeave={onRefMouseLeave}
                className="ref"
              >
                书 / 《Intertwingled》
              </a>
              :
            </span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

export function GlassCardProfile(props: any) {
  const { className, onRefMouseEnter, onRefMouseLeave, ...rest } = props;
  return (
    <GlassCard
      className={cx("is-card-profile flex mb-2.5 sm:mb-1", className)}
      {...rest}
    >
      <div className="avatar flex items-center">
        <span className="avatar-img">Image</span>
      </div>
      <div className="info flex flex-col px-3 text-logseq-100">
        <strong className="text-2xl font-semibold text-logseq-50">
          杰西卡
        </strong>
        <p className="py-0.5 opacity-80">👥 个人</p>
        <p className="py-0.5 opacity-80">👤 杰西卡·阿尔伯特</p>
      </div>
    </GlassCard>
  );
}

export function GlassCardBook(props: any) {
  const { className, onRefMouseEnter, onRefMouseLeave, ...rest } = props;
  return (
    <GlassCard
      className={cx("is-card-book flex mb-2.5 sm:mb-1", className)}
      {...rest}
    >
      <div className="avatar flex items-center">
        <span className="avatar-img">Image</span>
      </div>
      <div className="info flex flex-col px-3 text-logseq-100">
        <strong className="text-2xl font-semibold text-logseq-50">
          Intertwingled
        </strong>
        <p className="py-0.5 opacity-80">📖 书</p>
        <p className="py-0.5 opacity-80">👤 皮特·莫维尔</p>
      </div>
    </GlassCard>
  );
}

export function GlassCardTodo(props: any) {
  const { className, onRefMouseEnter, onRefMouseLeave, ...rest } = props;
  return (
    <GlassCard delay={500} className={cx("is-card-todo", className)} {...rest}>
      <div className="outliner-list-demo">
        <div className="outliner-list-item">
          <div className="content is-todo">
            <span className="marker">Now</span>
            <span>
              与
              <a
                className={"ref"}
                data-ref={"profile"}
                onMouseLeave={onRefMouseLeave}
                onMouseEnter={onRefMouseEnter}
              >
                👥 Jessica
              </a>
              的谈话
            </span>
          </div>

          {/* children */}
          <div className="subs">
            <div className="outliner-list-item">
              <div className="content">
                <span>
                  她提到她正在阅读:{" "}
                  <a
                    data-ref={"book"}
                    className={"ref"}
                    onMouseLeave={onRefMouseLeave}
                    onMouseEnter={onRefMouseEnter}
                  >
                    📖 书/《Intertwingled》
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

export function HeadShowcase() {
  const appState = useAppState();
  const [activeRef, setActiveRef] = useState("");

  const refMouseEnterHandler = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLAnchorElement;
    setActiveRef(target.dataset.ref || "");
  }, []);

  const refMouseLeaveHandler = useCallback((e: MouseEvent) => {
    setActiveRef("");
  }, []);

  return (
    <div
      className={cx(
        "app-head-showcase",
        activeRef && "active-ref-" + activeRef
      )}
    >
      <div className="inner flex h-full">
        <div className="item-wrap relative flex-1">
          {/* text layer*/}
          <div className="text-1 z-0 w-full flex flex-col tracking-wide pb-[38rem] sm:pb-[32rem]">
            <span className="text-4xl sm:text-6xl text-logseq-50/80">
              将你的笔记相互连接,{" "}
            </span>
            <strong className="text-3xl sm:text-6xl flex">
              从而提升理解的层次。
              <sup className="hidden opacity-80 text-logseq-100 hover:opacity-60 sm:translate-y-6">
                <CircleWavyQuestion size={28} />
              </sup>
            </strong>
          </div>

          {/* image layer */}
          <div className="image-2 z-10 thinker absolute">
            <div className="absolute bottom-12 w-full h-40 bg-gradient-to-t from-logseq-800 via-logseq-800"></div>
          </div>

          {/* cards layer */}
          <div className="cards-3 z-20">
            <div className="r1 mb-3">
              <GlassCardTodo
                onRefMouseEnter={refMouseEnterHandler}
                onRefMouseLeave={refMouseLeaveHandler}
              />
            </div>

            <div className="r2">
              <GlassCardProfile
                delay={1300}
                animation={appState.sm.get() ? "slide-in-from-left" : null}
              />
              {!appState.sm.get() ? <GlassCardBook delay={1300} /> : null}
            </div>

            {appState.sm.get() ? (
              <div className="r2 is-single">
                <GlassCardBook delay={1600} animation={"slide-in-from-right"} />
              </div>
            ) : null}

            <div className="r3 pt-3 sm:px-24">
              <GlassCardRefs
                onRefMouseEnter={refMouseEnterHandler}
                onRefMouseLeave={refMouseLeaveHandler}
              />
            </div>
          </div>

          {/*  action buttons */}
          <div className="relative actions-4 z-30">
            <WrapGlobalDownloadButton className="is-super-button">
              {({ active, leftIconFn, rightIconFn }: any) => {
                const leftIcon = leftIconFn?.({ weight: "bold", size: 18 });
                const rightIcon = rightIconFn?.({ size: 18 });

                return (
                  <Button leftIcon={leftIcon} rightIcon={rightIcon}>
                    下载 {active?.[0]}
                  </Button>
                );
              }}
            </WrapGlobalDownloadButton>

            <Button
              leftIcon={<Play size={18} weight={"duotone"} />}
              rightIcon={<ArrowSquareOut size={18} className={"opacity-70"} />}
              className={"bg-logseq-600"}
              href={"https://demo.logseq.com"}
            >
              在线演示
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
