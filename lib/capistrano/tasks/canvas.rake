namespace :deploy do
  namespace :canvas do
    desc 'Run yarn install --pure-lockfile'
    task :yarn do
      on roles(:assets) do
        within release_path do
          execute *%w[yarn install --pure-lockfile]
        end
      end
    end

    desc 'Run rake task canvas:compile_assets'
    task :compile_assets do
      on roles(:assets) do
        within release_path do
          with rails_env: fetch(:rails_env) do
            rake 'canvas:compile_assets'
          end
        end
      end
    end
  end
  
  after :migrate, 'canvas:yarn'
  after 'canvas:yarn', 'canvas:compile_assets'
end