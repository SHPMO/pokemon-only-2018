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
  contentClassName?: string,
  contentTitle: JSX.Element,
}

type ContentState = {
  scrollValue: number,
  selectable: boolean,
  showScrollbar: boolean
}

type ScrollbarProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLElement> & {
  value: number,
  onBarScroll: (value: number) => void,
  onBarScrollState: (start: boolean) => void,
  show: boolean
}

type ScrollbarState = {
  value: number
}

class Content extends React.Component<ContentProps, ContentState> {
  public static Header = class extends React.Component<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLElement>> {
    public render() {
      return (<div className={'content-header ' + (this.props.className ? this.props.className : '')}>
        <div>{this.props.children}</div>
      </div>)
    }
  }

  public static Scrollbar = class extends React.Component<ScrollbarProps, ScrollbarState> {
    public static getDerivedStateFromProps(props: ScrollbarProps, currentState: ScrollbarState) {
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
        value: props.value,
      }
    }

    public componentDidMount() {
      window.addEventListener('mousemove', this.onMouseMove.bind(this))
      window.addEventListener('touchmove', this.onTouchMove.bind(this))
      window.addEventListener('mouseup', this.onMouseUp.bind(this))
      window.addEventListener('touchend', this.onTouchEnd.bind(this))
    }

    public componentWillUnmount() {
      window.removeEventListener('mousemove', this.onMouseMove.bind(this))
      window.removeEventListener('touchmove', this.onTouchMove.bind(this))
      window.removeEventListener('mouseup', this.onMouseUp.bind(this))
      window.removeEventListener('touchend', this.onTouchEnd.bind(this))
    }

    public render() {
      let top = 0
      if (this.track.current != null && this.thumb.current != null) {
        const track = this.track.current as HTMLDivElement
        const thumb = this.thumb.current as HTMLDivElement
        top = (track.offsetHeight - thumb.offsetHeight) * this.state.value / 100
      }
      return (
        <div className="content-scrollbar" onWheel={this.props.onWheel}
             style={{display: this.props.show ? 'block' : 'none'}}>
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
      if (!this.props.show) {
        return
      }
      if (e.button !== 0) {
        return
      }
      this.dragging = true
      this.props.onBarScrollState(true)
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
        this.props.onBarScrollState(false)
      }
    }

    private onTouchStart(e: TouchEvent) {
      if (!this.props.show) {
        return
      }
      if (this.touching !== null) {
        return
      }
      const touch = e.targetTouches[0]
      this.touching = touch.identifier
      this.props.onBarScrollState(true)
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
        this.props.onBarScrollState(false)
      }
    }
  }

  private readonly onScrollEvent: UIEventHandler<HTMLDivElement>
  private readonly onBarScrollEvent: (value: number) => void
  private readonly onBarScrollStateEvent: (start: boolean) => void
  private readonly onBarWheelEvent: WheelEventHandler<HTMLDivElement>
  private readonly content: RefObject<HTMLDivElement>

  constructor(props: ContentProps) {
    super(props)
    this.state = {
      scrollValue: 0,
      selectable: true,
      showScrollbar: false
    }
    this.onScrollEvent = this.onScroll.bind(this)
    this.onBarScrollEvent = this.onBarScroll.bind(this)
    this.onBarScrollStateEvent = this.onBarScrollState.bind(this)
    this.onBarWheelEvent = this.onBarWheel.bind(this)
    this.content = createRef()
  }

  public componentDidMount() {
    this.onResize()
    window.addEventListener('resize', this.onResize.bind(this))
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this))
  }

  public render() {
    return (
      <div className={'content ' + this.props.className}>
        <div className={'content-title ' + (this.props.onLeft ? 'content-title-left' : 'content-title-right')}>
          {this.props.contentTitle}
        </div>
        <div
          className={'content-container ' + (this.props.onLeft ? 'content-container-left' : 'content-container-right')
          + (this.state.showScrollbar ? '' : ' content-no-scrollbar')}>
          <Content.Scrollbar value={this.state.scrollValue} onBarScroll={this.onBarScrollEvent}
                             onBarScrollState={this.onBarScrollStateEvent}
                             onWheel={this.onBarWheelEvent} show={this.state.showScrollbar}/>
          <div className={'content-content ' + (this.props.contentClassName ? this.props.contentClassName : '') + (
            this.state.selectable ? '' : ' content-content-noselect'
          )}
               onScroll={this.onScrollEvent}
               ref={this.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  private onResize() {
    if (this.content.current === null) {
      return
    }
    const content = this.content.current as HTMLDivElement
    const show = Math.abs(content.scrollHeight - content.offsetHeight) > 2
    if (show !== this.state.showScrollbar) {
      this.setState({
        showScrollbar: show
      })
    }
  }

  private onScroll(e: Event) {
    const target = e.target as HTMLDivElement
    this.setState({
      scrollValue: target.scrollTop / (target.scrollHeight - target.offsetHeight) * 100
    })
  }

  private onBarScrollState(start: boolean) {
    this.setState({
      selectable: !start
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
