Hutch::Logging.logger = Logger.new(Rails.root.join("log/hutch-#{Rails.env}.log"), level: :info)

config = YAML.load_file(Rails.root.join('config/rabbitmq.yml')).deep_symbolize_keys[Rails.env.to_sym]

Hutch::Config.initialize(config)

Hutch.connect
