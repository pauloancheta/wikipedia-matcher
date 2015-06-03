var Article = React.createClass({
  getInitialState: function(){
    return{article: this.props.articleData}
  },

  addFavourite: function(){
    console.log('liked!');
  },

  render: function(){
    var link = "http://en.wikipedia.org/wiki/" + encodeURIComponent(this.state.article.title)
    return(
      <div>
        <h1>{this.state.article.title}</h1>
        <a href={link}>Go to the article!</a>
        <a onClick={this.addFavourite}>Like!</a>
      </div>
    )
  }

});