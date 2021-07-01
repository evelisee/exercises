export const hello = () => "hello";

export const pingPong = (value) => {
  const multipleOfTwo = value % 2 === 0;
  const multipleOfThree = value % 3 === 0;

  if (multipleOfTwo && multipleOfThree) {
    return "ping-pong";
  } else if (multipleOfTwo) {
    return "ping";
  } else if (multipleOfThree) {
    return "pong";
  }

  return "-";
};

export const isValidNumber = (value) => {
  if (typeof value === "number") {
    return true;
  }
  throw Error("Is not a valid number");
};

export const makeMeAPromise = (value) => {
  return Promise.resolve(value);
};

export const brokeThePromise = (value) => {
  return Promise.reject(value);
};

export const shouldIMakeDeployToday = () => {
  // Não vale mockar o Math.random
  const responses = [false, null, 0, undefined];
  return responses[Math.floor(Math.random() * responses.length)];
};

export const shouldIMakeBugToday = () => {
  // Não vale mockar o Math.random
  const responses = [true, 1, "Yes"];
  return responses[Math.floor(Math.random() * responses.length)];
};

export const getArrayWithNItems = (n) => {
  // Não vale mockar o Math.random
  return Array.from({ length: n }, (_, i) => Math.random());
};

export const callMeLater = (callback) => {
  // Não vale mockar o setTimeout
  setTimeout(callback, 500);
};

export const callPingOrCallPong = (value, ping, pong) => {
  const multipleOfTwo = value % 2 === 0;

  if (multipleOfTwo) {
    ping();
  } else {
    pong();
  }
};

export const callPingOrCallPongAndReturn = (value, ping, pong) => {
  const multipleOfTwo = value % 2 === 0;
  let result;

  if (multipleOfTwo) {
    result = ping();
  } else {
    result = pong();
  }

  return result;
};

export const sortMyArrayOfNumbers = (array) => {
  return array.sort((a, b) => a - b);
};

export const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const createLoremIpsum = (text) => {
  // Vale mockar o shuffleArray mas tem bônus se fizer 1 teste sem mock
  const textPieces = shuffleArray([text, "Biritis", "Cacildis"]);

  return `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    ${textPieces[0]} ac dolor vel ex tristique ornare non posuere odio.
    ${textPieces[1]} non dictum neque.
    ${textPieces[2]} molestie nec nulla eu feugiat.
    Nunc nec faucibus quam, in dictum mi.
  `;
};
