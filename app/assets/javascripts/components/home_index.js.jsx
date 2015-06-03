var HomeIndex = React.createClass({
  getInitialState: function(){
    return {searchResults: []}
  },

  onSubmitHandler: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.search).value + '';
    var self = this;

    $.getJSON("http://en.wikipedia.org/w/api.php?&callback=?",{
      srsearch: title,
      action: 'query',
      list: 'search',
      format: 'json'
    },
    function(data) {
      self.setState({searchResults: data.query.search})
      // $.each(data.query.search, function(i, item){
      //   console.log(encodeURIComponent(item.title));
      // })
    });
  },

  render: function() {
    results = []
    this.state.searchResults.forEach(function(result){
      results.push(result.title)
    });
    return(
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" ref="search" placeholder="Search an Wikipedia!"></input>
          <input type="submit"></input>
        </form>
        {results}
      </div>
    )
  }
});
