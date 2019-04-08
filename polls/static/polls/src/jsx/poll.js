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
    const author = this.props.author;
    return (
      <div id="poll-header">
        <h1>{this.props.name}</h1>
        <p>{author.first_name} {author.last_name} • 1h hours ago • Print</p>
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
          polltimes = {poll.polltimes}
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
    this.state = {
      participants: this.props.participants,
      idxEditing: null,
      isNewParticipant: null
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
      id: null,
      name: "",
      availability: this.props.polltimes.map(polltime => ({
        polltime: polltime.id,
        availability: "N"
      }))
    };
    participants.unshift(newParticipant);
    this.setState({
      participants: participants,
      idxEditing: 0,
      isNewParticipant: true
    });
  }

  handleStartEditing(participantIdx) {
    this.setState({
      idxEditing: participantIdx,
      isNewParticipant: false
    });
  }

  handleNameChange(participantIdx, newName) {
    var participants = this.state.participants;
    participants[participantIdx].name = newName;
    this.setState({
      participants: participants
    });
  }

  handleAvailabilityChange(participantIdx, polltimeIdx, newAvailability) {
    var participants = this.state.participants;
    participants[participantIdx].availability[polltimeIdx].availability = newAvailability;
    this.setState({
      participants: participants
    });
  }

  handleStopEditing() {
    var participants = this.state.participants;
    var updatedParticipant = participants[this.state.idxEditing];
    $.post(
      "update-participant", 
      JSON.stringify(updatedParticipant)
    )
    .done((updatedParticipant) => {
      participants[this.state.idxEditing] = updatedParticipant;
      this.setState({
        participants: participants,
        idxEditing: null,
        isNewParticipant: null
      });
      console.log("Participant updated.");
    })
    .fail(() => {
      // TODO: Handle failure case (at the very least alert the user, perhaps different responses depending on the error message)
      console.log("Failed to update participant.");
    });
  }

  handleDeleteParticipant(participantIdx) {
    var participants = this.state.participants;
    var deletedParticipant = participants[participantIdx];
    var deleteParticipant = () => {
      participants.splice(participantIdx, 1);
      this.setState({
        participants: participants,
        idxEditing: null,
        isNewParticipant: null
      });
      console.log("Participant deleted.");
    }
    if (this.state.isNewParticipant) {
      deleteParticipant();
    } else {
      $.ajax({
        url: "delete-participant", 
        type: "DELETE", 
        data: JSON.stringify(deletedParticipant)
      })
      .done(deleteParticipant)
      .fail(() => {
        // TODO: Handle failure case (at the very least alert the user, perhaps different responses depending on the error message)
        console.log("Failed to delete participant.");
      });
    }
  }

  render() {
    return (
      <div id="poll-participants-container">
        <PollParticipantsTable 
          polltimes = {this.props.polltimes} 
          participants = {this.state.participants}
          onAddParticipant = {this.handleAddParticipant}
          onStartEditing = {this.handleStartEditing}
          idxEditing = {this.state.idxEditing}
          onNameChange = {this.handleNameChange}
          onAvailabilityChange = {this.handleAvailabilityChange}
          onDeleteParticipant = {this.handleDeleteParticipant}
        />
        { this.state.idxEditing == null ? "" : 
          <PollSubmitButton 
            idxEditing = {this.state.idxEditing}
            isNewParticipant = {this.state.isNewParticipant}
            participant = {this.state.participants[this.state.idxEditing]}
            onStopEditing = {this.handleStopEditing}
          />
        }
      </div>
    )
  }
}

class PollParticipantsTable extends React.Component {
  render() {
    const isEditing = this.props.idxEditing!=null;
    return (
      <table id="poll-participants-table">
        <PollTableHeader polltimes={this.props.polltimes} />
        <tbody>
          <PollTableSummary 
            polltimes={this.props.polltimes}
            participants={this.props.participants}
            isEditable={!isEditing}
            onAddParticipant={this.props.onAddParticipant}
          />
          {this.props.participants.map(
            (participant, idx) => ( this.props.idxEditing!=idx ? 
              <PollParticipantRow 
                key={idx}
                idx={idx}
                participant={participant}
                isEditable={!isEditing}
                onStartEditing = {this.props.onStartEditing}
              /> : 
              <PollParticipantRowEditing 
                key={idx}
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
    const polltimes = this.props.polltimes;
    var columns = [];
    for (var idx=0; idx<polltimes.length; idx++) {
      const time = polltimes[idx];
      const start_time = new Date(time.start);
      const end_time = new Date(time.end);
      columns.push(
        <th key = {idx} >
        <span className="poll-table-header-month">{ MONTH_NAMES[start_time.getMonth()].slice(0,3) } </span><br/> 
        <span className="poll-table-header-day">{ start_time.getDate() } </span><br/>
        <span className="poll-table-header-weekday">{ DAY_NAMES[start_time.getDay()].slice(0,3) }</span><br/>
        <span className="poll-table-header-time">{ time_to_string(start_time) }</span><br/>
        <span className="poll-table-header-time">{ time_to_string(end_time) }</span><br/>
      </th>
      );
    }
    return(
      <thead id="poll-table-header">
        <tr>
          <th/>
          {columns}
        </tr>
      </thead>
    );
  }
}

class PollTableSummary extends React.Component {
  render() {
    const polltimes = this.props.polltimes;
    const participants = this.props.participants;
    var totals = [];
    for (var idx=0; idx<polltimes.length; idx++)
      totals[idx] = sum(participants.map(p => p.availability[idx].availability != "N"));

    return(
      <tr id="poll-table-summary">
        <td>
          <div id="poll-participants-summary">
            <div id="poll-n-participants">{participants.length} participants</div>
            { !this.props.isEditable ? "" :
              <div 
                id="poll-add-participant" 
                className="fas fa-plus"
                onClick={this.props.onAddParticipant}
              /> }
          </div>
        </td>
        {
          polltimes.map((polltime, idx) => 
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
            { !this.props.isEditable ? "" :
              <div className="poll-participant-edit fas fa-pen" onClick={this.handleStartEditing}></div> }
          </div>
        </td>
        {
          participant.availability.map(
            (response, idx) => (
              <td 
                className="poll-participant-availability" 
                key={idx} 
                availability={response.availability}>
                  {<div className={symbol_from_availability(response.availability)}></div>}
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
    this.handleDeleteParticipant = this.handleDeleteParticipant.bind(this);
    this.nameInput = React.createRef();
  }

  handleNameChange(e) {
    const participantIdx = this.props.idx;
    const newName = e.target.value;
    this.props.onNameChange(participantIdx, newName);
  }

  handleAvailabilityChange(polltimeIdx, e) {
    const participantIdx = this.props.idx;
    const previousAvailability = $(e.target).attr("availability");
    const newAvailability = previousAvailability == "Y" ? "M" : (previousAvailability == "M" ? "N" : "Y");
    this.props.onAvailabilityChange(participantIdx, polltimeIdx, newAvailability);
  }

  handleDeleteParticipant(e) {
    this.props.onDeleteParticipant(this.props.idx);
  }

  render() {
    const participant = this.props.participant;
    return(
      <tr className="poll-participant-row" editing="true">
        <td>
          <div className="poll-participant-details">
            <div 
              className="poll-participant-delete fas fa-trash"
              onClick={this.handleDeleteParticipant}
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
            (response, polltimeIdx) => (
              <td 
                className="poll-participant-availability" 
                key={polltimeIdx}>
                  <input
                    type="checkbox"
                    className={"poll-participant-availability-checkbox " + symbol_from_availability(response.availability)}
                    availability={response.availability}
                    onChange={(e) => this.handleAvailabilityChange(polltimeIdx, e)}
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

class PollSubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isDisabled() {
    return this.props.participant.name == "";
  }

  handleSubmit(e) {
    if (!this.isDisabled())
      this.props.onStopEditing();
  }

  render() {
    const participant = this.props.participant;
    const action = this.props.isNewParticipant ? "Send" : "Update";
    const cannotAttend = sum(participant.availability.map(a => a.availability!="N")) == 0;
    const note = this.isDisabled() ? "Enter your name first" : (cannotAttend ? "Cannot attend" : null);
    const hasNote = note != null;
    // TODO: Add cancel option
    
    return(
      <div id="poll-submit-button" 
        isdisabled={this.isDisabled().toString()} 
        cannotattend={cannotAttend.toString()} 
        hasnote={hasNote.toString()}
        onClick={this.handleSubmit}
        >
          <div id="poll-submit-action">{action}</div>
          <div id="poll-submit-note">{note}</div>
      </div>
    );
  }
}

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

// Load and render the poll

var poll = $("#main").attr("poll");
poll = JSON.parse(poll);
console.log(poll);

ReactDOM.render(
  <PollContainer poll={poll} />,
  $('#main')[0]
);

// Example poll:
// poll = { 
//   id: 1,
//   name: "GoT Marathon!!!",
//   author: {
//     id: 1,
//     first_name: "Adona",
//     last_name: "Iosif",
//     email: "adona.iosif@gmail.com"
//   },
//   location: "My place",
//   notes: "Winter is finally here!",
//   timezone: "America/New York",
//   polltimes: [
//     { id: 1, start: "2019-05-02T20:00:00Z", end: "2019-05-02T23:00:00Z" },
//     { id: 2, start: "2019-05-03T20:00:00Z", end: "2019-05-03T23:00:00Z" }
//   ],
//   participants: [
//     {
//       id: 1, 
//       name: "Adona-Luiza Iosif", 
//       availability: [ {availability: "Y"}, {availability: "Y"} ]
//     },
//     {
//       id: 2, 
//       name: "Angi", 
//       availability: [ {availability: "M"}, {availability: "Y"} ]
//     },
//     {
//       id: 3, 
//       name: "Maria", 
//       availability: [ {availability: "N"}, {availability: "N"} ]
//     }
//   ]
// };
