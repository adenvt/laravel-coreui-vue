#!/bin/bash

port=${1:-8888}
name="${PWD##*/}"
image="$name-image"
container="$name-container"

docker build -t $image .
docker rm -f $container
docker run -itd --restart unless-stopped --name $container --publish 8888:80 $image

echo "|------------------------------------------------------------"
echo "| Success running on port $port, check http://localhost:$port"
echo "|------------------------------------------------------------"
