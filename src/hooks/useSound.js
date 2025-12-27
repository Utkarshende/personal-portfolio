export const useHoverSound = () => {
  const playSound = () => {
    const audio = new Audio('/hover.mp3');
    audio.volume = 0.2; // Keep it very subtle
    audio.play().catch(() => {}); // Catch prevents errors if browser blocks auto-play
  };

  return playSound;
};