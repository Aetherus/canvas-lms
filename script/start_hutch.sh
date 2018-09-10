#!/bin/bash
export RAILS_ENV=production
WORKERS=4

cd /opt/canvas

for i in $(seq 1 $WORKERS); do
  bundle exec hutch >/dev/null 2>&1 &
done
