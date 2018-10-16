namespace :deploy do
  desc "Mount NFS partitions"
  task :mount_nfs do
    on roles(:app, :background) do
      info "Mounting NFS partitions"
      execute :mount, '-a'  # TODO fine-grain mounting, make it not rely on fstab
    end
  end
  after :check, :mount_nfs
end
