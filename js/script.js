$(function() {

  const $city = $('#weather_for');
  const $temp = $('#temp');
  const $feels_like = $('#feels_like');
  const $weather = $('#weather');
  const $form = $('form');
  
  $form.on('submit', getWeather);

  function getWeather(event) {
    let data = {
          appid:'fa8bb15376afa6c4b57918cd4d2819e3',
          units:'imperial',
          q: `${$("#user_input").val()}`
    }
    event.preventDefault();
    const promise = $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather',
        data: data
    });
    promise.then(
    (data) => {
    console.log(data);
    $city.text(data.name);
    $temp.text(data.main.temp);
    $feels_like.text(data.main.feels_like);
    $weather.text(data.weather[0].main);
    },
    (error) => {
    console.log('bad request: ', error);
    })
  }
});
