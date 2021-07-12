// package: myStockService
// file: myStockService.proto

var myStockService_pb = require("./myStockService_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Stocks = (function () {
  function Stocks() {}
  Stocks.serviceName = "myStockService.Stocks";
  return Stocks;
}());

Stocks.GetStockBySymbol = {
  methodName: "GetStockBySymbol",
  service: Stocks,
  requestStream: false,
  responseStream: false,
  requestType: myStockService_pb.StockSymbol,
  responseType: myStockService_pb.theStock
};

Stocks.GetStockbyName = {
  methodName: "GetStockbyName",
  service: Stocks,
  requestStream: false,
  responseStream: false,
  requestType: myStockService_pb.StockName,
  responseType: myStockService_pb.theStock
};

Stocks.GetStockPrice = {
  methodName: "GetStockPrice",
  service: Stocks,
  requestStream: false,
  responseStream: true,
  requestType: myStockService_pb.StockSymbol,
  responseType: myStockService_pb.theStockPrice
};

exports.Stocks = Stocks;

function StocksClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

StocksClient.prototype.getStockBySymbol = function getStockBySymbol(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Stocks.GetStockBySymbol, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StocksClient.prototype.getStockbyName = function getStockbyName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Stocks.GetStockbyName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

StocksClient.prototype.getStockPrice = function getStockPrice(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Stocks.GetStockPrice, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.StocksClient = StocksClient;

