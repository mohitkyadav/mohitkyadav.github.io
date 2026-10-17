// Scope's page: the live demo, plus small touches like copy buttons and scroll reveals.
//
// The demo is a pretend recording of an app. Like Scope's editor, it works out every frame
// from the time alone: where the cursor is, how far the view is zoomed in and where the
// camera points. The zoom uses the same maths as Scope (AutoZoom.swift and ZoomCamera.swift).

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* Small touches */

const nav = document.querySelector('.nav')
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40)
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

// Sections fade up as they come into view
const revealer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('is-in')
    revealer.unobserve(entry.target)
  })
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
document.querySelectorAll('.reveal').forEach((element) => revealer.observe(element))

// Copy buttons
document.querySelectorAll('[data-copy]').forEach((button) => {
  const label = button.querySelector('[data-copy-label]')
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy)
      button.classList.add('is-copied')
      label.textContent = 'Copied'
    } catch {
      label.textContent = 'Select it'
    }
    setTimeout(() => {
      button.classList.remove('is-copied')
      label.textContent = 'Copy'
    }, 1800)
  })
})

// A soft light follows the pointer over the feature cards
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    card.style.setProperty('--my', `${event.clientY - rect.top}px`)
  })
})

// The latest version, from GitHub. The page is fine without it.
fetch('https://api.github.com/repos/mohitkyadav/scope/releases/latest')
  .then((response) => (response.ok ? response.json() : null))
  .then((release) => {
    if (release?.tag_name) document.querySelector('[data-version]').textContent = release.tag_name
  })
  .catch(() => {})

// Frame formats card: the frame takes on each shape in turn
{
  const frame = document.querySelector('[data-format]')
  const label = document.querySelector('[data-format-label]')
  const formats = [['16:9', 200, 112], ['1:1', 150, 150], ['4:5', 136, 170], ['9:16', 104, 184]]
  let index = 0
  const next = () => {
    const [name, width, height] = formats[index % formats.length]
    frame.style.width = `${width}px`
    frame.style.height = `${height}px`
    label.textContent = name
    index += 1
  }
  next()
  if (!reducedMotion) setInterval(next, 2000)
}

/* The demo */

const stage = document.querySelector('[data-stage]')
const scene = document.querySelector('[data-scene]')
const windowElement = document.querySelector('[data-window]')
const cursor = document.querySelector('[data-cursor]')
const ripple = document.querySelector('[data-ripple]')
const spotlight = document.querySelector('[data-spotlight]')
const bubble = document.querySelector('[data-bubble]')
const caption = document.querySelector('[data-caption]')
const captionText = document.querySelector('[data-caption-text]')

const ui = {
  analytics: document.querySelector('#nav-analytics'),
  overview: document.querySelector('[data-nav="overview"]'),
  heading: document.querySelector('[data-heading]'),
  search: document.querySelector('#search'),
  query: document.querySelector('[data-query]'),
  results: document.querySelector('[data-results]'),
  publish: document.querySelector('#publish'),
  toast: document.querySelector('[data-toast]'),
  chartTitle: document.querySelector('[data-chart-title]'),
  bars: document.querySelector('[data-bars]'),
}

// The story, in seconds. Targets are elements (their centre) or points as fractions of the stage.
const DURATION = 15
const RATE = 60
const QUERY = 'Q3 launch video'

const moves = [
  // [time, target]: the cursor rests between moves to the same target
  [0, { x: 0.6, y: 0.66 }],
  [0.5, { x: 0.6, y: 0.66 }],
  [1.35, '#nav-analytics'],
  [3.6, '#nav-analytics'],
  [4.5, '#search'],
  [8.7, '#search'],
  [9.7, '#publish'],
  [11.6, '#publish'],
  [12.4, { x: 0.6, y: 0.66 }],
  [DURATION, { x: 0.6, y: 0.66 }],
]
const clicks = [
  { t: 1.5, target: '#nav-analytics' },
  { t: 4.65, target: '#search' },
  { t: 9.85, target: '#publish' },
]
const typing = { start: 5.1, end: 7.7 }
const zooms = [
  { start: 0.7, end: 3.7 },
  // Typing and the Publish click are close together, so Scope makes them one zoom that pans.
  { start: 3.85, end: 12.4 },
]
const captions = [
  [0, 'Auto zoom on every click'],
  [3.9, 'Zooms in on typing, too'],
  [8.7, 'The camera glides after the cursor'],
  [12.4, 'Zooms out when you’re done'],
  [13.4, 'The cursor fades while it’s still'],
]
const backgrounds = [
  ['Aurora', ['#4a38c7', '#14b5bd']],
  ['Sunrise', ['#fa6b6b', '#fcbf5c']],
  ['Lagoon', ['#4594fa', '#61e3bd']],
  ['Orchid', ['#de4fb8', '#704ff2']],
  ['Sage', ['#dededc', '#dfe9d9', '#e0e2c4']],
]
const barsOverview = [38, 52, 45, 60, 56, 72, 64, 70, 82, 76, 88, 94]
const barsAnalytics = [62, 48, 70, 54, 80, 66, 58, 86, 72, 92, 68, 98]

const options = {
  level: 2,
  easing: 'spring',
  spotlight: 'zooms',
  camera: true,
}

let layout = null
let frames = null
let time = 0
let playing = !reducedMotion
let lastTimestamp = null
let inView = true

// Easing curves, as in Scope's ZoomEasing
const easings = {
  spring: (x) => (x >= 1 ? 1 : Math.min((1 - (1 + 6.64 * x) * Math.exp(-6.64 * x)) / 0.99, 1)),
  smooth: (x) => x * x * x * (x * (6 * x - 15) + 10),
  snappy: (x) => 1 - Math.pow(1 - x, 5),
}
const TRANSITION = 1.1

const clamp = (value, low, high) => Math.min(Math.max(value, low), high)
const smoothstep = (x) => x * x * (3 - 2 * x)

/** Where everything is on the stage, in pixels, with the zoom taken off. */
function measure() {
  const saved = scene.style.transform
  scene.style.transform = 'none'
  const stageRect = stage.getBoundingClientRect()
  const centre = (element) => {
    const rect = element.getBoundingClientRect()
    return { x: rect.left - stageRect.left + rect.width / 2, y: rect.top - stageRect.top + rect.height / 2 }
  }
  const box = (element) => {
    const rect = element.getBoundingClientRect()
    return { left: rect.left - stageRect.left, top: rect.top - stageRect.top, right: rect.right - stageRect.left, bottom: rect.bottom - stageRect.top }
  }
  const windowRect = windowElement.getBoundingClientRect()
  const result = {
    width: stageRect.width,
    height: stageRect.height,
    window: { x: windowRect.left - stageRect.left, y: windowRect.top - stageRect.top },
    targets: {
      '#nav-analytics': centre(ui.analytics),
      '#search': { ...centre(ui.search), x: box(ui.search).left + ui.search.offsetWidth * 0.36 },
      '#publish': centre(ui.publish),
    },
    // Where the cursor changes shape, like the real one
    hands: [...document.querySelectorAll('.app__nav'), ui.publish].map(box),
    beams: [box(ui.search)],
    cursorSize: cursor.offsetWidth,
  }
  scene.style.transform = saved
  return result
}

function point(target) {
  if (typeof target === 'string') return layout.targets[target]
  return { x: target.x * layout.width, y: target.y * layout.height }
}

/** The cursor at `t`: it travels between targets on a gentle arc, easing in and out. */
function cursorAt(t) {
  for (let index = 0; index < moves.length - 1; index += 1) {
    const [t0, from] = moves[index]
    const [t1, to] = moves[index + 1]
    if (t > t1) continue
    const a = point(from)
    const b = point(to)
    const span = t1 - t0
    const u = span > 0 ? clamp((t - t0) / span, 0, 1) : 1
    const e = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2
    // Bend the path a little to one side, as a hand does
    const bend = 0.12
    const control = { x: (a.x + b.x) / 2 - (b.y - a.y) * bend, y: (a.y + b.y) / 2 + (b.x - a.x) * bend }
    const mt = 1 - e
    return {
      x: mt * mt * a.x + 2 * mt * e * control.x + e * e * b.x,
      y: mt * mt * a.y + 2 * mt * e * control.y + e * e * b.y,
    }
  }
  return point(moves[moves.length - 1][1])
}

/** How far a zoom is in at `t`, from 0 to 1, as AutoZoom.amount does. */
function zoomAmount(zoom, t) {
  if (t < zoom.start || t > zoom.end) return 0
  const transition = Math.max(Math.min(TRANSITION, (zoom.end - zoom.start) / 2), 0.01)
  const ease = easings[options.easing]
  const zoomedIn = ease(clamp((t - zoom.start) / transition, 0, 1))
  const zoomedOut = t > zoom.end - transition ? ease(clamp((t - (zoom.end - transition)) / transition, 0, 1)) : 0
  return zoomedIn * (1 - zoomedOut)
}

/**
 * Works out every frame ahead of time: the cursor, and where the camera points during each zoom.
 * The camera starts on the zoom's first click, holds still while the cursor moves around the
 * middle of the view, and glides after it on a critically damped spring near the edges.
 */
function precompute() {
  const count = Math.ceil(DURATION * RATE) + 1
  const cursorPoints = []
  for (let index = 0; index < count; index += 1) cursorPoints.push(cursorAt(index / RATE))

  const visible = 1 / options.level
  const half = visible / 2
  const keepInside = (p) => ({ x: clamp(p.x, half, 1 - half), y: clamp(p.y, half, 1 - half) })
  const fraction = (p) => ({ x: p.x / layout.width, y: p.y / layout.height })

  const tracks = zooms.map((zoom) => {
    const first = clicks.find((click) => click.t >= zoom.start && click.t <= Math.min(zoom.start + 1.5, zoom.end))
    let camera = keepInside(fraction(first ? point(first.target) : cursorPoints[Math.round(zoom.start * RATE)]))
    let target = { ...camera }
    const velocity = { x: 0, y: 0 }
    const points = []
    const step = 1 / RATE
    const stiffness = 6
    for (let t = zoom.start; t <= zoom.end + step; t += step) {
      const c = fraction(cursorPoints[clamp(Math.round(t * RATE), 0, count - 1)])
      const reach = visible * 0.25
      if (c.x - target.x > reach) target.x = c.x - reach
      if (target.x - c.x > reach) target.x = c.x + reach
      if (c.y - target.y > reach) target.y = c.y - reach
      if (target.y - c.y > reach) target.y = c.y + reach
      target = keepInside(target)
      velocity.x += (stiffness * stiffness * (target.x - camera.x) - 2 * stiffness * velocity.x) * step
      velocity.y += (stiffness * stiffness * (target.y - camera.y) - 2 * stiffness * velocity.y) * step
      camera = keepInside({ x: camera.x + velocity.x * step, y: camera.y + velocity.y * step })
      points.push(camera)
    }
    return points
  })

  // The cursor fades out after standing still for 1.6 s and comes straight back when it moves
  const visibility = []
  let lastMoved = 0
  let shown = 1
  for (let index = 0; index < count; index += 1) {
    const previous = cursorPoints[Math.max(index - 1, 0)]
    const current = cursorPoints[index]
    const t = index / RATE
    if (Math.hypot(current.x - previous.x, current.y - previous.y) > 0.3 || clicks.some((click) => Math.abs(click.t - t) < 0.15)) lastMoved = t
    const goal = t - lastMoved < 1.6 ? 1 : 0
    shown = goal > shown ? Math.min(shown + 1 / (0.12 * RATE), 1) : Math.max(shown - 1 / (0.4 * RATE), 0)
    visibility.push(shown)
  }

  frames = { cursor: cursorPoints, tracks, visibility }
}

function shapeAt(p) {
  const inside = (box) => p.x >= box.left && p.x <= box.right && p.y >= box.top && p.y <= box.bottom
  if (layout.beams.some(inside)) return 'beam'
  if (layout.hands.some(inside)) return 'hand'
  return 'arrow'
}

function render(t) {
  const index = clamp(Math.round(t * RATE), 0, frames.cursor.length - 1)
  const W = layout.width
  const H = layout.height

  // The zoom: the scene grows around one fixed point, so the move is one smooth line
  let amount = 0
  let focus = { x: 0.5, y: 0.5 }
  zooms.forEach((zoom, zoomIndex) => {
    const a = zoomAmount(zoom, t)
    if (a > amount) {
      amount = a
      const track = frames.tracks[zoomIndex]
      focus = track[clamp(Math.round((t - zoom.start) * RATE), 0, track.length - 1)]
    }
  })
  const level = options.level
  const scale = 1 + (level - 1) * amount
  if (amount > 0.0005) {
    const viewW = W / level
    const viewH = H / level
    const cx = clamp(focus.x * W, viewW / 2, W - viewW / 2)
    const cy = clamp(focus.y * H, viewH / 2, H - viewH / 2)
    const anchorX = (level * cx - W / 2) / (level - 1)
    const anchorY = (level * cy - H / 2) / (level - 1)
    scene.style.transform = `translate(${anchorX * (1 - scale)}px, ${anchorY * (1 - scale)}px) scale(${scale})`
  } else {
    scene.style.transform = 'none'
  }

  // The cursor, slightly smaller while the button is down
  const p = frames.cursor[index]
  const shape = shapeAt(p)
  const pressed = clicks.some((click) => t >= click.t && t <= click.t + 0.14)
  const size = layout.cursorSize
  const hot = shape === 'arrow' ? { x: 0.21, y: 0.1 } : shape === 'hand' ? { x: 0.38, y: 0.12 } : { x: 0.5, y: 0.5 }
  cursor.dataset.shape = shape
  cursor.style.transform = `translate(${p.x - hot.x * size}px, ${p.y - hot.y * size}px) scale(${pressed ? 0.85 : 1})`
  cursor.style.transformOrigin = `${hot.x * 100}% ${hot.y * 100}%`
  cursor.style.opacity = smoothstep(frames.visibility[index])

  // A ripple for half a second after each click
  const click = clicks.find((c) => t >= c.t && t <= c.t + 0.5)
  if (click) {
    const progress = (t - click.t) / 0.5
    const eased = 1 - Math.pow(1 - progress, 3)
    const at = point(click.target)
    ripple.style.transform = `translate(${at.x}px, ${at.y}px) scale(${0.25 + eased * 0.9})`
    ripple.style.opacity = (1 - progress) * 0.9
  } else {
    ripple.style.opacity = 0
  }

  // The spotlight keeps the same size on screen however far the view is zoomed in
  const strength = options.spotlight === 'always' ? 1 : options.spotlight === 'zooms' ? amount : 0
  spotlight.style.opacity = strength
  if (strength > 0) {
    const radius = (0.15 * Math.min(W, H)) / scale
    spotlight.style.setProperty('--sx', `${p.x - layout.window.x}px`)
    spotlight.style.setProperty('--sy', `${p.y - layout.window.y}px`)
    spotlight.style.setProperty('--r0', `${radius * 0.7}px`)
    spotlight.style.setProperty('--r1', `${radius}px`)
  }

  // The app reacting to the clicks and typing
  const analyticsOn = t >= clicks[0].t + 0.05
  ui.analytics.classList.toggle('is-active', analyticsOn)
  ui.overview.classList.toggle('is-active', !analyticsOn)
  ui.heading.textContent = analyticsOn ? 'Analytics' : 'Overview'
  ui.chartTitle.textContent = analyticsOn ? 'Sessions by week' : 'Weekly visits'
  setBars(analyticsOn ? barsAnalytics : barsOverview)

  const focused = t >= clicks[1].t + 0.05 && t < clicks[2].t
  const typed = Math.floor(clamp((t - typing.start) / (typing.end - typing.start), 0, 1) * QUERY.length)
  ui.search.classList.toggle('is-focused', focused)
  ui.search.classList.toggle('has-text', typed > 0)
  ui.query.textContent = QUERY.slice(0, typed)
  ui.results.classList.toggle('is-showing', focused && typed === QUERY.length)

  ui.publish.classList.toggle('is-pressed', t >= clicks[2].t && t <= clicks[2].t + 0.16)
  const published = t > clicks[2].t + 0.16 && t < 14.4
  ui.publish.classList.toggle('is-done', published)
  ui.publish.textContent = published ? 'Published' : 'Publish'
  ui.toast.classList.toggle('is-showing', t > clicks[2].t + 0.3 && t < 12.8)

  setCaption(captions.filter(([start]) => t >= start).pop()[1])
  renderTimeline(t)
}

let currentBars = null
function setBars(values) {
  if (currentBars === values) return
  currentBars = values
  ;[...ui.bars.children].forEach((bar, index) => bar.style.setProperty('--h', `${values[index]}%`))
}

let currentCaption = null
let captionTimer = null
function setCaption(text) {
  if (text === currentCaption) return
  currentCaption = text
  caption.classList.add('is-changing')
  clearTimeout(captionTimer)
  captionTimer = setTimeout(() => {
    captionText.textContent = text
    caption.classList.remove('is-changing')
  }, 220)
}

/* The demo's timeline */

const track = document.querySelector('[data-track]')
const head = document.querySelector('[data-head]')
const timeLabel = document.querySelector('[data-time]')
const playButton = document.querySelector('[data-play]')

function buildTimeline() {
  const marks = document.querySelector('[data-marks]')
  const zoomRow = document.querySelector('[data-zoom-row]')
  const percent = (t) => `${(t / DURATION) * 100}%`
  marks.innerHTML = ''
  zoomRow.innerHTML = ''
  const typingBar = document.createElement('span')
  typingBar.className = 'timeline__typing'
  typingBar.style.left = percent(typing.start)
  typingBar.style.width = percent(typing.end - typing.start)
  marks.append(typingBar)
  clicks.forEach((click) => {
    const dot = document.createElement('span')
    dot.className = 'timeline__dot'
    dot.style.left = percent(click.t)
    marks.append(dot)
  })
  zooms.forEach((zoom) => {
    const pill = document.createElement('span')
    pill.className = 'timeline__zoom'
    pill.style.left = percent(zoom.start)
    pill.style.width = percent(zoom.end - zoom.start)
    pill.textContent = `⌕ ${options.level}×`
    zoomRow.append(pill)
  })
}

function renderTimeline(t) {
  head.style.left = `${(t / DURATION) * 100}%`
  timeLabel.textContent = `0:${String(Math.floor(t)).padStart(2, '0')}`
  track.setAttribute('aria-valuenow', Math.round((t / DURATION) * 100))
}

function seekFromPointer(event) {
  const rect = track.getBoundingClientRect()
  time = clamp((event.clientX - rect.left) / rect.width, 0, 1) * (DURATION - 0.001)
  render(time)
}

track.addEventListener('pointerdown', (event) => {
  track.setPointerCapture(event.pointerId)
  seekFromPointer(event)
  const move = (moveEvent) => seekFromPointer(moveEvent)
  const up = () => {
    track.removeEventListener('pointermove', move)
    track.removeEventListener('pointerup', up)
  }
  track.addEventListener('pointermove', move)
  track.addEventListener('pointerup', up)
})

track.addEventListener('keydown', (event) => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
  event.preventDefault()
  time = clamp(time + (event.key === 'ArrowRight' ? 0.5 : -0.5), 0, DURATION - 0.001)
  render(time)
})

function setPlaying(value) {
  playing = value
  playButton.classList.toggle('is-paused', !playing)
  playButton.setAttribute('aria-label', playing ? 'Pause' : 'Play')
  lastTimestamp = null
}
playButton.addEventListener('click', () => setPlaying(!playing))

/* Controls */

function segmented(selector, apply) {
  const group = document.querySelector(selector)
  group.addEventListener('click', (event) => {
    const button = event.target.closest('button')
    if (!button) return
    group.querySelectorAll('button').forEach((other) => other.classList.toggle('is-on', other === button))
    apply(button.dataset.value)
    render(time)
  })
}

segmented('[data-level]', (value) => {
  options.level = Number(value)
  precompute()
  buildTimeline()
})
segmented('[data-easing]', (value) => {
  options.easing = value
})
segmented('[data-spotlight-mode]', (value) => {
  options.spotlight = value
})
segmented('[data-camera]', (value) => {
  options.camera = value === 'on'
  bubble.classList.toggle('is-hidden', !options.camera)
})

const swatches = document.querySelector('[data-swatches]')
const backgroundLayer = document.querySelector('[data-bg]')
const backgroundNext = document.querySelector('[data-bg-next]')
const gradient = (colors) => `linear-gradient(135deg, ${colors.join(', ')})`
backgrounds.forEach(([name, colors], index) => {
  const swatch = document.createElement('button')
  swatch.type = 'button'
  swatch.className = `swatch${index === 0 ? ' is-on' : ''}`
  swatch.style.background = gradient(colors)
  swatch.setAttribute('aria-label', `${name} background`)
  swatch.title = name
  swatch.addEventListener('click', () => {
    swatches.querySelectorAll('.swatch').forEach((other) => other.classList.toggle('is-on', other === swatch))
    // Fade the new gradient in over the old one, then make it the base
    backgroundNext.style.setProperty('--gradient', gradient(colors))
    backgroundNext.classList.add('is-showing')
    setTimeout(() => {
      backgroundLayer.style.setProperty('--gradient', gradient(colors))
      backgroundNext.classList.remove('is-showing')
    }, 620)
  })
  swatches.append(swatch)
})
backgroundLayer.style.setProperty('--gradient', gradient(backgrounds[0][1]))

/* Running it */

function setUp() {
  layout = measure()
  precompute()
  render(time)
}

function tick(timestamp) {
  if (playing && inView && layout) {
    if (lastTimestamp !== null) time = (time + Math.min((timestamp - lastTimestamp) / 1000, 0.1)) % DURATION
    lastTimestamp = timestamp
    render(time)
  } else {
    lastTimestamp = null
  }
  requestAnimationFrame(tick)
}

ui.bars.innerHTML = barsOverview.map((value, index) => `<span style="--h:${value}%;--d:${index * 0.03}s"></span>`).join('')
currentBars = barsOverview
buildTimeline()

new ResizeObserver(() => setUp()).observe(stage)
new IntersectionObserver((entries) => {
  inView = entries[0].isIntersecting
}).observe(stage)

if (reducedMotion) {
  // A still moment that shows the zoom, with Play to watch it move
  time = 6.6
  setPlaying(false)
}
document.fonts.ready.then(setUp)
setUp()
requestAnimationFrame(tick)
