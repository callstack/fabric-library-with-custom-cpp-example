export function getRandomColor() {
    return [Math.random(), Math.random(), Math.random()]
      .map((val) =>
        Math.round(val * 255)
          .toString(16)
          .padStart(2, '0')
      )
      .join('')
      .padStart(7, '#');
  }