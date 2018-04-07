class RssReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feeds: [], feedEntries: [] };
    this.handleAdd = this.handleAdd.bind(this);
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

  handleAdd(feed) {
    var feeds = this.state.feeds;
    feeds.push(feed);
    this.setState({ feeds: feeds });
  }

  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>RSS Reader</h1> 
        </div>
        <div className="row">
          <div className="col-md-12">
            <FeedForm handleAdd={this.handleAdd} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <FeedTable feeds={this.state.feeds} />
            <FeedEntryTable feedEntries={this.state.feedEntries} />
          </div>
        </div>
      </div>
    )
  }
}
