# config valid for current version and patch releases of Capistrano
lock "~> 3.11.0"

set :application, "canvas-lms"
set :repo_url, "ssh://zhouminhao@172.168.70.223:29418/lms-canvas.git"

set :rails_env, :production

# Defaults to [:web]
# set :assets_roles, [:web]

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp
set :branch, 'dev'

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
append :linked_files, *%w[
  config/database.yml 
  config/delayed_jobs.yml 
  config/domain.yml 
  config/external_migration.yml
  config/file_store.yml
  config/outgoing_mail.yml
  config/rabbitmq.yml
  config/redis.yml
  config/security.yml
]

# Default value for linked_dirs is []
append :linked_dirs, ".bundle", "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system", "tmp/files"

# Default value for default_env is {}
set :default_env, { path: "/opt/ruby/bin:$PATH", rails_env: 'production' }

# Default value for :bundle_without is 'development test'
# Because some gems for building assets are installed only in development environment,
# we have to install them on the target hosts.
# We added capistrano related gems in the group 'deployment',
# and these gems are only needed on the development host,
# so we can exclude them on the target host
set :bundle_without, 'test deployment'

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
