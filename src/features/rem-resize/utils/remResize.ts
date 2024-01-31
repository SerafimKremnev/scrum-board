interface Params {
  // Стандартный размер шрифта в пикселях, который задан для тега html, для удобства это обычно 10px. По умолчанию 10px
  defaultFontSize?: number;
  // Значение ширины экрана в котором масштаб будет 100%, как в макете
  startScaleWidth: number;
  // Значение ширины экрана до которого масштабирование будет увеличиваться
  endScaleTopWidth: number;
  // Значение ширины экрана до которого масштабирование будет уменьшаться
  endScaleBottomWidth: number;
}

export const remResize = ({
  defaultFontSize = 10,
  startScaleWidth,
  endScaleTopWidth,
  endScaleBottomWidth,
}: Params) => {
  const widthWidth = document.documentElement.clientWidth;

  const htmlEl = document.querySelector('html');

  if (widthWidth > endScaleTopWidth && htmlEl) {
    const diff = startScaleWidth - endScaleTopWidth;
    const percent = diff / (startScaleWidth / 100) / 100;
    htmlEl.style.fontSize = defaultFontSize - defaultFontSize * percent + 'px';
  } else if (widthWidth > startScaleWidth && htmlEl) {
    const diff = startScaleWidth - widthWidth;
    const percent = diff / (startScaleWidth / 100) / 100;
    htmlEl.style.fontSize = defaultFontSize - defaultFontSize * percent + 'px';
  } else if (
    widthWidth < startScaleWidth &&
    widthWidth >= endScaleBottomWidth &&
    htmlEl
  ) {
    const diff = startScaleWidth - widthWidth;
    const percent = diff / (startScaleWidth / 100) / 100;
    htmlEl.style.fontSize = defaultFontSize - defaultFontSize * percent + 'px';
  } else if (htmlEl) {
    htmlEl.style.fontSize = 10 + 'px';
  }
};
