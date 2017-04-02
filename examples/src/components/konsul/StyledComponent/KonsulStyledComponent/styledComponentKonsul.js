import css from 'styled-components/lib/constructors/css';

import styledNativeComponent from './StyledKonsulComponent';
import ThemeProvider from 'styled-components/lib/models/ThemeProvider';
import withTheme from 'styled-components/lib/hoc/withTheme';
import type { Interpolation, Target } from 'styled-components/lib/types';

const styled = (tag: Target) =>
  (strings: Array<string>, ...interpolations: Array<Interpolation>) =>
    styledNativeComponent(tag, css(strings, ...interpolations));

const aliases = ['text', 'image'];

aliases.forEach(alias => Object.defineProperty(styled, alias, {
  enumerable: true,
  configurable: false,
  get() {
    return styled(alias);
  },
}));

export { css, ThemeProvider, withTheme };
export default styled;