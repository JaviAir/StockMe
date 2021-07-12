// package: myStockService
// file: myStockService.proto

import * as myStockService_pb from "./myStockService_pb";
import {grpc} from "@improbable-eng/grpc-web";

type StocksGetStockBySymbol = {
  readonly methodName: string;
  readonly service: typeof Stocks;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof myStockService_pb.StockSymbol;
  readonly responseType: typeof myStockService_pb.theStock;
};

type StocksGetStockbyName = {
  readonly methodName: string;
  readonly service: typeof Stocks;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof myStockService_pb.StockName;
  readonly responseType: typeof myStockService_pb.theStock;
};

type StocksGetStockPrice = {
  readonly methodName: string;
  readonly service: typeof Stocks;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof myStockService_pb.StockSymbol;
  readonly responseType: typeof myStockService_pb.theStockPrice;
};

export class Stocks {
  static readonly serviceName: string;
  static readonly GetStockBySymbol: StocksGetStockBySymbol;
  static readonly GetStockbyName: StocksGetStockbyName;
  static readonly GetStockPrice: StocksGetStockPrice;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class StocksClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getStockBySymbol(
    requestMessage: myStockService_pb.StockSymbol,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: myStockService_pb.theStock|null) => void
  ): UnaryResponse;
  getStockBySymbol(
    requestMessage: myStockService_pb.StockSymbol,
    callback: (error: ServiceError|null, responseMessage: myStockService_pb.theStock|null) => void
  ): UnaryResponse;
  getStockbyName(
    requestMessage: myStockService_pb.StockName,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: myStockService_pb.theStock|null) => void
  ): UnaryResponse;
  getStockbyName(
    requestMessage: myStockService_pb.StockName,
    callback: (error: ServiceError|null, responseMessage: myStockService_pb.theStock|null) => void
  ): UnaryResponse;
  getStockPrice(requestMessage: myStockService_pb.StockSymbol, metadata?: grpc.Metadata): ResponseStream<myStockService_pb.theStockPrice>;
}

