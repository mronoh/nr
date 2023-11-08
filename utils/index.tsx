export const calculateTimeLeft = () => {
  const targetDate = new Date('2023-12-01 00:00:00'); // Set your target date here
  const currentDate = new Date();
  const difference = targetDate.getTime() - currentDate.getTime();

  if (difference <= 0) {
    return 'Countdown expired';
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return `${days}Days ${hours}Hr ${minutes}Min ${seconds}Sec`;
}