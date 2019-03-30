const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class PollContainer extends React.Component {
  render() {
    const poll = this.props.poll;
    return (
      <div id="poll-container">
        <PollHeader
          name = {poll.name}
          author = {poll.author}/>
        <PollMain poll = {poll} />
      </div>
    );
  }
}

class PollHeader extends React.Component {
  render() {
    return (
      <div id="poll-header">
        <h1>{this.props.name}</h1>
        <p>{this.props.author} • 1h hours ago • Print</p>
      </div>
    );
  }
}

class PollMain extends React.Component {
  render() {
    const poll = this.props.poll;
    return (
      <div id="poll-main">
        <PollDetails 
          location = {poll.location}
          notes = {poll.notes}
          timezone = {poll.timezone}
        />
        <PollResponsesContainer 
          poll = {poll}
        />
      </div>
    );
  }
}

class PollDetails extends React.Component {
  render() {
    return (
      <div id="poll-details">
        <p> <i className="fas fa-map-marker-alt"></i> {this.props.location} </p>
        <p> <i className="fas fa-align-left"></i> {this.props.notes} </p>
        <p> <i className="far fa-clock"></i> All times displayed in <b>{this.props.timezone}</b> </p>
      </div>
    );
  }
}

class PollResponsesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      respondents: props.poll.respondents,
      idxEditing: 0
    };
    this.handleStartEditing = this.handleStartEditing.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAvailabilityChange = this.handleAvailabilityChange.bind(this);
    this.handleStopEditing = this.handleStopEditing.bind(this);
  }

  handleStartEditing(idx) {
    this.setState({
      idxEditing: idx
    });
  }

  handleNameChange(respondentIdx, name) {
    var respondents = this.state.respondents;
    respondents[respondentIdx].name = name;
    this.setState({
      respondents: respondents
    });
  }

  handleAvailabilityChange(respondentIdx, dateIdx, newAvailability) {
    var respondents = this.state.respondents;
    respondents[respondentIdx].responses[dateIdx] = newAvailability;
    this.setState({
      respondents: respondents
    });
  }

  handleStopEditing() {

  }

  render() {
    const poll = this.props.poll;
    return (
      <div id="poll-responses-container">
        <PollResponsesTable 
          times = {poll.times} 
          respondents = {this.state.respondents}
          idxEditing = {this.state.idxEditing}
          onStartEditing = {this.handleStartEditing}
          onNameChange = {this.handleNameChange}
          onAvailabilityChange = {this.handleAvailabilityChange}
        />
      </div>
    )
  }
}

class PollResponsesTable extends React.Component {
  render() {
    var header_columns = this.props.times.map(
      (time, idx) => (
        <th key = {idx} >
          <span className="poll-header-month">{ MONTH_NAMES[time.start.getMonth()].slice(0,3) } </span><br/> 
          <span className="poll-header-day">{ time.start.getDate() } </span><br/>
          <span className="poll-header-weekday">{ DAY_NAMES[time.start.getDay()].slice(0,3) }</span><br/>
          <span className="poll-header-time">{ time_to_string(time.start) }</span><br/>
          <span className="poll-header-time">{ time_to_string(time.end) }</span><br/>
        </th>
      )
    );
    var rows = this.props.respondents.map(
      (respondent, idx) => (
        <PollResponseRow 
          key={idx}
          idx={idx}
          respondent={respondent}
          isEditing={this.props.idxEditing==idx}
          onStartEditing = {this.props.onStartEditing}
          onNameChange = {this.props.onNameChange}
          onAvailabilityChange = {this.props.onAvailabilityChange}
        />));
      
    return (
      <table id="poll-responses-table">
        <thead><tr><th/>{header_columns}</tr></thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

class PollResponseRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartEditing = this.handleStartEditing.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAvailabilityChange = this.handleAvailabilityChange.bind(this);
    this.nameInput = React.createRef();
  }

  handleStartEditing(e) {
    this.props.onStartEditing(this.props.idx);
  }

  handleNameChange(e) {
    const respondentIdx = this.props.idx;
    const newName = e.target.value;
    this.props.onNameChange(respondentIdx, newName);
  }

  handleAvailabilityChange(dateIdx, e) {
    const respondentIdx = this.props.idx;
    const newAvailability = e.target.value;
    this.props.onAvailabilityChange(respondentIdx, dateIdx, newAvailability);
  }

  render() {
    var respondent = this.props.respondent;
    if (!this.props.isEditing) {
      return(
        <tr>
          <td>
            <div>
              <div className="poll-respondent-icon fas fa-user-circle"></div>
              <div className="poll-respondent-name">{respondent.name}</div>
              <div className="poll-edit-respondent fas fa-pen" onClick={this.handleStartEditing}></div>
            </div>
          </td>
          {
            respondent.responses.map(
              (response, idx) => (<td key={idx}>{response}</td>))
          }
        </tr>
      );
    } else {
      return(
        <tr className="row-editing">
          <td>
            <div>
              <div className="poll-delete-respondent fas fa-trash"></div>
              <input
                className="poll-respondent-name-editing"
                ref={this.nameInput}
                type="text"
                value={respondent.name}
                onChange={this.handleNameChange}
              />
            </div>
          </td>
          {
            respondent.responses.map(
              (response, dateIdx) => (
                <td key={dateIdx}>
                  {response}
                    {/* <input
                      type="text"
                      value={response}
                      onChange={(e) => this.handleAvailabilityChange(dateIdx, e)}
                    /> */}
                </td>
              ))
          }
        </tr>
      )
    }
  }

  componentDidMount() {
    if (this.props.isEditing)
      this.nameInput.current.focus();
  }

  componentDidUpdate() {
    if (this.props.isEditing)
      this.nameInput.current.focus();
  }
}

const POLL = {
  name: "GoT Marathon!!!",
  author: "Adona Iosif",
  location: "My place",
  notes: "Winter is finally here!",
  timezone: "America/New York",
  times: [
    {
      start: new Date(2019, 4, 2, 20, 0),
      end: new Date(2019, 4, 2, 23, 0)
    },
    {
      start: new Date(2019, 4, 3, 20, 0),
      end: new Date(2019, 4, 3, 23, 0)
    }
  ],
  respondents: [
    {
      name: "Adona Iosif",
      responses: ["Y", "Y"]
    },
    {
      name: "Angi",
      responses: ["M", "Y"]
    },
    {
      name: "Maria",
      responses: ["N", "N"]
    }
  ]
}


ReactDOM.render(
  <PollContainer poll={POLL} />,
  $('#main')[0]
);

// Helper functions

function time_to_string(date) {
  var hour = date.getHours();
  var minute = date.getMinutes();
  var period;
  if (hour < 12) {
    period = "am";
  } else {
    period = "pm";
    hour -= 12;
  }
  var time_string = hour + ":" + minute.toString().padStart(2, '0') + " " + period;
  return time_string;
}
