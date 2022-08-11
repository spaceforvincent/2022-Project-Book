import socket

HOST = '192.168.0.35'
PORT = 9996

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR,1)
server_socket.bind((HOST, PORT))
server_socket.listen()

client_socket, addr = server_socket.accept()
print('Connected by', addr)


while True:
    data = client_socket.recv(1024)
    if not data:
        break
    print('Received from', addr, data.decode())
    client_socket.sendall(data)