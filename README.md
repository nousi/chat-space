# README

###usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|email|string|null: false|
|password|string|null: false|

###Association
- has_many :messages
- has_many :groups



###groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

###Association
- has_many :users
- has_many :messages

###membersテーブル（中間テーブル）
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|

###Association
- belongs_to :user
- belongs_to :group



###messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: true|
|image|string|null: true|
|user_id|integer|null: false|
|group_id|integer|null: false|

###Association
- belongs_to :user
- belongs_to :group








This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
