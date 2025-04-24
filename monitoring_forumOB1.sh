#!/bin/bash
echo "Monitoring forum.ob1.se (DNS + HTTP)"
while true; do
  echo "---- $(date) ----"
  echo "[DNS]"
  dig forum.ob1.se +short
  echo "[CNAME]"
  dig forum.ob1.se CNAME +short
  echo "[HTTP status]"
  curl -s -o /dev/null -w "%{http_code}\n" https://forum.ob1.se
  sleep 30
done