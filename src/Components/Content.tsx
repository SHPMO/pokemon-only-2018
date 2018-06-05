import {
  createRef,
  DetailedHTMLProps,
  HTMLAttributes,
  MouseEventHandler,
  RefObject, TouchEventHandler,
  UIEventHandler,
  WheelEventHandler
} from 'react'
import * as React from 'react'

import './Content.css'

type ContentProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLElement> & {
  onLeft: boolean,
  contentTitle: JSX.Element
}

type ScrollbarProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLElement> & {
  value: number,
  onBarScroll: (value: number) => any
}

class Content extends React.Component<ContentProps, {
  scrollValue: number
}> {
  public static Header = class extends React.Component {
    public render() {
      return (<div className="content-header">
        <div>{this.props.children}</div>
      </div>)
    }
  }

  public static Scrollbar = class extends React.Component<ScrollbarProps, { value: number }> {
    public static getDerivedStateFromProps(props: ScrollbarProps, currentState: { value: number }) {
      if (props.value !== currentState.value) {
        return {value: props.value}
      }
      return null
    }

    private readonly track: RefObject<HTMLDivElement>
    private readonly thumb: RefObject<HTMLDivElement>
    private readonly onMouseDownEvent: MouseEventHandler<HTMLDivElement>
    private readonly onTouchStartEvent: TouchEventHandler<HTMLDivElement>
    private dragging: boolean
    private touching: number | null

    constructor(props: ScrollbarProps) {
      super(props)
      this.track = createRef()
      this.thumb = createRef()
      this.onMouseDownEvent = this.onMouseDown.bind(this)
      this.onTouchStartEvent = this.onTouchStart.bind(this)
      this.dragging = false
      this.touching = null
      this.state = {
        value: props.value
      }
      window.onmousemove = this.onMouseMove.bind(this)
      window.ontouchmove = this.onTouchMove.bind(this)
      window.onmouseup = this.onMouseUp.bind(this)
      window.ontouchend = this.onTouchEnd.bind(this)
    }

    public render() {
      let top = 0
      if (this.track.current != null && this.thumb.current != null) {
        const track = this.track.current as HTMLDivElement
        const thumb = this.thumb.current as HTMLDivElement
        top = (track.offsetHeight - thumb.offsetHeight) * this.state.value / 100
      }
      return (<div className="content-scrollbar" onWheel={this.props.onWheel}>
        <div className="content-scrollbar-track" ref={this.track} onMouseDown={this.onMouseDownEvent}
             onTouchStart={this.onTouchStartEvent}>
          <div className="content-scrollbar-track-background"/>
          <div className="content-scrollbar-thumb" ref={this.thumb} style={{top: top + 'px'}}/>
        </div>
      </div>)
    }

    private scrollTo(top: number) {
      if (top < 0) {
        top = 0
      }
      const maxTop = (this.track.current as HTMLDivElement).offsetHeight -
        (this.thumb.current as HTMLDivElement).offsetHeight
      if (top > maxTop) {
        top = maxTop
      }
      const value = top / maxTop * 100
      this.props.onBarScroll(value)
      this.setState({
        value
      })
    }

    private onMouseDown(e: MouseEvent) {
      if (e.button !== 0) {
        return
      }
      this.dragging = true
      const track = this.track.current as HTMLDivElement
      const thumb = this.thumb.current as HTMLDivElement
      const top = e.clientY - thumb.offsetHeight / 2 - track.offsetTop
      this.scrollTo(top)
    }

    private onMouseMove(e: MouseEvent) {
      if (!this.dragging) {
        return
      }
      const track = this.track.current as HTMLDivElement
      const thumb = this.thumb.current as HTMLDivElement
      const top = e.clientY - thumb.offsetHeight / 2 - track.offsetTop
      this.scrollTo(top)
    }

    private onMouseUp(e: MouseEvent) {
      if (this.dragging) {
        this.dragging = false
      }
    }

    private onTouchStart(e: TouchEvent) {
      if (this.touching !== null) {
        return
      }
      const touch = e.targetTouches[0]
      this.touching = touch.identifier
      const track = this.track.current as HTMLDivElement
      const thumb = this.thumb.current as HTMLDivElement
      const top = touch.clientY - thumb.offsetHeight / 2 - track.offsetTop
      this.scrollTo(top)
    }

    private onTouchMove(e: TouchEvent) {
      if (this.touching === null) {
        return
      }
      let touch = null
      let i = 0
      while (i < e.touches.length) {
        if (e.touches[i].identifier === this.touching) {
          touch = e.touches[i]
          break
        }
        ++i
      }
      if (touch === null) {
        this.touching = null
        return
      }
      const track = this.track.current as HTMLDivElement
      const thumb = this.thumb.current as HTMLDivElement
      const top = touch.clientY - thumb.offsetHeight / 2 - track.offsetTop
      this.scrollTo(top)
    }

    private onTouchEnd(e: TouchEvent) {
      if (this.touching === null) {
        return
      }
      let end = true
      let i = 0
      while (i < e.touches.length) {
        if (e.touches[i].identifier === this.touching) {
          end = false
          break
        }
        ++i
      }
      if (end) {
        this.touching = null
      }
    }
  }

  private readonly onScrollEvent: UIEventHandler<HTMLDivElement>
  private readonly onBarScrollEvent: (value: number) => any
  private readonly onBarWheelEvent: WheelEventHandler<HTMLDivElement>
  private readonly content: RefObject<HTMLDivElement>

  constructor(props: ContentProps) {
    super(props)
    this.state = {
      scrollValue: 0
    }
    this.onScrollEvent = this.onScroll.bind(this)
    this.onBarScrollEvent = this.onBarScroll.bind(this)
    this.onBarWheelEvent = this.onBarWheel.bind(this)
    this.content = createRef()
  }

  public render() {
    return (
      <div className={'content ' + this.props.className}>
        <div className={'content-title ' + (this.props.onLeft ? 'content-title-left' : 'content-title-right')}>
          {this.props.contentTitle}
        </div>
        <div className="content-container">
          <Content.Scrollbar value={this.state.scrollValue} onBarScroll={this.onBarScrollEvent}
                             onWheel={this.onBarWheelEvent}/>
          <div className="content-content" onScroll={this.onScrollEvent} ref={this.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  private onScroll(e: Event) {
    const target = e.target as HTMLDivElement
    this.setState({
      scrollValue: target.scrollTop / (target.scrollHeight - target.offsetHeight) * 100
    })
  }

  private onBarScroll(value: number) {
    const content = this.content.current as HTMLDivElement
    content.scrollTo({top: value / 100 * (content.scrollHeight - content.offsetHeight)})
  }

  private onBarWheel(e: WheelEvent) {
    const content = this.content.current as HTMLDivElement
    content.scrollBy({top: e.deltaY})
  }
}

export default Content
