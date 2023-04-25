# Vinevino

## Website
[live website](https://vinevino.onrender.com)

## Background
Vinevino is an e-commerce website, a clone of Vivino. Vinevino allows users to view different listings of wines filtered by categories, purchase wines by adding wines to the cart, leave ratings and reviews.

## Technology
- **React/Redux** - JS/JSX, CSS/SCSS
- **Ruby on Rails** - Backend
- **BCrypt** - User auth package to generate password hash with salt.
- **PostgreSQL** - Database
- **AWS** - Image storage and uploads


<!-- <img src="https://vinevino-seeds.s3.us-west-1.amazonaws.com/vinevino.gif" alt="text" width="800"/> -->


## Features
### User Authentication - Login/Signup
User can signup or login into their account. Backend uses BCrypt to authenticate users.

### Listing & Filtering of Wines
User can view listings of wines and filter listings by selecting conditions

### Shopping Cart & Purchase CRUD
User can add/update/empty shoppping cart

### Reviews & Ratings CRUD
User can rate and write review for wines

### User Profile
User can view profile, showing reviews written by the user.


## Postgres Database Schema

### `users`
| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | bigint    | not null, primary key     |
| `email`           | string    | not null, indexed, unique |
| `name`            | string    | not null                  |         
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ index on `email, unique: true`
+ index on `session_token, unique: true`
+ `has_many :ratings`
+ `has_many :cart_wines`
+ `has_one :wishlist`
+ `has_many :wines, through: :wishlist`
  

### `cart_wines`
| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| `id`          | bigint    | not null, primary key          |
| `user_id`     | bigint    | not null, indexed, foreign key |
| `wine_id`     | bigint    | not null, indexed, foreign key |
| `quantity`    | integer   | not null                       |
| `created_at`  | datetime  | not null                       |
| `updated_at`  | datetime  | not null                       |

+ `belongs_to :user`
+ `belongs_to :wine`


### `wishlists`
| column name    | data type | details                        |
|----------------|-----------|--------------------------------|
| `id`           | bigint    | not null, primary key          |
| `user_id`      | bigint    | not null, indexed, foreign key |
| `wine_id`      | bigint    | not null, indexed, foreign key |
| `created_at`   | datetime  | not null                       |
| `updated_at`   | datetime  | not null                       |

+ Joins table between users and wines
+ `belongs_to :user`
+ `belongs_to :wine`

  
### `ratings`
| column name          | data type | details                        |
|----------------------|-----------|--------------------------------|
| `id`                 | bigint    | not null, primary key          |
| `rating`             | float     | not null                       |
| `body`               | string    |                                |
| `user_id`            | integer   | not null, indexed, foreign key |
| `wine_id`            | integer   | not null, indexed, foreign key |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `belongs_to :user`
+ `belongs_to :wine`

  
### `wines`
| column name       | data type | details                        |
|-------------------|-----------|--------------------------------|
| `id`              | bigint    | not null, primary key          |
| `name`            | string    | not null                       |
| `type`            | string    | not null                       |
| `grape`           | string    | not null                       |
| `region`          | string    | not null                       |
| `country`         | string    | not null                       |
| `price`           | float     | not null                       |
| `year`            | integer   | not null                       |
| `image`           | string    | not null                       |
| `winery`          | string    | not null                       |
| `bold`            | integer   | not null                       |
| `tannic`          | integer   | not null                       |
| `sweet`           | integer   | not null                       |
| `acidic`          | integer   | not null                       |             
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |

+ `has_many :ratings`
+ `has_many :cart_wines`
+ `has_many :wishlists`
+ `has_many :users, through: :wishlists`






