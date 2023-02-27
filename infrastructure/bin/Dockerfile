FROM ubuntu:23.04

WORKDIR /workspace

RUN apt update && \
  apt install -y curl unzip zip
COPY ./google-linux ./google_run
RUN chmod +x ./google_run

CMD ["./google_run"]
