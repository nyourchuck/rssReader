class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.feed;
  }

  render() {
    return(
      <tr>
        <td><a href={this.state.url}>{this.state.title}</a></td>
        <td>{this.state.description}</td>
      </tr>
    )
  }
}
