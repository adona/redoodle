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
        <PollParticipantsContainer 
          times = {poll.times}
          participants = {poll.participants}
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

class PollParticipantsContainer extends React.Component {
  constructor(props) {
    super(props);
    var participants = this.props.participants;
    participants.forEach((p, idx) => p.id = idx); // Add unique IDs
    this.state = {
      participants: this.props.participants,
      nextID: participants.length,
      idxEditing: null,
    };
    this.handleAddParticipant = this.handleAddParticipant.bind(this);
    this.handleStartEditing = this.handleStartEditing.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAvailabilityChange = this.handleAvailabilityChange.bind(this);
    this.handleDeleteParticipant = this.handleDeleteParticipant.bind(this);
    this.handleStopEditing = this.handleStopEditing.bind(this);
  }

  handleAddParticipant() {
    var participants = this.state.participants;
    const newParticipant = {
      name: "",
      id: this.state.nextID,
      availability: this.props.times.map(time => "N")
    };
    participants.unshift(newParticipant);
    this.setState({
      participants: participants,
      nextID: this.state.nextID + 1,
      idxEditing: 0
    });
  }

  handleStartEditing(idx) {
    this.setState({
      idxEditing: idx
    });
  }

  handleNameChange(participantIdx, name) {
    var participants = this.state.participants;
    participants[participantIdx].name = name;
    this.setState({
      participants: participants
    });
  }

  handleAvailabilityChange(participantIdx, dateIdx, newAvailability) {
    var participants = this.state.participants;
    participants[participantIdx].availability[dateIdx] = newAvailability;
    this.setState({
      participants: participants
    });
  }

  handleDeleteParticipant(participantIdx) {
    var participants = this.state.participants;
    participants.splice(participantIdx, 1);
    this.setState({
      participants: participants,
      idxEditing: null
    });
  }

  handleStopEditing() {

  }

  render() {
    const poll = this.props.poll;
    return (
      <div id="poll-participants-container">
        <PollParticipantsTable 
          times = {this.props.times} 
          participants = {this.state.participants}
          onAddParticipant = {this.handleAddParticipant}
          idxEditing = {this.state.idxEditing}
          onStartEditing = {this.handleStartEditing}
          onNameChange = {this.handleNameChange}
          onAvailabilityChange = {this.handleAvailabilityChange}
          onDeleteParticipant = {this.handleDeleteParticipant}
        />
      </div>
      // TODO: Add update button
    )
  }
}

class PollParticipantsTable extends React.Component {
  render() {
    return (
      <table id="poll-participants-table">
        <PollTableHeader times={this.props.times} />
        <tbody>
          <PollTableSummary 
            participants={this.props.participants}
            times={this.props.times}
            onAddParticipant={this.props.onAddParticipant}
          />
          {this.props.participants.map(
            (participant, idx) => ( this.props.idxEditing!=idx ? 
              <PollParticipantRow 
                key={participant.id}
                idx={idx}
                participant={participant}
                onStartEditing = {this.props.onStartEditing}
              /> : 
              <PollParticipantRowEditing 
                key={participant.id}
                idx={idx}
                participant={participant}
                onNameChange = {this.props.onNameChange}
                onAvailabilityChange = {this.props.onAvailabilityChange}
                onDeleteParticipant = {this.props.onDeleteParticipant}
              />))
            }
        </tbody>
      </table>
    );
  }
}

class PollTableHeader extends React.Component {
  render() {
    return(
      <thead id="poll-table-header">
        <tr>
          <th/>
          {this.props.times.map(
            (time, idx) => (
              <th key = {idx} >
                <span className="poll-table-header-month">{ MONTH_NAMES[time.start.getMonth()].slice(0,3) } </span><br/> 
                <span className="poll-table-header-day">{ time.start.getDate() } </span><br/>
                <span className="poll-table-header-weekday">{ DAY_NAMES[time.start.getDay()].slice(0,3) }</span><br/>
                <span className="poll-table-header-time">{ time_to_string(time.start) }</span><br/>
                <span className="poll-table-header-time">{ time_to_string(time.end) }</span><br/>
              </th>
            ))
          }
        </tr>
      </thead>
    );
  }
}

class PollTableSummary extends React.Component {
  render() {
    const participants = this.props.participants;
    const times = this.props.times;
    const totals = times.map((time, idx) =>
      sum(participants.map(p => p.availability[idx] != "N"))
    );

    return(
      <tr id="poll-table-summary">
        <td>
          <div id="poll-participants-summary">
            <div id="poll-n-participants">{participants.length} participants</div>
            <div 
              id="poll-add-participant" 
              className="fas fa-plus"
              onClick={this.props.onAddParticipant}
            />
          </div>
        </td>
        {
          times.map((time, idx) => 
            <td key={idx}>
              <div id="poll-availability-summary" className="fas fa-check">
                {totals[idx]}
              </div> 
            </td>
          )
        }
      </tr>
    );
  }
}

class PollParticipantRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartEditing = this.handleStartEditing.bind(this);
  }

  handleStartEditing(e) {
    this.props.onStartEditing(this.props.idx);
  }

  render() {
    const participant = this.props.participant;
    return(
      <tr className="poll-participant-row" editing="false"> 
        <td>
          <div className="poll-participant-details">
            <div className="poll-participant-icon fas fa-user-circle"></div>
            <div className="poll-participant-name">{participant.name}</div>
            <div className="poll-participant-edit fas fa-pen" onClick={this.handleStartEditing}></div>
          </div>
        </td>
        {
          participant.availability.map(
            (response, dateIdx) => (
              <td 
                className="poll-participant-availability" 
                key={dateIdx} 
                response={response}>
                  {<div className={symbol_from_availability(response)}></div>}
              </td>))
        }
      </tr>
    );
  }
}

class PollParticipantRowEditing extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAvailabilityChange = this.handleAvailabilityChange.bind(this);
    this.nameInput = React.createRef();
  }

  handleNameChange(e) {
    const participantIdx = this.props.idx;
    const newName = e.target.value;
    this.props.onNameChange(participantIdx, newName);
  }

  handleAvailabilityChange(dateIdx, e) {
    const participantIdx = this.props.idx;
    const previousAvailability = $(e.target).attr("response");
    const newAvailability = previousAvailability == "Y" ? "M" : (previousAvailability == "M" ? "N" : "Y");
    this.props.onAvailabilityChange(participantIdx, dateIdx, newAvailability);
  }

  render() {
    const participant = this.props.participant;
    return(
      <tr className="poll-participant-row" editing="true">
        <td>
          <div className="poll-participant-details">
            <div 
              className="poll-participant-delete fas fa-trash"
              onClick={this.props.onDeleteParticipant}
            ></div>
            <input
              className="poll-participant-name-input"
              ref={this.nameInput}
              type="text"
              value={participant.name}
              placeholder="Enter your name"
              onChange={this.handleNameChange}
            />
          </div>
        </td>
        {
          participant.availability.map(
            (response, dateIdx) => (
              <td 
                className="poll-participant-availability" 
                key={dateIdx} 
                response={response}>
                  <input
                    type="checkbox"
                    className={"poll-participant-availability-checkbox " + symbol_from_availability(response)}
                    response={response}
                    onChange={(e) => this.handleAvailabilityChange(dateIdx, e)}
                  />
              </td>
            ))
        }
      </tr>
    )
  }

  componentDidMount() {
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
  participants: [
    {
      name: "Adona-Luiza Iosif",
      availability: ["Y", "Y"]
    },
    {
      name: "Angi",
      availability: ["M", "Y"]
    },
    {
      name: "Maria",
      availability: ["N", "N"]
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
  const time_string = hour + ":" + minute.toString().padStart(2, '0') + " " + period;
  return time_string;
}

function symbol_from_availability(availability) {
  if (availability=="Y")
    return "fas fa-check";
  if (availability=="M")
    return "fas fa-question";
  return "";
}

function sum(arr) {
  return arr.reduce((a, b) => a+b, 0);
}
