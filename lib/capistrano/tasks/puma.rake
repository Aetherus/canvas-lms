namespace :deploy do
  namespace :puma do
    desc "Generate binstub for Puma" 
    task :binstub do
      on roles(:app) do
        within release_path do
          execute *%w[bundle binstubs puma --path ./sbin]
        end
      end
    end

    desc "Restart Puma server"
    task :restart do
      on roles(:app) do
        within current_path do
          execute *%w[service puma restart]
        end
      end
    end
  end

  after :updated, 'puma:binstub'
  before :finished, 'puma:restart'
end