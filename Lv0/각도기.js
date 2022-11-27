<<<<<<< HEAD
const solution = (angle) => {
  let answer = 0;
  if (0 < angle && angle < 90) {
    answer = 1;
  } else if (angle === 90) {
    answer = 2;
  } else if (90 < angle && angle < 180) {
    answer = 3;
  } else if (angle === 180) {
    answer = 4;
  } else {
    return 0;
  }
  return answer;
};
=======
const solution = (angle) => {
  let answer = 0;
  if (0 < angle && angle < 90) {
    answer = 1;
  } else if (angle === 90) {
    answer = 2;
  } else if (90 < angle && angle < 180) {
    answer = 3;
  } else if (angle === 180) {
    answer = 4;
  } else {
    return 0;
  }
  return answer;
};
>>>>>>> 270ed02d88098b01986b81fc2484cdcb5674f588
