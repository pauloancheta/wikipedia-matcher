var HomeIndex = React.createClass({
  getInitialState: function(){
    var favouriteArray = [];
    this.props.favourites.forEach(function(favourite){
      favouriteArray.push(favourite.title)
    })
    return {searchResults: [], favourites: favouriteArray}
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
    });
  },

  render: function() {
    results = []
    var self = this;
    this.state.searchResults.forEach(function(result, key){
      favourited = self.state.favourites.indexOf(result.title) >= 0
      results.push(<Article articleData={result} key={key} favourited={favourited}/>)
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
