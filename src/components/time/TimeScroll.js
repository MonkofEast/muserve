import * as React from 'react';
import ScheduleSelector from 'react-schedule-selector'
import SelectedInfo from '../content/SelectedInfo';
import HallRoom from '../content/HallRoom';

class TimeScroll extends React.Component {
    state = { schedule: ['Room 201', 'Room 311', 'Room 401', 'Room 503'] }

    handleChange = newSchedule => {
        this.setState({ schedule: newSchedule })
    }

    render() {
        return (
            <div>
                <ScheduleSelector
                    selection={this.state.schedule}
                    numDays={4}
                    minTime={6}
                    maxTime={23}
                    hourlyChunks={2}
                    onChange={this.handleChange}
                    startDate={new Date('Nov 4 2022')}
                    width='100%'
                    timeFormat='hh:mmA'
                />
            </div>
        )
    }
}

export default TimeScroll