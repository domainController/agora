#!/bin/bash

echo "=== Monitoring ob1.se ==="
echo "🕓 $(date)"

echo ""
echo "🔍 DNS Resolution:"
dig ob1.se +short

echo ""
echo "🔗 HTTP (http://ob1.se):"
curl -s -o /dev/null -w "%{http_code}\n" http://ob1.se

echo "🔒 HTTPS (https://ob1.se):"
curl -s -o /dev/null -w "%{http_code}\n" https://ob1.se

echo ""
echo "📜 Certificate info:"
echo | openssl s_client -servername ob1.se -connect ob1.se:443 2>/dev/null | openssl x509 -noout -issuer -subject -dates