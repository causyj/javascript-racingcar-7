import { Console } from '@woowacourse/mission-utils';

class RaceView {
  async getCarName() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    return input;
  }

  async getAttemptCount() {
    const input = await Console.readLineAsync('\n시도할 횟수는 몇 회인가요?\n');
    return input;
  }
}
export default RaceView;
