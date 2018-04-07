class  FeedEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.feedEntry;
  }

  render() {
    return(
      <tr>
        <td><Link to={this.state.url}>{this.state.title}</Link></td>
        <td>{this.state.published}</td>
        <td>{this.state.author}</td>
      </tr>
    )
  }
}
