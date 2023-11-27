// share on whatsapp
export const shareOnWhatsapp = (recipeData) => {
  const recipeURL = window.location.href;
  const text = `Check out this amazing recipe: ${recipeData.title} - ${recipeURL}`;
  const encodedText = encodeURIComponent(text);
  const whatsappURL = `https://wa.me/?text=${encodedText}`;
  window.open(whatsappURL, "_blank");
};
