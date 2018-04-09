class  FeedEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.feedEntry;
    this.hideSummary = this.hideSummary.bind(this);
    this.showSummary = this.showSummary.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  hideSummary() {
    $("#feedEntry_" + this.state.id + " .visibleSummary").hide();
    $("#feedEntry_" + this.state.id + " .hiddenSummary").slideDown();
  }

  showSummary() {
    $("#feedEntry_" + this.state.id + " .hiddenSummary").hide();
    $("#feedEntry_" + this.state.id + " .visibleSummary").slideDown();
  }

  markAsRead(e) {
    e.preventDefault();

    $.ajax({
      method: 'PUT',
      url: '/api/feed_entries/' + this.state.id,
      data: { feed_entry: { read: true }},
      success: function(data) {
        $("#feedEntry_" + this.state.id).slideUp();
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Cannot update requested record: ', error);
      }
    });
  }

  render() {
    return(
      <tbody id={"feedEntry_" + this.state.id}>
        <tr>
          <td>
            <span className="feedEntryActions">
              <a className="hiddenSummary fa fa-plus-square-o" onClick={this.showSummary} />
              <a className="visibleSummary fa fa-minus-square-o" onClick={this.hideSummary} />
              &nbsp;
              <a className="fa fa-check" onClick={this.markAsRead} />
            </span>
            <a href={this.state.url}>{this.state.title}</a>
          </td>
          <td>{this.state.published}</td>
          <td>{this.state.author}</td>
        </tr>
        <tr>
          <td colSpan="3" className="visibleSummary" style={{display: 'none'}}>
            <div dangerouslySetInnerHTML={{__html: this.state.summary}}/>
          </td>
        </tr>
      </tbody>
    )
  }
}
