const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const action = (entry) => {
  const container = entry.target;
  const imagen = container.firstChild;
  const url = imagen.dataset.src;
  imagen.src = url;
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(action);
});

export const registerImage = (image) => {
  observer.observe(image);
};
