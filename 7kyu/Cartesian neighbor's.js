/*
Description:

A Cartesian coordinate system is a coordinate system that specifies each point uniquely in a plane by a pair of numerical coordinates, which are the signed distances to the point from two fixed perpendicular directed lines, measured in the same unit of length.

The сoordinates of a point in the plane are written as (x,y). Each point in a coordinate system has eight neighboring points. Provided that the distance between points = 1.

It is necessary to write a function that takes a coordinate on the x-axis and y-axis and returns a list of all the neighboring points. The list must be sorted in ascending order by the x coordinate.
*/

function cartesianNeighbor(x, y) {
  let res = [];

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      res.push([x - 1 + i, y - 1 + j]);

  return res.filter(v => v + '' != [x, y] + '');
}