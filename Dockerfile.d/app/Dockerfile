FROM ubuntu:xenial

ENV LANG C.UTF-8
ENV APP_HOME /home/canvas/canvas-lms
ENV RAILS_ENV "production"
ENV CANVAS_LMS_ADMIN_EMAIL canvasadmin@pku.edu.cn
ENV CANVAS_LMS_ADMIN_PASSWORD 1q2w3e4r5t
ENV CANVAS_LMS_ACCOUNT_NAME 北京大学
ENV CANVAS_LMS_STATS_COLLECTION opt_out
ENV YARN_VERSION 1.12.3-1

# Work around github.com/zertosh/v8-compile-cache/issues/2
# This can be removed once yarn pushes a release including the fixed version
# of v8-compile-cache.
ENV DISABLE_V8_COMPILE_CACHE 1

RUN groupadd --gid 1000 canvas \
  && useradd --home-dir /home/canvas --create-home --uid 1000 --gid 1000 canvas \
  && apt-get -y update \
  && apt-get -y upgrade \
  && apt-get -y install curl software-properties-common apt-transport-https \
  && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \
  && printf 'path-exclude /usr/share/doc/*\npath-exclude /usr/share/man/*' > /etc/dpkg/dpkg.cfg.d/01_nodoc \
  && echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list \
  && curl -sS https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - \
  && add-apt-repository -y ppa:brightbox/ruby-ng \
  && apt-get update -qq \
  && apt-get install -qqy --no-install-recommends \
       nodejs \
       yarn="$YARN_VERSION" \
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

EXPOSE 3000
VOLUME $APP_HOME/tmp/files $APP_HOME/log

USER canvas
WORKDIR $APP_HOME

RUN yarn config set registry 'https://registry.npm.taobao.org' \
  && npm config set registry 'https://registry.npm.taobao.org' \
  && bundle config mirror.https://rubygems.org https://gems.ruby-china.com \
  && yarn install --pure-lockfile --network-timeout 1000000000 \
  && bundle install

RUN COMPILE_ASSETS_NPM_INSTALL=0 bundle exec rails canvas:compile_assets

ENTRYPOINT bundle exec rails db:initial_setup && bundle exec puma -C ./config/puma.rb
