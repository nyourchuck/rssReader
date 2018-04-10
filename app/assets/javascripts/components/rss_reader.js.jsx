class RssReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feeds: [], feedEntries: [] };
    this.handleAddFeed = this.handleAddFeed.bind(this);
    this.handleDeleteFeed = this.handleDeleteFeed.bind(this);
    this.syncArticles = this.syncArticles.bind(this);
    this.updateFeeds = this.updateFeeds.bind(this);
  }

  componentDidMount() {
    this.loadDataFromApi();
  }

  loadDataFromApi() {
    this.updateFeeds(); 
    $.ajax({
      url: '/api/feed_entries',
      success: function(data) {
        this.setState({ feedEntries: data });
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Unable to retrieve feed entries: ', error);
      }
    });
  }

  updateFeeds() {
    $.ajax({
      url: '/api/feeds',
      success: function(data) {
        this.setState({ feeds: [] });
        this.setState({ feeds: data });
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Unable to retrieve feed data: ', error);
      }
    });
  }

  syncArticles() {
    $("#syncSpinner").show();
    $.ajax({
      method: 'PUT',
      url: '/api/feed_entries/sync',
      success: function(data) {
        this.setState({ feedEntries: [] });
        this.setState({ feedEntries: data });
        this.updateFeeds();
        $("#syncSpinner").hide();
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Cannot sync records: ', error);
        $("#syncSpinner").hide();
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
            <button className="btn btn-primary" onClick={this.syncArticles}>
              Sync Feeds
              <i id="syncSpinner" className="fa fa-spinner fa-spin" style={{ display: 'none'}}/>
            </button>
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
