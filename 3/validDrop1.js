function isValidDrop(x, y, width, height, areaId) {
  if (x >= 0 && x <= 50 && y >= 0 && y <= 50) {
    return true;
  } else if (
    x >= 100 &&
    x <= 150 &&
    y >= 0 &&
    y <= 50 &&
    width <= 200 &&
    height === 100
  ) {
    return true;
  } else if (x >= 200 && x <= 250 && y >= 0 && y <= 50 && width === 100) {
    return true;
  } else if (
    x >= 0 &&
    x <= 50 &&
    y >= 100 &&
    y <= 150 &&
    width === 100 &&
    height <= 200
  ) {
    return true;
  } else if (
    x >= 200 &&
    x <= 250 &&
    y >= 100 &&
    y <= 150 &&
    width === 100 &&
    height <= 200
  ) {
    return true;
  } else if (
    x >= 0 &&
    x <= 50 &&
    y >= 200 &&
    y <= 250 &&
    width >= 200 &&
    height === 100
  ) {
    return true;
  } else if (
    x >= 100 &&
    x <= 150 &&
    y >= 200 &&
    y <= 250 &&
    width <= 200 &&
    height === 100
  ) {
    return true;
  } else if (
    x >= 200 &&
    x <= 250 &&
    y >= 200 &&
    y <= 250 &&
    width === 100 &&
    height === 100
  ) {
    return true;
  }

  Message();
  return false;
}
