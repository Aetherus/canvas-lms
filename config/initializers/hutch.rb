Hutch::Logging.logger = Rails.logger

config = YAML.load_file(Rails.root.join('config/rabbitmq.yml')).deep_symbolize_keys[Rails.env.to_sym]

Hutch::Config.initialize(config)

Hutch.connect
