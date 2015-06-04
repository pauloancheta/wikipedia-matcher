var Article = React.createClass({
  getInitialState: function(){
    return{article: this.props.articleData, favourited: this.props.favourited}
  },

  addFavourite: function(){
    $.post('/favourites', {title: this.state.article.title})
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
    return(
      <div>
        <h1>{this.state.article.title}</h1>

        <a href={link}>Go to the article!</a>

        {this.state.favourited ? <a onClick={this.removeFavourite}>unlike</a> : <a onClick={this.addFavourite}>Like!</a> }
      </div>
    )
  }

});