// Render train arrival in minutes and number of train cars
// Parent: TrainDestination
var TrainArrival = React.createClass({
  render: function() {
    var minutes = this.props.minutes;
    var length = this.props.length;
    return (
      <table className="table table-bordered text-center">
        <tbody>
          <tr>
            <td className="col-xs-6">
              <h1>{minutes}</h1>
              <p className="text-uppercase text-muted">Minutes</p>
            </td>
            <td className="col-xs-6">
            <h1>{length}</h1>
            <p className="text-uppercase text-muted">Cars</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
});

// Render train destination
// Parent: TrainStationTable
var TrainDestination = React.createClass({
  render: function() {
    var etd = this.props.etd;
    var destination = etd.destination;
    var arrivalInfo = [];
    etd.estimate.forEach(function(train, index) {
      arrivalInfo.push(<TrainArrival minutes={train.minutes} length={train.length} key={index} />);
    });
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3>{destination}</h3>
        </div>
        <div className="panel-body">
          {arrivalInfo}
        </div>
      </div>
    );
  }
});

// Render train station name
// Parent: TrainStationTable
var TrainStationHeading = React.createClass({
  render: function() {
    var stationName = this.props.trainInfo.station.name;
    return (
      <div>
        <h2>{stationName}</h2>
      </div>
    );
  }
});

// Render train station heading
// Parent: TrainStationsContainer
var TrainStationTable = React.createClass({
  render: function() {
    var trainInfo = this.props.trainInfo;
    var destinations = [];
    trainInfo.station.etd.forEach(function(etd, index) {
      destinations.push(<TrainDestination etd={etd} key={index} />);
    });
    return (
      <div>
        <TrainStationHeading trainInfo={trainInfo} />
        {destinations}
      </div>
    );
  }
});

// Render train station container
// Parent: FilterableTrainTable
var TrainStationsContainer = React.createClass({
  render: function() {
    var trainInfo = this.props.trainInfo;
    return (
      <TrainStationTable trainInfo={trainInfo} />
    );
  }
});

// Render outermost container
// Parent: ReactDOM
var FilterableTrainTable = React.createClass({
  render: function() {
    var trainInfo = this.props.trainInfo;
    return (
      <div>
        <div className="page-header">
          <h1>NextBART<br/><small>Find your next train</small></h1>
        </div>
        <TrainStationsContainer trainInfo={trainInfo} />
      </div>
    );
  }
});

// TODO: Replace with call to http://api.bart.gov/api/etd.aspx?cmd=etd&orig=[station name]&key=J5HV-5EUE-5ZZ9-XERY
var doc = '<?xml version="1.0" encoding="utf-8"?><root><uri><![CDATA[http://api.bart.gov/api/etd.aspx?cmd=etd&orig=NCON]]></uri><date>11/28/2015</date><time>03:40:49 PM PST</time><station><name>North Concord/Martinez</name><abbr>NCON</abbr><etd><destination>Pittsburg/Bay Point</destination><abbreviation>PITT</abbreviation><limited>0</limited><estimate><minutes>2</minutes><platform>1</platform><direction>North</direction><length>10</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate><estimate><minutes>7</minutes><platform>1</platform><direction>North</direction><length>10</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate><estimate><minutes>27</minutes><platform>1</platform><direction>North</direction><length>10</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate></etd><etd><destination>SFO/Millbrae</destination><abbreviation>MLBR</abbreviation><limited>0</limited><estimate><minutes>6</minutes><platform>2</platform><direction>South</direction><length>10</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate><estimate><minutes>24</minutes><platform>2</platform><direction>South</direction><length>9</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate><estimate><minutes>44</minutes><platform>2</platform><direction>South</direction><length>9</length><color>YELLOW</color><hexcolor>#ffff33</hexcolor><bikeflag>1</bikeflag></estimate></etd></station><message></message></root>';

// Begin: Parse "doc" string into XML
// Source: https://developer.mozilla.org/en-US/docs/Web/Guide/Parsing_and_serializing_XML
var oParser = new DOMParser();
var oDOM = oParser.parseFromString(doc, "text/xml");
// End: Parse "doc" string into XML

// Get JSON tree
var myObject = getJXONTree(oDOM);

// Get JSON root object
var myObjectRoot = myObject.root;

// Render FilterableTrainTable
// Parent: none
ReactDOM.render(
  <FilterableTrainTable trainInfo={myObjectRoot} />,
  document.getElementById('container')
);
