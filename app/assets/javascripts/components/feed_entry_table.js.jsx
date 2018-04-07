class  FeedEntryTable extends React.Component {
  render() {
    var feedEntries = [];
    this.props.feedEntries.forEach(function(feedEntry) {
      feedEntries.push(<FeedEntry feedEntry={feedEntry} key={'feedEntry' + feedEntry.id}/>);
    }.bind(this));

    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-4">Title</th>
            <th className="col-md-3">Date</th>
            <th className="col-md-3">Author</th>
          </tr>
        </thead>
        <tbody>
          {feedEntries}
        </tbody>
      </table>
    )
  }
}
