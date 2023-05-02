export default class Dummy {
    /**
     * Initialize a dummy 'fetch' object if 'fetch' is not existent in the context.
     */
    static initDummyFetchForUnitTest(): void;
    /**
     * Initialize a dummy 'wx.request' object if 'wx.request' is not existent in the context.
     */
    static initDummyWxRequestForUnitTest(): void;
    /**
     * Initialize a dummy 'XMLHttpRequest' object if 'XMLHttpRequest' is not existent in the context.
     */
    static initDummyXHRForUnitTest(): void;
}
