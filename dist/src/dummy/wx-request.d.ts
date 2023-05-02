import { WxRequestOpts } from '../types';
export default function dummyWxRequest(wxReqOpts: WxRequestOpts): {
    abort(): void;
};
