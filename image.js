function filterImages(category) {
  const cards = document.querySelectorAll('.image-card');
  cards.forEach(card => {
    const match = category === 'all' || card.dataset.category === category;
    card.style.display = match ? 'block' : 'none';
  });
}
