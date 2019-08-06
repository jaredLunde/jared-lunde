import {css, getHoverQuery, defaultColors, Box} from 'curls'
import {Link, NavLink} from 'react-router-dom'
import * as icons from '~/ui/icons'


export const avatar = {
  scale: {
    sm: '6',
    md: '8.5',
    lg: '12.125'
  },

  defaultProps: {
    size: 'sm',
    br: '3'
  }
}

export const box = {
  kinds: {
    card: {
      flex: true,
      column: true,
      grow: true,
      p: '4@desktop 3@phone',
      bg: 'white',
      br: '1',
      sh: '12',
      ov: 'hidden'
    },
    row: {
      flex: true,
      w: '100%',
      wrap: true
    },
    li: {
      as: 'li',
      m: 'l3',
      css: css`list-style: circle;`
    },
    blurbs: {
      flex: true,
      w: '100%',
      wrap: true,
      justify: 'between',
      align: 'start',
      p: 'x2'
      // bg: 'lightestGrey',
      // br: 3,
      // p: '4@desktop 3@phone b0'
    }
  }
}

export const button = {
  defaultProps: {
    bw: '1',
    br: '1',
    size: 'sm',
    css: css`
      color: currentColor;
      border-color: currentColor;
      font-size: 1rem;
      font-weight: 900;
      transition: transform 120ms ease-in-out;
    `
  },

  kinds: {
    solid: {
      bg: 'primary',
      bw: '1',
      bc: 'primary',
      css: css`
        color: ${defaultColors.lightestGrey}; 
      `
    }
  },

  getHoverClass: (t, p) => getHoverQuery(
    css`&:hover { 
      opacity: 1.0!important;
      transform: translate3d(-2px, -4px, 0); 
      ${p.kind}; ${p.kind !== 'solid' ? 'background-color: rgba(255, 255, 255, 0.24);' : ''} 
    }`,
    css`&:hover { transform: translate3d(0, 0, 0); }`,
  ),

  getActiveClass: () => css`&:active { transform: translateY(0); }`,
}

export const colors = {
  ...defaultColors,
  background: defaultColors.lightestGrey,
  accent: defaultColors.translucentLight,
  primaryText: defaultColors.darkGrey,
  secondaryText: defaultColors.lightestGrey,
  impactText: 'rgba(40, 36, 42, 1)',
  accentText: defaultColors.grey,
  primary: defaultColors.red,
  translucentDark: 'rgba(40, 36, 42, 0.9)',
  dark: 'rgba(40, 36, 42, 1)',
  primaryLink: defaultColors.red
}

export const content = {
  width: 1024,
  defaultProps: {
    p: '4'
  },
  kinds: {
    section: {
      as: 'section',
      p: '4 t0'
    }
  }
}

export const icon = {
  icons
}

export const link = {
  component: Link,
  navComponent: NavLink,
  kinds: {
    a: {
      color: 'impactText',
      css: css`
        padding-bottom: 0.01em;
        border-bottom: 1px solid currentColor;
      `
    },
  }
}

export const popover = {
  kinds: {
    tooltip: {
      bg: 'black',
      p: 'x2 y1',
      br: '1',
      sh: '4',
      'aria-hidden': true,
      css: css`
        font-weight: 900;
        margin-top: -3px;
        pointer-events: none;
        font-size: 0.875rem;
        color: ${colors.secondaryText};
      `
    }
  }
}

export const text = {
  scale: {
    xs: 1,
    sm: 1.125,
    md: 1.333,
    lg: 1.67,
    xl: 2.67,
  },
  families: {
    primary: '"Brand", -apple-system, "Helvetica Neue", sans-serif'
  },
  kinds: {
    h1: {
      as: 'h1',
      size: 'xl@desktop lg@phone',
      ultraHeavy: true,
      m: 'b2'
    },
    h2: {
      as: 'h2',
      size: 'lg',
      ultraHeavy: true,
      m: 'b3',
      color: 'impactText'
    },
    h3: {
      as: 'h3',
      size: 'md',
      light: true,
      m: 'b2',
      color: 'impactText'
    },
    a: {
      as: 'a',
      css: css`
        color: ${colors.impactText};
        padding-bottom: 1px;
        border-bottom: 1px solid ${colors.impactText};
      `
    },
    p: {
      as: 'p',
      m: 'b3'
    },
    hero: {
      as: 'span',
      d: 'block',
      light: true,
      lh: '1.1',
      center: '@phone',
      left: '@desktop',
      justify: 'center@phone start@desktop',
      color: 'secondaryText',
      size: 'md@phone lg@tablet'
    }
  }
}