var Article = React.createClass({
  getInitialState: function(){
    return{article: this.props.articleData, favourited: this.props.favourited}
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({article: nextProps.articleData, favourited: nextProps.favourited})
  },

  addFavourite: function(){
    var link = "http://en.wikipedia.org/wiki/" + encodeURIComponent(this.state.article.title)
    $.post('/favourites', {title: this.state.article.title, snippet: this.state.articleData.snippet, link: link})
    this.setState({favourited: true})
  },

  removeFavourite: function(){
    var url = '/remove_favourite/' + this.state.article.title
    $.ajax({
      url: url,
      type: 'DELETE'
    })
    this.setState({favourited: false})
  },

  render: function(){
    var link = "http://en.wikipedia.org/wiki/" + encodeURIComponent(this.state.article.title)
    var snippet = this.state.article.snippet.replace(/(<([^>]+)>)/ig,"");
    snippet = snippet.replace(/&quot;(.*?)&quot/,"")

    return(
      <div>
        <h1 className="article-title">{this.state.article.title}</h1>
        <div className="like-container">
          {this.state.favourited ? <a onClick={this.removeFavourite} className="unlike">unlike!</a> : <a onClick={this.addFavourite} className="like">Like!</a> }
        </div>

        <br />

        <div>
          {snippet}
        </div>

        <a href={link} className="article-link">Go to the article!</a>
      </div>
    )
  }

});