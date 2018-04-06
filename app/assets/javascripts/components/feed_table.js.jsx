class  FeedTable extends React.Component {
  render() {
    var feeds = [];
    this.props.feeds.forEach(function(feed) {
      feeds.push(<Feed feed={feed} key={'feed' + feed.id}/>);
    }.bind(this));

    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-4">Title</th>
            <th className="col-md-6">Description</th>
          </tr>
        </thead>
        <tbody>
          {feeds}
        </tbody>
      </table>
    )
  }
}
