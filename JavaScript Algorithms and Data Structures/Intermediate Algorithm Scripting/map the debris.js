#task
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

#solution
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  // Calculate the orbital period for each object in the array
  const result = arr.map(function(obj) {
    const avgAlt = obj.avgAlt;
    const semiMajorAxis = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM));
    // Return an object with the calculated orbital period
    return { name: obj.name, orbitalPeriod: orbitalPeriod };
  });
  return result;
}

