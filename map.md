# ReactJS Skate map

Created: May 17, 2019 5:49 PM
Tags: frontend,javascript,react

# Goal

> Write a map using [Leaflet](https://react-leaflet.js.org/) that show skate spots

# The page must contain:

• On the map, pins representing a spot, (those pin can be clustered) different colors must be use for each spot type which are:

• Street
• Park
• DIY
• Shop
• Private

• A text search, with a list of suggestion updated during typing
• A panel that show information about the currently select spot, which itself contains (data are available when requesting a spot):

• Name of the spot
• Address
• Type
• Status
• Description
• If it’s indoor or outdoor
• Media stats
• Last 10 media posted
• Last 10 comments

Any CSS framework can be use (Bootstrap, Foundation, Homemade...)
ReactJS must be use

# Authentication

A token is used during each request and placed in the headers with the key `Authorization`
`Bearer YW50ZW/2FiqnGdTj0VupDzHb90de3b6Oew==`

For local development, the url that need to be use is `localhost:3333`, any other url will be rejected

# Documentation

Routes that can be use

## Search spots

Search spots by text (include name, city, country, type) or by geo box
URL:
`GET https://api.staging.skatekrak.com/spots/search`
Params:

    limit: number // How many spots you want returned
    query: string // Text search
    clustering: boolean (default: false) // If you want cluster returned
    northEastLatitude: number // Used for geo box search
    northEastLongitude: number // -
    southWestLatitude: number // -
    southWestLongitude: number // -
    filters: {
    	indoor: boolean
    	type: string[] // shop, street, park, diy, private
    	status: string[] // active, wip, rip
    }

### FIY

• The params `query` & the `northEast` +`southWest` cannot be used together
• The latitude & longitude params correspond to the map box of search

## Get spot

`GET https://api.staging.skatekrak.com/spots/:id`

## Get spot’s media

Media are photos or videos posted by the users, they can be attached to a specific spot. To get the ones attached to a given spot:
`GET https://api.staging.skatekrak.com/spots/:id/medias`
Params:

    limit: number // How many media you want returned
    newer: Date // To return media more recent that the given date
    older: Date // To return media older that the given date

### FIY

`newer` & `older` cannot be use together

# Questions?

If you have any questions regarding unclear guidelines or even bugs in the API, don’t hesitate to reach [m@skatekrak.com](mailto:m@skatekrak.com)
