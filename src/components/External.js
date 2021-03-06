import React, { Component } from 'react';
import $ from 'jquery';
import 'fullcalendar';
import 'jquery-ui-dist/jquery-ui'


class External extends React.Component {
    constructor(){
        super()
    }
    componentDidMount() {
        $('#external-events .fc-event').each(function() {
        // store data so the calendar knows to render an event upon drop
         
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
				stick: true // maintain when user navigates (docs on the renderEvent method)
            });
            	// make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,  // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
            });
        });
  }
    render() {
        return <div id='external-events' className='event-list'>
                <h4>Draggable Events</h4>
                <div className='fc-event'>Event 1</div>
                <div className='fc-event'>Event 2</div>
                <div className='fc-event'>Event 3</div>
                <div className='fc-event'>Event 4</div>
                <div className='fc-event'>Event 5</div>
                <p>
                    <input type='checkbox' id='drop-remove' />
                    <label for='drop-remove'>remove after drop</label>
                </p>
            </div>;
      }
     
    }
    
  
  
export default External;


