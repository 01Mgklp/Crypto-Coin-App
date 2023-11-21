const getCoinsList = {
    headers: {
      'x-access-token': 'coinranking5e9b3d9b7f17ec1234f4d65550ad1fd7437b3e94ae2548d3',
    },
  };
  
  fetch('https://api.coinranking.com/v2/coins', options)
    .then((response) => response.json())
    .then((result) => console.log(result));