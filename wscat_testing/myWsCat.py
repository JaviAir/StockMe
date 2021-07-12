
PK60WBWPGUO9U16V26OK

FxLtFhpGHOTZJPoU0AELZxXTYYGeScYeokvMoFCS

{"action": "authenticate","data": {"key_id": "PK60WBWPGUO9U16V26OK", "secret_key": "FxLtFhpGHOTZJPoU0AELZxXTYYGeScYeokvMoFCS"}}

{"action": "listen", "data": {"streams": ["AM.TSLA"]}}
{"action": "listen", "data": {"streams": ["AM.AAPL"]}}
{"action": "listen", "data": {"streams": ["AM.SPY"]}}


{"action": "unlisten", "data": {"streams": ["AM.AAPL"]}}

, "AM.AAPL"

$ wscat -c wss://data.alpaca.markets/stream
connected (press CTRL+C to quit)
>  {"action": "authenticate","data": {"key_id": "<YOUR_KEY_ID>", "secret_key": "<YOUR_SECRET_KEY>"}}
< {"stream":"authorization","data":{"action":"authenticate","status":"authorized"}}
>  {"action": "listen", "data": {"streams": ["T.SPY"]}}
< {"stream":"listening","data":{"streams":["T.SPY"]}}