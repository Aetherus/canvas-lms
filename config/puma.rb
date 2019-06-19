#
# Copyright (C) 2017 - present Instructure, Inc.
#
# This file is part of Canvas.
#
# Canvas is free software: you can redistribute it and/or modify it under
# the terms of the GNU Affero General Public License as published by the Free
# Software Foundation, version 3 of the License.
#
# Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
# WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
# A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
# details.
#
# You should have received a copy of the GNU Affero General Public License along
# with this program. If not, see <http://www.gnu.org/licenses/>.
#

if ENV['RAILS_ENV'] == 'production'
  workers(`nproc`.to_i / 2)
  threads 4, 4
  port 3000
  environment 'production'
  
  preload_app!

  # daemonize
  
  before_fork do
    ActiveRecord::Base.connection_pool.disconnect! if defined?(ActiveRecord)
    Hutch.disconnect
  end
  
  on_worker_boot do
    ActiveRecord::Base.establish_connection if defined?(ActiveRecord)
    Hutch.connect
  end
  
  plugin :tmp_restart  
else
  threads 1,16
end
