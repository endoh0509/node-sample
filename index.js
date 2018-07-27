var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello');
});

const places = [
  {
    id: 1,
    title: 'Sample1',
    lat: 0,
    lon: 0
  },
  {
    id: 2,
    title: 'Sample2',
    lat: 0,
    lon: 0
  },
  {
    id: 3,
    title: 'Sample3',
    lat: 0,
    lon: 0
  }
];

app.get('/places/:id', function (req, res) {
  const place = places.find(function(place){
    return place.id === parseInt(req.params.id);
  });
  if(place) return res.json(place);
  res.json({message: `place id=${req.params.id} is not find.`});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
