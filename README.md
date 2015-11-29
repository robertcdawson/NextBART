NextBART
========

Description
--------
This React app parses the BART API into JSON format (or, JXON) and shows which trains are coming to a given station as well as the number of cars on each train.

Status
--------
Currently works with a static string parsed as XML (and then as JXON).

To Run
--------
Get [http-server](https://github.com/indexzero/http-server) and run:

    http-server ./ -p 8000 -c-1

Next Steps
--------
1. Get XML from URL
2. Add dropdown with stations
3. Update XML state per dropdown selection
4. Integrate Require.js
