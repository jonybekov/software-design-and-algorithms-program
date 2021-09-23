import { Point } from './Point';

export const getShapeMessage = (color: string, isFilled: boolean) => {
  const notText = isFilled ? '' : 'not ';

  return `A Shape with color of ${color} and ${notText}filled.`;
};

export const pointsToText = (points: Point[]) => {
  return points.map((point) => point.toString()).join(', ');
};

export const roundSide = (side:number) => Math.round(side * 1000) / 1000 
