{
  id: 'gZ_YdXv9NYeoY014AAAA',
  server:
   Server {
     clients: { gZ_YdXv9NYeoY014AAAA: [Circular] },
     clientsCount: 1,
     wsEngine: undefined,
     pingTimeout: 60000,
     pingInterval: 25000,
     upgradeTimeout: 10000,
     maxHttpBufferSize: 100000000,
     transports: [ 'polling', 'websocket' ],
     allowUpgrades: true,
     allowRequest: undefined,
     cookie: 'io',
     cookiePath: '/',
     cookieHttpOnly: true,
     perMessageDeflate: { threshold: 1024 },
     httpCompression: { threshold: 1024 },
     ws:
      WebSocketServer {
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        options: [Object],
        path: null,
        clients: [] },
     _events: { connection: [Function] },
     _eventsCount: 1 },
  upgrading: false,
  upgraded: false,
  readyState: 'open',
  writeBuffer: [],
  packetsFn: [],
  sentCallbackFn: [],
  cleanupFn: [ [Function], [Function] ],
  request:
   IncomingMessage {
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: null,
        ended: false,
        endEmitted: false,
        reading: false,
        sync: true,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events: {},
     _eventsCount: 0,
     _maxListeners: undefined,
     socket:
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        _bytesDispatched: 324,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 3200,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Object],
        _peername: [Object] },
     connection:
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        _bytesDispatched: 324,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 3200,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Object],
        _peername: [Object] },
     httpVersionMajor: 1,
     httpVersionMinor: 1,
     httpVersion: '1.1',
     complete: false,
     headers:
      { 'user-agent': 'node-XMLHttpRequest',
        accept: '*/*',
        host: 'localhost:4200',
        connection: 'close' },
     rawHeaders:
      [ 'User-Agent',
        'node-XMLHttpRequest',
        'Accept',
        '*/*',
        'Host',
        'localhost:4200',
        'Connection',
        'close' ],
     trailers: {},
     rawTrailers: [],
     upgrade: false,
     url: '/engine.io/?EIO=3&transport=polling&t=LcybvXM&b64=1',
     method: 'GET',
     statusCode: null,
     statusMessage: null,
     client:
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        _bytesDispatched: 324,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 3200,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Object],
        _peername: [Object] },
     _consuming: false,
     _dumped: false,
     _query: { EIO: '3', transport: 'polling', t: 'LcybvXM', b64: '1' },
     res:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: true,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedHeader: {},
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: true,
        _headerSent: true,
        socket: [Object],
        connection: [Object],
        _header: 'HTTP/1.1 200 OK\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Length: 100\r\nAccess-Control-Allow-Origin: *\r\nSet-Cookie: io=gZ_YdXv9NYeoY014AAAA; Path=/; HttpOnly\r\nDate: Fri, 20 Jan 2017 15:56:08 GMT\r\nConnection: close\r\n\r\n',
        _headers: null,
        _headerNames: {},
        _onPendingData: [Function: updateOutgoingData],
        statusMessage: 'OK',
        statusCode: 200 },
     cleanup: [Function: cleanup] },
  remoteAddress: '::ffff:127.0.0.1',
  checkIntervalTimer: null,
  upgradeTimeoutTimer: null,
  pingTimeoutTimer:
   Timeout {
     _called: false,
     _idleTimeout: 85000,
     _idlePrev:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: false,
        msecs: 85000 },
     _idleNext:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: false,
        msecs: 85000 },
     _idleStart: 3194,
     _onTimeout: [Function],
     _repeat: null },
  transport:
   XHR {
     readyState: 'open',
     discarded: false,
     closeTimeout: 30000,
     maxHttpBufferSize: 100000000,
     httpCompression: { threshold: 1024 },
     supportsBinary: false,
     _events:
      { error: [Object],
        packet: [Function: bound ],
        drain: [Object],
        close: [Object],
        headers: [Function] },
     _eventsCount: 5,
     sid: 'gZ_YdXv9NYeoY014AAAA',
     req: null,
     res: null,
     writable: false },
  _events: { close: { [Function: g] listener: [Function] } },
  _eventsCount: 1 }
