/**
 * Flattens an object
 * @param obj - Object to be flattened
 * @returns Flattened object
 */
function flattenObject(obj: any) {
  var toReturn = {};

  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;

    if (typeof obj[i] == "object") {
      var flatObject = flattenObject(obj[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[(i + "." + x) as keyof typeof flatObject] =
          flatObject[x as keyof typeof flatObject];
      }
    } else {
      (toReturn as any)[i as keyof typeof obj] = obj[i as keyof typeof obj];
    }
  }
  return toReturn;
}

export { flattenObject };
