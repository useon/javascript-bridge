const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

module.exports = App;

const app = new App();
app.play();
