export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

// It constructs a string by interpolating the value of the path variable into the string. For example, if path is 'image.png', the resulting string will be '/assets/image.png'.
