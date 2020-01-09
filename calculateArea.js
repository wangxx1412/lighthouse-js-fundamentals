function calculateRectangleArea(len, wid) {
  if (len < 0 || wid < 0) {
    return undefined;
  }
  return len * wid;
}

function calculateTriangleArea(len, wid) {
  if (len < 0 || wid < 0) {
    return undefined;
  }
  return (len * wid) / 2;
}

function calculateCircleArea(rad) {
  if (rad < 0) {
    return undefined;
  }
  return Math.PI * (rad * rad);
}
