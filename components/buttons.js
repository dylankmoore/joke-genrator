import renderToDom from '../utils/renderToDom';

// buttons
const jokeBtn = () => {
  const domString = '<button class="btn btn-primary" id="joke-btn">Get a joke</button>';
  renderToDom('#joke-btn', domString);
};

const punchlineBtn = () => {
  const domString = '<button class="btn btn-primary" id="joke-btn">Get the punchline</button>';
  renderToDom('#punchline-btn', domString);
};

const resetBtn = () => {
  const domString = '<button class="btn btn-danger" id="joke-btn">Get Another Joke</button>';
  renderToDom('#reset-btn', domString);
};

export { jokeBtn, punchlineBtn, resetBtn };
