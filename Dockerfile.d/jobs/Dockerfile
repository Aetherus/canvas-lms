FROM ubuntu:xenial

ENV LANG C.UTF-8
ENV APP_HOME /home/canvas/canvas-lms
ENV RAILS_ENV "production"
ENV NGINX_MAX_UPLOAD_SIZE 10g
ENV YARN_VERSION 1.12.3-1

# Work around github.com/zertosh/v8-compile-cache/issues/2
# This can be removed once yarn pushes a release including the fixed version
# of v8-compile-cache.
ENV DISABLE_V8_COMPILE_CACHE 1

RUN groupadd --gid 1000 canvas \
  && useradd --home-dir /home/canvas --create-home --uid 1000 --gid 1000 canvas \
  && apt-get -y update \
  && apt-get -y upgrade \
  && apt-get -y install curl software-properties-common \
  && printf 'path-exclude /usr/share/doc/*\npath-exclude /usr/share/man/*' > /etc/dpkg/dpkg.cfg.d/01_nodoc \
  && echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list \
  && curl -sS https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - \
  && add-apt-repository -y ppa:brightbox/ruby-ng \
  && apt-get update -qq \
  && apt-get install -qqy --no-install-recommends \
       libxmlsec1-dev \
       python-lxml \
       libicu-dev \
       postgresql-client-9.5 \
       unzip \
       fontforge \
       ruby2.5 \
       ruby2.5-dev \
       git \
       libev-dev \
       libgmp-dev \
       libpq-dev \
       libsqlite3-dev \
       build-essential \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && gem install bundler --version 1.13.6

RUN mkdir -p $APP_HOME && chown canvas:canvas $APP_HOME
COPY --chown=canvas:canvas . $APP_HOME

VOLUME $APP_HOME/log

USER canvas
WORKDIR $APP_HOME

RUN bundle config mirror.https://rubygems.org https://gems.ruby-china.com && bundle install

ENTRYPOINT ./script/delayed_job run
