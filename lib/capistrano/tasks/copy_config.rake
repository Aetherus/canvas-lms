namespace :deploy do
  desc "Copy config files"
  task :copy_config do
    on roles(:all) do
      fetch(:linked_files, []).each do |f|
        upload! f, shared_path.join(f)
      end
    end
  end

  after 'check:make_linked_dirs', :copy_config
end