import redis

conn = redis.Redis(host='localhost', port=6379, db=0)
conn.set('kami','ni!')

hoge = conn.get('kami')
print(hoge.decode())


