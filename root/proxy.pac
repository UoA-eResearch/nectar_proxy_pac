function FindProxyForURL (url, host) {
  if (isInNet(host, "10.31.0.0", "255.255.0.0")) {
    return "SOCKS5 localhost:8000; SOCKS localhost:8000";
  }
  
  if (isInNet(host, "172.31.0.0", "255.255.0.0")) {
    return "SOCKS5 localhost:8000; SOCKS localhost:8000";
  }
  return "DIRECT";
}
