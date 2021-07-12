import asyncio
import websockets
import json
import math
import pathlib
import ssl
import websocket

# f = open('mockData.json')
# jsonData = json.load(f)

# async def echo(websocket, path):
#     async for message in websocket:
#         if message == jsonData['T']:
#             floatPrice = jsonData['a']
#             formattedPrice = str(math.floor(floatPrice * 10 ** 2) / 10 ** 2)
#             await websocket.send(formattedPrice)
#         else:
#             await websocket.send("Could not find symbol.")
# asyncio.get_event_loop().run_until_complete(
#     websockets.serve(echo, 'localhost', 8765))
# asyncio.get_event_loop().run_forever()


# client websocket
auth = {"action": "authenticate","data": {"key_id": "PK60WBWPGUO9U16V26OK", "secret_key": "FxLtFhpGHOTZJPoU0AELZxXTYYGeScYeokvMoFCS"}}

alpacaSocket = "wss://data.alpaca.markets/stream"

listen1 = {"action": "listen", "data": {"streams": ["T.SPY"]}}

def on_open(ws):
    ws.send(json.dumps(auth))
    ws.send(listen1)

def on_message(ws, message):
    print(message)

def on_close(ws):
    print("stream closed!")

ws = websocket.WebSocketApp(alpacaSocket, on_open=on_open, on_message=on_message, on_close=on_close)
ws.run_forever()


