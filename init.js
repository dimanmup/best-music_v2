const menu = [
  { selected : true, src : 'audio/4one - Surrealism.mp3', title: '4one - Surrealism', duration : '04:12', inList : true },
  { selected : false, src : 'audio/Vice City Ending Theme.mp3', title: 'Vice City Ending Theme', duration : '05:55', inList : true },
  { selected : false, src : 'audio/A Flock Of Seagulls - I Ran.mp3', title: 'A Flock Of Seagulls - I Ran', duration : '03:46', inList : true  },
  { selected : false, src : 'audio/Blondie - Atomic.mp3', title: 'Blondie - Atomic', duration : '04:38', inList : true },
  { selected : false, src : 'audio/Foreigner - I Want To Know What Love Is.mp3', title: 'Foreigner - I Want To Know What Love Is', duration : '05:01', inList : true },
  { selected : false, src : 'audio/Gary Numan - Cars.mp3', title: 'Gary Numan - Cars', duration : '03:58', inList : true },
  { selected : false, src : 'audio/Q Lazzarus - GoodBye Horses.mp3', title: 'Q Lazzarus - GoodBye Horses', duration : '06:27', inList : true },
  { selected : false, src : 'audio/Robert Tepper - No easy way out.mp3', title: 'Robert Tepper - No easy way out', duration : '04:38', inList : true },
  { selected : false, src : 'audio/Roxy Music - More Than This.mp3', title: 'Roxy Music - More Than This', duration : '04:26', inList : true },
  { selected : false, src : 'audio/Talk Talk - Life\'s What You Make It.mp3', title: 'Talk Talk - Life\'s What You Make It.mp3', duration : '04:27', inList : true },
  { selected : false, src : 'audio/The Human League - (Keep Feeling) Fascination.mp3', title: 'The Human League - (Keep Feeling) Fascination', duration : '03:45', inList : true },
  { selected : false, src : 'audio/Wang Chung - Dance Hall Days.mp3', title: 'Wang Chung - Dance Hall Days', duration : '03:59', inList : true }
];

let menuElement = document.getElementById('menu');
menu.forEach(function(item) {
  menuElement.innerHTML += '<div class="line ' + (item.selected ? 'selected' : '') + '"><button class="left">' + item.title + '</button><span class="duration">' + item.duration + '</span><button class="right selected">+</button></div>';
});