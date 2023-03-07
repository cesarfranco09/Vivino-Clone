# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_07_094454) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cart_wines", force: :cascade do |t|
    t.integer "quantity", null: false
    t.bigint "user_id", null: false
    t.bigint "wine_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_cart_wines_on_user_id"
    t.index ["wine_id"], name: "index_cart_wines_on_wine_id"
  end

  create_table "ratings", force: :cascade do |t|
    t.float "rating", null: false
    t.string "body"
    t.bigint "user_id", null: false
    t.bigint "wine_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_ratings_on_user_id"
    t.index ["wine_id"], name: "index_ratings_on_wine_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "wines", force: :cascade do |t|
    t.string "name", null: false
    t.string "grape", null: false
    t.string "region", null: false
    t.string "country", null: false
    t.float "price", null: false
    t.integer "year", null: false
    t.string "image", null: false
    t.string "winery", null: false
    t.integer "bold", null: false
    t.integer "tannic", null: false
    t.integer "sweet", null: false
    t.integer "acidic", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "wine_type"
  end

  create_table "wishlists", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "wine_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_wishlists_on_user_id"
    t.index ["wine_id"], name: "index_wishlists_on_wine_id"
  end

  add_foreign_key "cart_wines", "users"
  add_foreign_key "cart_wines", "wines"
  add_foreign_key "ratings", "users"
  add_foreign_key "ratings", "wines"
  add_foreign_key "wishlists", "users"
  add_foreign_key "wishlists", "wines"
end
