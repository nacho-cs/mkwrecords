function minutesToSeconds(m) {
  const [minutes, seconds] = m.split(":").map(parseFloat);

  return (minutes * 60 + seconds).toFixed(3);
}

console.log(minutesToSeconds("2:49.093"))