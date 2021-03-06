import cookie from 'cookie';
import {IncomingMessage} from 'node:http';

export function parseCookies(req: IncomingMessage) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}
