function isValidDrop(x, y, width, height, areaId) {
  if (x >= 0 && x <= 50 && y >= 0 && y <= 50 && width <= 400) {
    if (height === 300 && width === 200) {
      Message();
      return false;
    }
    return true;
  } else if (
    x >= 100 &&
    x <= 150 &&
    y >= 0 &&
    y <= 50 &&
    width <= 300 &&
    height <= 200
  ) {
    return true;
  } else if (
    x >= 200 &&
    x <= 250 &&
    y >= 0 &&
    y <= 50 &&
    width <= 200 &&
    height <= 200
  ) {
    return true;
  } else if (
    x >= 300 &&
    x <= 350 &&
    y >= 0 &&
    y <= 50 &&
    width <= 100 &&
    height <= 200
  ) {
    return true;
  } else if (x >= 500 && x <= 550 && y >= 0 && y <= 50 && width === 100) {
    return true;
  } else if (x >= 0 && x <= 50 && y >= 100 && y <= 150 && height <= 500) {
    return true;
  } else if (
    x >= 100 &&
    x <= 150 &&
    y >= 100 &&
    y <= 150 &&
    width <= 500 &&
    height === 100
  ) {
    return true;
  } else if (
    x >= 200 &&
    x <= 250 &&
    y >= 100 &&
    y <= 150 &&
    width <= 400 &&
    height === 100
  ) {
    return true;
  } else if (
    x >= 300 &&
    x <= 350 &&
    y >= 100 &&
    y <= 150 &&
    width <= 300 &&
    height <= 500
  ) {
    return true;
  } else if (
    x >= 400 &&
    x <= 450 &&
    y >= 100 &&
    y <= 150 &&
    width <= 200 &&
    height <= 300
  ) {
    return true;
  } else if (
    x >= 0 &&
    x <= 50 &&
    y >= 200 &&
    y <= 250 &&
    width === 100 &&
    height <= 400
  ) {
    return true;
  } else if (
    x >= 300 &&
    x <= 350 &&
    y >= 200 &&
    y <= 250 &&
    width <= 300 &&
    height <= 400
  ) {
    if (height === 300 && width === 200) {
      Message();
      return false;
    }
    return true;
  } else if (
    x >= 400 &&
    x <= 450 &&
    y >= 200 &&
    y <= 250 &&
    width <= 200 &&
    height <= 200
  ) {
    return true;
  } else if (
    x >= 500 &&
    x <= 550 &&
    y >= 200 &&
    y <= 250 &&
    width <= 100 &&
    height <= 400
  ) {
    return true;
  } else if (
    x >= 0 &&
    x <= 50 &&
    y >= 300 &&
    y <= 350 &&
    width <= 100 &&
    height <= 300
  ) {
    return true;
  } else if (
    x >= 200 &&
    x <= 250 &&
    y >= 300 &&
    y <= 350 &&
    width <= 400 &&
    height <= 300
  ) {
    if (height === 200 && width === 300) {
      Message();
      return false;
    }
    return true;
  } else if (
    x >= 300 &&
    x <= 350 &&
    y >= 300 &&
    y <= 350 &&
    width <= 300 &&
    height <= 300
  ) {
    if (
      (height === 200 && width === 300) ||
      (height === 300 && width === 200) ||
      (height === 200 && width === 200)
    ) {
      Message();
      return false;
    }
    return true;
  } else if (
    x >= 400 &&
    x <= 450 &&
    y >= 300 &&
    y <= 350 &&
    width <= 200 &&
    height <= 100
  ) {
    return true;
  } else if (
    x >= 500 &&
    x <= 550 &&
    y >= 300 &&
    y <= 350 &&
    width <= 100 &&
    height <= 300
  ) {
    return true;
  } else if (
    x >= 0 &&
    x <= 50 &&
    y >= 400 &&
    y <= 450 &&
    width === 100 &&
    height <= 200
  ) {
    return true;
  } else if (
    x >= 200 &&
    x <= 250 &&
    y >= 400 &&
    y <= 450 &&
    height <= 200 &&
    width <= 200
  ) {
    return true;
  } else if (
    x >= 300 &&
    x <= 350 &&
    y >= 400 &&
    y <= 450 &&
    height <= 200 &&
    width <= 100
  ) {
    return true;
  } else if (
    x >= 500 &&
    x <= 550 &&
    y >= 400 &&
    y <= 450 &&
    height <= 200 &&
    width <= 100
  ) {
    return true;
  } else if (x >= 0 && x <= 50 && y >= 500 && y <= 550 && height <= 100) {
    return true;
  } else if (
    x >= 100 &&
    x <= 150 &&
    y >= 500 &&
    y <= 550 &&
    height <= 100 &&
    width <= 500
  ) {
    return true;
  } else if (
    x >= 200 &&
    x <= 250 &&
    y >= 500 &&
    y <= 550 &&
    height <= 100 &&
    width <= 400
  ) {
    return true;
  } else if (
    x >= 300 &&
    x <= 350 &&
    y >= 500 &&
    y <= 550 &&
    height <= 100 &&
    width <= 300
  ) {
    return true;
  } else if (
    x >= 400 &&
    x <= 450 &&
    y >= 500 &&
    y <= 550 &&
    height <= 100 &&
    width <= 200
  ) {
    return true;
  } else if (
    x >= 500 &&
    x <= 550 &&
    y >= 500 &&
    y <= 550 &&
    height <= 100 &&
    width <= 100
  ) {
    return true;
  }

  Message();
  return false;
}
