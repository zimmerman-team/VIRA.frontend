// projects.spec.ts

import http from 'http';
import ioBack from 'socket.io';
import io from 'socket.io-client';

let socket: SocketIOClient.Socket;
let httpServer: http.Server;
let httpServerAddr: string | { address: string; family: string; port: number };
let ioServer: ioBack.Server;

/**
 * Setup WS & HTTP servers
 */
beforeAll(done => {
  httpServer = http.createServer().listen();
  httpServerAddr = httpServer.address();
  ioServer = ioBack(httpServer);
  done();
});

/**
 *  Cleanup WS & HTTP servers
 */
afterAll(done => {
  ioServer.close();
  httpServer.close();
  done();
});

/**
 * Run before each test
 */
beforeEach(done => {
  // Setup
  // Do not hardcode server port and address, square brackets are used for IPv6
  socket = io.connect(
    `http://[${httpServerAddr.address}]:${httpServerAddr.port}`,
    {
      reconnectionDelay: 0,
      forceNew: true,
      transports: ['websocket'],
    }
  );
  socket.on('connect', () => {
    done();
  });
});

/**
 * Run after each test
 */
afterEach(done => {
  // Cleanup
  if (socket.connected) {
    socket.disconnect();
  }
  done();
});

describe('Testing projects API', () => {
  test('tests fetching all projects from mongodb', async () => {
    socket.emit('allProject', {}, (res: any) => {
      expect(res.data).toEqual(expect.arrayContaining([]));
    });
  });
});
