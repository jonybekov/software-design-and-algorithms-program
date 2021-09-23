import { Point } from './Point';
import { Shape } from './Shape';
import { roundSide } from './utils';

export class Triangle extends Shape {
  constructor(a: Point, b: Point, c: Point) 
  constructor(a: Point, b: Point, c: Point, color?: string, filled?: boolean) {
    super([a,b,c], color, filled);
  }

  getType(): string {
    const [a, b, c] = this.getSides();
    const sideA = roundSide(a), sideB = roundSide(b), sideC = roundSide(c)

    if (sideA === sideB && sideB === sideC) 
      return 'equilateral triangle';

    if (sideA == sideB || sideB == sideC || sideC == sideA)
      return 'isosceles triangle';

    return 'scalene triangle';
  }

  toString(): string {
    const pointsStr = this.points
      .map((point, index) => `v${index + 1}=${point.toString()}`)
      .join(',');

    return `Triangle[${pointsStr}]`;
  }
}
