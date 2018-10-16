namespace :deploy do
  desc "Restart canvas_init"
  task :canvas_init do
    on roles(:background) do
      execute *%w[service canvas_init restart]
    end
  end

  before :finished, :canvas_init
end