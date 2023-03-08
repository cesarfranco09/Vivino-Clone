class Api::WinesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def wine_by_filter
        filter = params[:filter]
        wine_types = filter[:wine_types].map {|ele| ele.downcase}
        wines = Wine.where(wine_type: wine_types)
        render json: { wines: wines }
    end 

    # def wine_by_filter
    #     filter = params[:filter]
    #     filter_by = filter[:filter_by].downcase
    #     values = filter[:values]
    #     conditions = { filter_by: values }
    #     wines = Wine.where(conditions)
    #     render json: { wines: wines }
    # end 

    # def wine_by_filter
    #     filter = params[:filter]
    #     column_name = filter[:column_name] # The name of the column to filter by
    #     values = filter[:values] # An array of values to filter by
    #     column_name.downcase! # Convert the column name to lowercase
    
    #     # Check if the column name is valid
    #     if Wine.column_names.include?(column_name)
    #       # Build the conditions hash
    #       conditions = { column_name => values }
    
    #       # Use the where method to filter by the given column and values
    #       wines = Wine.where(conditions)
    
    #       render json: { wines: wines }
    #     else
    #       # If the column name is invalid, return an error message
    #       render json: { error: "Invalid column name" }, status: :unprocessable_entity
    #     end
    # end

end
