export const useHoverSound = () => {
  const playSound = () => {
    const audio = new Audio('/hover.mp3');
    audio.volume = 0.1; 
    audio.play().catch(() => {}); 
  };
  return playSound;
};