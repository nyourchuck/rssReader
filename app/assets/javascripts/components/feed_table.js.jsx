class  FeedTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteItem= this.handleDeleteItem.bind(this);
  }

  handleDeleteItem(feed) {
    this.props.handleDeleteItem(feed);
  }

  render() {
    var feeds = [];
    this.props.feeds.forEach(function(feed) {
      feeds.push(<Feed
        feed={feed}
        key={'feed' + feed.id }
        deleteFromParent={this.handleDeleteItem}
      />);
    }.bind(this));

    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-4">Feed Title</th>
            <th className="col-md-6">Description</th>
            <th className="col-md-2">Actions</th>

          </tr>
        </thead>
        <tbody>
          {feeds}
        </tbody>
      </table>
    )
  }
}
