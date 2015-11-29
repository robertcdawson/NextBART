var FilterableTrainTable;

var TrainStationsContainer;

var TrainStationTable;

var TrainStationHeading;

var TrainDestination;

var TrainArrival;

var TrainCars;

var doc = '<?xml version="1.0" encoding="utf-8"?><root><uri><![CDATA[http://api.bart.gov/api/etd.aspx?cmd=etd&orig=NCON]]></uri><date>11/28/2015</date><time>03:40:49 PM PST</time><station><name>North Concord/Martinez</name><abbr>NCON</abbr><etd><destination>Pittsburg/Bay Point</destination><abbreviation>PITT</abbreviation><limited>0</limited><estimate><minutes>2</minutes><platform>1</platform><direction>North</direction><length>10</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate><estimate><minutes>7</minutes><platform>1</platform><direction>North</direction><length>10</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate><estimate><minutes>27</minutes><platform>1</platform><direction>North</direction><length>10</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate></etd><etd><destination>SFO/Millbrae</destination><abbreviation>MLBR</abbreviation><limited>0</limited><estimate><minutes>6</minutes><platform>2</platform><direction>South</direction><length>10</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate><estimate><minutes>24</minutes><platform>2</platform><direction>South</direction><length>9</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate><estimate><minutes>44</minutes><platform>2</platform><direction>South</direction><length>9</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate></etd></station><message></message></root>';

var myObject = getJXONTree(doc);
