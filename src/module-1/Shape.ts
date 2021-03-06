import { Point } from './Point';
import { getShapeMessage, pointsToText } from './utils';

export abstract class Shape {
  abstract getType(): string;
  protected color: string;
  protected isFilled: boolean;
  public points: Point[]


  constructor(
    points: Point[],
    color?: string,
    isFilled?: boolean
  ) 
  constructor(
    points: Point[],
    color = 'green',
    isFilled = true
  ) {
    this.points = points;
    this.color = color;
    this.isFilled = isFilled; 

    if (points.length < 3) {
      throw Error('Cannot create shape with 2 points');
    }
  }

  toString(): string {
    if (this.points && this.color) {
      const message = getShapeMessage(this.color, this.isFilled);
      const pointsStr = pointsToText(this.points);

      return message + ' Points: ' + pointsStr + '.';
    }
  }

  getSides(): number[] {
    return this.points.reduce((acc, point, index) => {
      const nextPoint =
        index > this.points.length - 1
          ? this.points[0]
          : this.points[index + 1];

      return [...acc, point.distance(nextPoint)];
    }, []);
  }

  getPerimeter() {
    return this.getSides().reduce((total, side) => total + side, 0);
  }
}
