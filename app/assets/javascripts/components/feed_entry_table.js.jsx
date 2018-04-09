class  FeedEntryTable extends React.Component {
  render() {
    var feedEntries = [];
    this.props.feedEntries.forEach(function(feedEntry) {
      feedEntries.push(<FeedEntry feedEntry={feedEntry} key={'feedEntry' + feedEntry.id}/>);
    }.bind(this));

    return(
      <table id="feedEntryTable" className="table">
        <thead>
          <tr>
            <th>Article Title</th>
            <th>Date</th>
            <th>Author</th>
          </tr>
        </thead>
        {feedEntries}
      </table>
    )
  }
}
