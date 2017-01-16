import Text from './Text';
import { calculateDimensions } from '../utils/images';
const { Image: BaseImage } = window;

import type { ImageStyle, TextStyle } from '../types/styles';
import type { Dimension } from '../types/images';

const defaultStyle = {
  fontSize: '1px',
  color: 'transparent'
};

export default class Image extends Text {
  children = ['+'];
  image: BaseImage;
  url: string;
  dimension: Dimension;
  requestedStyle: ImageStyle = {};
  style: TextStyle = defaultStyle;

  constructor(konsul): void {
    super(konsul);

    this.image = new BaseImage();
    this.image.addEventListener('load', ({ target }) => {
      const { width, height } = target;
      this.dimension = { width, height };

      if (width !== this.requestedStyle.width || height !== this.requestedStyle.height) {
        this.updateStyle();
      }
    });
  }

  setSource(url: string): void {
    this.url = url;
    this.image.src = this.url;

    if (this.style !== defaultStyle) {
      this.updateStyle();
    }
  }

  setStyle(style: ImageStyle = {}): void {
    this.requestedStyle = style ? style : {};
    this.updateStyle();
  }

  updateStyle() {
    const { width, height }: Dimension = calculateDimensions(this.requestedStyle, this.dimension);
    const textStyle: TextStyle = {
      ...this.requestedStyle,
      ...defaultStyle,
      padding: `${Math.floor(height / 2)}px ${Math.floor(width / 2)}px`,
      lineHeight: `${height}px`,
      background: `url('${this.url}')`,
      backgroundSize: `${width}px ${height}px`,
    };

    this.konsul.emit('shouldRender');

    super.setStyle(textStyle);
  }
}