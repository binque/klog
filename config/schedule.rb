# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "/path/to/my/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever
set :output, "~/klog/shared/log/whenever.log"
every :day, :at=>'19:00' do
  command 'backup perform -t klog -c ~/klog/current/config/backup_config.rb'
end

every 10.minutes do # Many shortcuts available: :hour, :day, :month, :year, :reboot
  runner "Captcha.destroy_all"
  runner "Captcha.random_create(10)"
end