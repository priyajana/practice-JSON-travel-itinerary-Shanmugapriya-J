/**
 * You are working on a travel application that needs to store information about a
multi-destination trip. Your task is to create a JSON object to represent a travel
itinerary. The itinerary should include the following details:
    ● Trip Name: A name for the trip.
    ● Traveler:
        ○ name: The traveler’s full name.
        ○ contact: Includes email and phone.
    ● Destinations: Each destination should include:
        ○ location: The name of the destination (e.g., "Paris").
        ○ arrivalDate: The date of arrival in the format YYYY-MM-DD.
        ○ departureDate: The date of departure in the format YYYY-MM-DD.
        ○ activities: Each activity should include:
            ■ title: The name of the activity.
            ■ time: The scheduled time (e.g., "10:00 AM").
 */

const travelItinerary = [
    {
        "Trip Name":"Vist to Florida",
        "Traveler":{
                    "Name":"Jack Nicholson",
                    "Contact":[
                                {
                                    "Email":"nicholson@hotmail.com",
                                    "Phone":3321999456
                                }
                              ]
                   },
        "Destinations":[
            { 
                "Location":"Miami",
                "arrivalDate":"2038-05-02",
                "departureDate":"2038-05-06",
                "activities":[
                                {"Title":"Go Kayaking","Time":"1:00 PM"},
                                {"Title":"Gators Park Tour","Time":"3:00 PM"}
                             ]
            },
            {
                
                "Location":"Key West",
                "arrivalDate":"2038-06-04",
                "departureDate":"2038-06-09",
                "activities":[
                                {"Title":"Gulf of Mexico","Time":"4:00 PM"},
                                {"Title":"Southernmost Point of the Continental U.S.A.","Time":"2:00 PM"}
                             ]
            }
        ]
    }
];