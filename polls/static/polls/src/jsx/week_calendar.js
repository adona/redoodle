import $ from "jquery";
import React from "react";

import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import momentPlugin from '@fullcalendar/moment';
import { toMoment } from '@fullcalendar/moment';
import moment from 'moment';

import css from "../scss/week_calendar.scss";

export default class WeekCalendar extends React.Component {
  calendarRef = React.createRef()
  getCalendar = () => this.calendarRef.current.getApi();

  handleEventRender = (info) => {
    var element = info.el;
    $(element)
      .append(`
        <div class='event-overlay'>
          <div class='remove-event-button' eventid='${info.event.id}'>
            ✕
          </div>
        </div>
      `);
    $(element).on('click', ".remove-event-button", this.handleRemoveEvent);
  }

  handleSelect = (selection) => {
    this.props.onAddEvent(selection.start, selection.end);
  }

  handleDateClick = () => {
    // For events created by clicking on the calendar, adjust their duration to be equal to that 
    // of the last event created (default to 1h if this is the first event)
    const calendar = this.getCalendar();
    const calendarEvents = this.props.calendarEvents;
    const nEvents = calendarEvents.length;
    const currentEvent = calendarEvents[nEvents-1];

    var duration;
    if (nEvents == 1) {
      duration = moment.duration(1, 'hours');
    } else {
      const prevEvent = calendarEvents[calendarEvents.length-2];
      duration = moment.duration(moment(prevEvent.end).diff(moment(prevEvent.start)));
    }

    const start = currentEvent.start;
    const end = toMoment(start, calendar).add(duration).toDate();
    this.props.onUpdateEvent(currentEvent.id, start, end);
  }

  handleUpdateEvent = (info) => { // Move or resize
    const updatedEvent = info.event;
    this.props.onUpdateEvent(updatedEvent.id, updatedEvent.start, updatedEvent.end);
  }

  handleRemoveEvent = (evt) => {
    const id = $(evt.target).attr('eventid')
    this.props.onRemoveEvent(id);
  }

  handlePrev = () => {
    const calendar = this.getCalendar();
    calendar.prev();
    this.updateDateRange();
  }

  handleNext = () => {
    const calendar = this.getCalendar();
    calendar.next();
    this.updateDateRange();
  }

  updateDateRange = () => {
    const calendar = this.getCalendar();
    const today = moment(calendar.getDate());
    const weekStart = moment(today).startOf('week');
    const weekEnd = moment(today).endOf('week');
    const dateRange = weekStart.format("MMM D") + " - " + weekEnd.format("D, YYYY");
    $(".date-range").text(dateRange);
  }

  render() {
    console.log("render");
    return (
      <div className="week-calendar">
        <div className="week-calendar-header">
          <div className="prev-button">&lt;</div>
          <div className="date-range"></div>
          <div className="next-button">&gt;</div>
        </div>
        <FullCalendar
          ref={this.calendarRef}
          plugins={[ timeGridPlugin, interactionPlugin, momentPlugin ]}
          defaultView="timeGridWeek"
          header={false}
          height={550}
          columnHeaderHtml={(date) => {
            var date = moment(date);
            const columnHTML = `
              <div class="header-month">${date.format("MMM")}</div>
              <div class="header-day">${date.format("D")}</div>
              <div class="header-weekday">${date.format("ddd")}</div>
            `;
            return columnHTML;
          }}
          slotLabelFormat={{hour: 'numeric', minute: '2-digit'}}
          eventTimeFormat={{hour: 'numeric', minute: '2-digit'}}
          scrollTime={"08:00:00"}
          events={this.props.calendarEvents}
          eventRender={this.handleEventRender}
          selectable={true}
          snapDuration={'00:15:00'}
          select={this.handleSelect}
          dateClick={this.handleDateClick}
          editable={true}
          eventResize={this.handleUpdateEvent}
          eventDrop={this.handleUpdateEvent}
        />
      </div>
    )
  }

  componentDidMount() {
    this.updateDateRange();
    $('.prev-button').on('click', this.handlePrev);
    $('.next-button').on('click', this.handleNext);
  }
}
