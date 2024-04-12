import '../css/calendar-view.css'


import React from 'react'

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tues</th>
            <th>Wed</th>
            <th>Thurs</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7</td>
            <td>
              <span className='date'>8</span>
              <ul>
                <li>R&S Classroom</li>
                <li>Excellence Seminar</li>
              </ul>
            </td>
            <td>
              <span className='date'>9</span>
              <ul>
                <li>R&S Classroom</li>
              </ul>
            </td>
            <td>
              <span className='date'>10</span>
              <ul>
                <li>Job Hunting</li>
                <li>R&S Classroom</li>
              </ul>
            </td>
            <td>
              <span className='date'>11</span>
              <ul>
                <li>Apartment Hunting</li>
                <li>Job Hunting</li>
              </ul>
            </td>
            <td>
            <span className='date'>12</span>
              <ul>
                <li>R&S Classroom</li>
                <li>Apartment Hunting</li>
              </ul>
            </td>
            <td>
            <span className='date'>13</span>
              <ul>
                <li>R&S Classroom</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <span className='date'>14</span>
              <ul>
                <li>R&S Classroom</li>
                <li>Excellence Seminar</li>
              </ul>
            </td>
            <td>
              <span className='date'>15</span>
              <ul>
                <li>R&S Classroom</li>
              </ul>
            </td>
            <td>
              <span className='date'>16</span>
              <ul>
                <li>Job Hunting</li>
                <li>R&S Classroom</li>
              </ul>
            </td>
            <td>
              <span className='date'>17</span>
              <ul>
                <li>Apartment Hunting</li>
                <li>Job Hunting</li>
              </ul>
            </td>
            <td>            
              <span className='date'>18</span>
              <ul>
                <li>R&S Classroom</li>
              </ul></td>
            <td>
            <span className='date'>19</span>
              <ul>
                <li>R&S Classroom</li>
                <li>Apartment Hunting</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default CalendarView
