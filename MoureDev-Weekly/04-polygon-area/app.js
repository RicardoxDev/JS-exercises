const polygonArea = (polygon) => {
  let area = 0
  
  const Square = (l) => area = l*l
  const Triangle = (b, h) => area = (b*h)/2
  const Rectangle = (b, h) => area = b*h
  
  return eval(polygon)
}
