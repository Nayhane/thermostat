# Thermostat dashboard

 ## Libraries:

 - React
 - Redux
 - Redux-persist
 - Redux-thunk
 - Jest and enzyme
 - Material ui
 - Lodash
 - Axios


### Goal

- Current temperature in the room.
- Current set temperature.
- Time of latest update.
- Button to increment the temperature by half a degree at the time.
- Button to decrement the temperatture by half a degree at the time.
- The increment / decrement buttons should not disable when they are clicked. Your user should be able to press the button multiple times to increate / decrease the the temp a couple of degrees. Be aware here about updating the data too many times.

We want you to fetch the data at least every 2 seconds to update the current temperature and the time of last update.
Be aware of race conditions. The patch api call takes about 1 second to update the data.  
It also is possible that when you get the data, you will receive a `202` HTTP-code instead of the data.
This means that the backend has received your request ,but it can not send you the latest data. When this happens, you need to retry the API call. (The backend is set to have a 50-50 chance to send the data or return a `202`).

### API

This starterpack gives you the working API that you need and the basics to start the client project.  
the API will start at http://localhost:9090

This will spin up a node express server for the API.
There are 2 endpoints for this api.

| url                    | method |
| ---------------------- | ------ |
| http://localhost:9090/ | GET    |
| http://localhost:9090/ | PATCH  |
|                        |        |

### Client

the client website start at http://localhost:1234