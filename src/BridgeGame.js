/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  upper = [];
  lower = [];
  move(chooseBlock, rightBlock) {
    if (chooseBlock === rightBlock) {
      this.passData(chooseBlock);
      return [true, this.upper, this.lower];
    }
    if (chooseBlock !== rightBlock) {
      this.failData(chooseBlock);
      return [false, this.upper, this.lower];
    }
  }
  passData(chooseBlock) {
    if (chooseBlock === 'U') {
      this.upper.push('O');
      this.lower.push(' ');
    }
    if (chooseBlock === 'D') {
      this.upper.push(' ');
      this.lower.push('O');
    }
  }
  failData(chooseBlock) {
    if (chooseBlock === 'U') {
      this.upper.push('X');
      this.lower.push(' ');
    }
    if (chooseBlock === 'D') {
      this.upper.push(' ');
      this.lower.push('X');
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
