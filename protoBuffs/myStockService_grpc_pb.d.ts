// package: myStockService
// file: myStockService.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as myStockService_pb from "./myStockService_pb";

interface IStocksService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getStockBySymbol: IStocksService_IGetStockBySymbol;
    getStockbyName: IStocksService_IGetStockbyName;
    getStockPrice: IStocksService_IGetStockPrice;
}

interface IStocksService_IGetStockBySymbol extends grpc.MethodDefinition<myStockService_pb.StockSymbol, myStockService_pb.theStock> {
    path: "/myStockService.Stocks/GetStockBySymbol";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<myStockService_pb.StockSymbol>;
    requestDeserialize: grpc.deserialize<myStockService_pb.StockSymbol>;
    responseSerialize: grpc.serialize<myStockService_pb.theStock>;
    responseDeserialize: grpc.deserialize<myStockService_pb.theStock>;
}
interface IStocksService_IGetStockbyName extends grpc.MethodDefinition<myStockService_pb.StockName, myStockService_pb.theStock> {
    path: "/myStockService.Stocks/GetStockbyName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<myStockService_pb.StockName>;
    requestDeserialize: grpc.deserialize<myStockService_pb.StockName>;
    responseSerialize: grpc.serialize<myStockService_pb.theStock>;
    responseDeserialize: grpc.deserialize<myStockService_pb.theStock>;
}
interface IStocksService_IGetStockPrice extends grpc.MethodDefinition<myStockService_pb.StockSymbol, myStockService_pb.theStockPrice> {
    path: "/myStockService.Stocks/GetStockPrice";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<myStockService_pb.StockSymbol>;
    requestDeserialize: grpc.deserialize<myStockService_pb.StockSymbol>;
    responseSerialize: grpc.serialize<myStockService_pb.theStockPrice>;
    responseDeserialize: grpc.deserialize<myStockService_pb.theStockPrice>;
}

export const StocksService: IStocksService;

export interface IStocksServer {
    getStockBySymbol: grpc.handleUnaryCall<myStockService_pb.StockSymbol, myStockService_pb.theStock>;
    getStockbyName: grpc.handleUnaryCall<myStockService_pb.StockName, myStockService_pb.theStock>;
    getStockPrice: grpc.handleServerStreamingCall<myStockService_pb.StockSymbol, myStockService_pb.theStockPrice>;
}

export interface IStocksClient {
    getStockBySymbol(request: myStockService_pb.StockSymbol, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    getStockBySymbol(request: myStockService_pb.StockSymbol, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    getStockBySymbol(request: myStockService_pb.StockSymbol, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    getStockbyName(request: myStockService_pb.StockName, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    getStockbyName(request: myStockService_pb.StockName, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    getStockbyName(request: myStockService_pb.StockName, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    getStockPrice(request: myStockService_pb.StockSymbol, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<myStockService_pb.theStockPrice>;
    getStockPrice(request: myStockService_pb.StockSymbol, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<myStockService_pb.theStockPrice>;
}

export class StocksClient extends grpc.Client implements IStocksClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getStockBySymbol(request: myStockService_pb.StockSymbol, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    public getStockBySymbol(request: myStockService_pb.StockSymbol, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    public getStockBySymbol(request: myStockService_pb.StockSymbol, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    public getStockbyName(request: myStockService_pb.StockName, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    public getStockbyName(request: myStockService_pb.StockName, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    public getStockbyName(request: myStockService_pb.StockName, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: myStockService_pb.theStock) => void): grpc.ClientUnaryCall;
    public getStockPrice(request: myStockService_pb.StockSymbol, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<myStockService_pb.theStockPrice>;
    public getStockPrice(request: myStockService_pb.StockSymbol, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<myStockService_pb.theStockPrice>;
}
