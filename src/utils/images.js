import type { Dimension } from '../types/images';

export function calculateDimensions (requestedDimension: Dimension, actualDimension?: Dimension) {
  let width = 0;
  let height = 0;

  if (requestedDimension.width && requestedDimension.height) {
    width = requestedDimension.width;
    height = requestedDimension.height;
  } else if (actualDimension) {
    if (requestedDimension.width) {
      width = requestedDimension.width;
      height = actualDimension.height / actualDimension.width * requestedDimension.width;
    } else if (requestedDimension.height) {
      width = actualDimension.width / actualDimension.height * requestedDimension.height;
      height = requestedDimension.height;
    } else {
      width = actualDimension.width;
      height = actualDimension.height;
    }
  }

  return { width, height };
}
