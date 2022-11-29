function aspectRatio(width, height) {
  for(let i = 2; i < width || i < height; i++) {
    if(height % i === 0 && width % i === 0) {
      height /= i
      width /= i
      i--
    }
  }
  
  return `${width}:${height}`
}
