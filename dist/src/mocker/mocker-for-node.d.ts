import Mocker from './mocker';
import MockItem from './mock-item';
export default class MockerForNode extends Mocker {
    constructor(proxyServer?: string);
    /**
      * Note: this method is only for a nodejs environment.
      * Use a mock file & add it to global mock data configuration.
      * @param {string} file
      * @param {boolean} returnTags
      */
    use(file: string, returnTags?: boolean): false | Partial<MockItem>;
}
