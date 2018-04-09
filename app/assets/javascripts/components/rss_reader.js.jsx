class RssReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feeds: [], feedEntries: [] };
    this.handleAddFeed = this.handleAddFeed.bind(this);
    this.handleDeleteFeed = this.handleDeleteFeed.bind(this);
  }

  componentDidMount() {
    this.loadDataFromApi();
  }

  loadDataFromApi() {
    var application = this;
    $.ajax({
      url: '/api/feeds',
      success: function(data) {
        application.setState({ feeds: data });
      },
      error: function(xhr, status, error) {
        alert('Unable to retrieve feed data: ', error);
      }
    });
    $.ajax({
      url: '/api/feed_entries',
      success: function(data) {
        application.setState({ feedEntries: data });
      },
      error: function(xhr, status, error) {
        alert('Unable to retrieve feed entries: ', error);
      }
    });
  }

  handleAddFeed(feed) {
    var feeds = this.state.feeds;
    feeds.push(feed);
    this.setState({ feeds: feeds });
  }

  handleDeleteFeed(feed) {
    var feeds = this.state.feeds.slice();
    var index = feeds.indexOf(feed);
    feeds.splice(index, 1);
    this.setState({ feeds: feeds });
  }

  manageFeeds() {
    $('#feedContainer').slideDown();
    $('#feedEntryContainer').slideUp();
  }

  viewArticles() {
    $('#feedContainer').slideUp();
    $('#feedEntryContainer').slideDown();
  }

  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>RSS Reader</h1> 
          <p>
            <button className="btn btn-primary" onClick={this.manageFeeds}>Manage Feeds</button>
            <button className="btn btn-primary" onClick={this.viewArticles}>View Articles</button>
          </p>
        </div>
        <div id="feedContainer" style={{display: 'none'}}>
          <div className="row">
            <div className="col-md-12">
              <FeedForm handleAdd={this.handleAddFeed} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <FeedTable
                feeds={this.state.feeds}
                handleDeleteItem={this.handleDeleteFeed}
              />
            </div>
          </div>
        </div>
        <div className="row" id="feedEntryContainer">
          <div className="col-md-12">
            <FeedEntryTable feedEntries={this.state.feedEntries} />
          </div>
        </div>
      </div>
    )
  }
}
