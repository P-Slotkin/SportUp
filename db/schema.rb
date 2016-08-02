# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160802151721) do

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.string   "title",      null: false
    t.string   "body"
    t.integer  "event_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id"
  add_index "comments", ["event_id"], name: "index_comments_on_event_id"

  create_table "events", force: :cascade do |t|
    t.integer  "creator_id",  null: false
    t.string   "title",       null: false
    t.string   "description"
    t.string   "location",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "events", ["creator_id"], name: "index_events_on_creator_id"
  add_index "events", ["location"], name: "index_events_on_location"

  create_table "groups", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "categor"
    t.string   "location",    null: false
    t.string   "description"
    t.integer  "creator_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "groups", ["location"], name: "index_groups_on_location"
  add_index "groups", ["title"], name: "index_groups_on_title"

  create_table "members", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "group_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "members", ["group_id"], name: "index_members_on_group_id"
  add_index "members", ["user_id"], name: "index_members_on_user_id"

  create_table "rsvps", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "event_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "rsvps", ["event_id"], name: "index_rsvps_on_event_id"
  add_index "rsvps", ["user_id"], name: "index_rsvps_on_user_id"

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email"
  add_index "users", ["session_token"], name: "index_users_on_session_token"

end
