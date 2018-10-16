namespace :deploy do
  desc "Restart hutch"
  task :hutch do
    on roles(:hutch) do
      execute *%w[service hutch restart]
    end
  end
end