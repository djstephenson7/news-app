FROM alpine:3.4
RUN docker pull mongo
RUN sudo apt-get install mongodb-clients
RUN docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4