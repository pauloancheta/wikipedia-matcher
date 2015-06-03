var HomeIndex = React.createClass({
  componentDidMount: function() {
    title = "jimi hendrix"
    $.getJSON("http://en.wikipedia.org/w/api.php?&callback=?",{
      srsearch: title,
      action: 'query',
      list: 'search',
      format: 'json'
    },
    function(data) {
      $.each(data.query.search, function(i, item){
        console.log(item);
      })
    });
  },

  render: function() {
    return(
      <div>
        <h1>Hello world! </h1>
      </div>
    )
  }
})