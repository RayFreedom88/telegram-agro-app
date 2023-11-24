import type { CSSProp } from 'styled-components'

declare module 'react' {
  interface DOMAttributes {
    css?: CSSProp
  }
}